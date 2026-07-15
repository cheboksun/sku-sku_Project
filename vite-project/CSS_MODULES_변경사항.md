# Header/Footer/Team CSS 스코프 격리 작업 정리

## 1. 문제 상황

merge 이후 `main` 브랜치에서 `MainPage` 화면이 이전과 다르게(전체적으로 아래로 밀린 것처럼) 보이는 현상이 있었다.

원인을 추적한 결과, `App.jsx`가 아래와 같이 `Header`, `Footer`, `HyunwooPage`를 **JSX에서는 주석 처리해서 렌더링하지 않지만, import는 그대로 살려두고** 있었다.

```jsx
// App.jsx (변경 전)
import HyunwooPage from "./hyunwoo/HyunwooPage";
import Header from "./hyunwoo/Header.jsx";
import MainPage from "./boksun/MainPage";
import Footer from "./hyunwoo/Footer.jsx";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <MainPage />
      {/* <Footer /> */}
    </div>
  );
};
```

JS의 `import`는 화면에 렌더링되지 않아도 파일이 실행되면서 그 안에 있는 `import "./Header.css"` 같은 **CSS side-effect import**는 그대로 로드된다. 즉 `<Header />`를 안 그려도 `Header.css`는 전역에 적용되고 있었다.

문제는 `Header.css` 최상단에 있던 전역 리셋 코드였다.

```css
/* Header.css (변경 전) */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  padding-top: 77px;
  background: #000;
  font-family: "Pretendard", sans-serif;
  overflow-x: hidden;
}
```

`Header`를 화면에 그리지도 않는데 `body`에 `padding-top: 77px`가 강제로 걸리면서, `MainPage`의 히어로 섹션(`h-screen` 기준 풀스크린 레이아웃)이 위로 77px만큼 밀려서 다르게 보인 것.

## 2. 왜 CSS Modules로 바꿨는가

`Header.css` / `Footer.css` / `Team.css`는 전부 클래스명을 그냥 문자열로 쓰는 **일반 전역 CSS**였다 (`.header`, `.footer`, `.team`처럼). 이 방식의 문제:

- 파일별로 스코프가 없어서, 다른 파일에 같은 클래스명이 있으면 서로 덮어씀
- 컴포넌트가 화면에 그려지든 안 그려지든, import만 되면 전역에 스타일이 적용됨 (지금 사고가 난 이유)

**CSS Modules**(`*.module.css`)로 바꾸면 Vite가 빌드 시 클래스명을 파일별로 고유한 이름으로 자동 변환한다 (예: `.header` → `.header_a1b2c3`). JS에서는 `styles.header`처럼 참조하기 때문에, 그 파일을 import한 컴포넌트가 실제로 그 클래스를 사용한 요소에만 스타일이 적용된다. 다른 컴포넌트/페이지로 새어나갈 수가 없는 구조.

## 3. 스코프의 한계 — CSS Modules가 못 잡아주는 것

CSS Modules는 **클래스(또는 id) 선택자만** 스코프 처리한다. `body`, `html`, `*` 같은 전역 선택자나 클래스 없이 단독으로 쓰인 태그 선택자(`button { }` 등)는 CSS Modules로 바꿔도 여전히 전역으로 적용된다.

그래서 `Header.css`의 `* {}` / `body {}` 블록은 CSS Modules 전환만으로는 해결이 안 됐고, **직접 삭제**한 뒤 필요한 효과만 실제로 Header를 사용하는 페이지(`HyunwooPage`)의 래퍼 요소로 옮겼다.

나머지 `Footer.css`, `Team.css`와 `Header.css`의 다른 부분은 전부 `.클래스 { }` 또는 `.클래스 하위태그 { }` 형태로만 작성되어 있어 별도 전역 누수 요소는 없었다 (grep으로 확인).

## 4. 파일별 변경 내역

### Header.css → Header.module.css
- **삭제**: `* {}` 전역 리셋, `body { padding-top: 77px; ... }` — Tailwind가 이미 preflight로 기본 리셋을 제공하고 있어 중복이었고, `body` 전역 적용은 애초에 의도(고정 헤더 높이만큼 콘텐츠 밀어내기)가 Header를 실제로 쓰는 페이지에만 필요한 것이었기 때문.
- 나머지 `.header`, `.nav`, `.logo` 등 클래스는 그대로 유지 (스코프만 자동으로 걸림).

### Footer.css → Footer.module.css / Team.css → Team.module.css
- 내용 변경 없음, 파일만 `.module.css`로 전환 (클래스 자동 스코프 적용 목적).

### Header.jsx / Footer.jsx / Team.jsx
```diff
- import "./Header.css";
+ import styles from "./Header.module.css";

- <header className="header">
+ <header className={styles.header}>

- <div className="header-inner">
+ <div className={styles["header-inner"]}>
```
모든 `className="문자열"`을 `styles.xxx` (하이픈 있는 이름은 `styles["xxx-yyy"]`)로 교체. `Team.jsx`의 조건부 클래스(`tab === 14 ? "active" : ""`)도 `styles.active`로 교체.

### HyunwooPage.jsx
```diff
  function HyunwooPage() {
    return (
-     <>
+     <div className="pt-[77px] bg-black overflow-x-hidden">
        <Header />
        <Team />
        <Footer />
-     </>
+     </div>
    );
  }
```
`body`에서 지운 77px 오프셋/배경/가로스크롤 방지를 Tailwind 유틸리티 클래스로 옮겨서, **Header를 실제로 렌더링하는 페이지에만** 적용되게 함.

## 5. 남은 것 / 확인 필요한 것

- 기존 `Header.css`, `Footer.css`, `Team.css` 3개 파일은 더 이상 어디서도 import하지 않는 죽은 파일이지만, 삭제 승인이 완료되지 않아 폴더에 그대로 남아있음. 삭제 여부 결정 필요.
- `App.jsx`의 미사용 import(`HyunwooPage`, `Header`, `Footer`)는 그대로 뒀음 (나중에 실제로 쓸 예정이라고 해서) — 이제는 CSS가 스코프 처리되어 있어 안 그려져도 전역에 영향 없음.
- 실제 브라우저 렌더링 확인은 로컬에서 `npm run dev`와 `npm run build && npm run preview`를 각각 띄워서 직접 비교 필요. (현재 작업 환경은 rolldown 바이너리 플랫폼 문제로 빌드 자체가 안 되어 검증 불가)
