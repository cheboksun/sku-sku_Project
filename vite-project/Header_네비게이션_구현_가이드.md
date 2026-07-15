# Header 버튼 클릭 → 페이지 이동 구현 가이드

## 1. 지금 상태 진단

`src/hyunwoo/Header.jsx`를 보면 메뉴들이 전부 아무 동작도 안 하는 상태다.

```jsx
<div className={styles["menu-title"]}>PROJECT</div>
<div className={styles["menu-title"]}>TEAM</div>
<div className={styles["menu-title"]}>COMMUNITY</div>

<div className={styles["mega-menu"]}>
  <div className={styles["mega-column"]}>
    <a href="#">14기</a>
    <a href="#">13기</a>
    ...
  </div>
</div>
```

- `PROJECT`/`TEAM`/`COMMUNITY`는 `<div>`라서 클릭해도 애초에 아무 반응이 없음
- `<a href="#">`는 클릭하면 페이지 맨 위로 스크롤만 되고 실제로 어디로도 안 감
- `campus-btn`, `google-btn`도 `<button>`만 있고 `onClick`이 없음

이걸 고치려면 "버튼을 누르면 어디로 이동시킬지"를 두 가지 방식 중 하나로 정해야 한다.

---

## 2. 두 가지 구현 방식

| | 방식 A: 라우팅(페이지 이동) | 방식 B: 앵커(스크롤 이동) |
|---|---|---|
| 언제 쓰나 | TEAM, PROJECT 등이 완전히 다른 페이지일 때 | 한 페이지 안에 섹션들이 이미 다 있고 그쪽으로 스크롤만 하면 될 때 |
| 이 프로젝트 상황 | `MainPage.jsx`(랜딩), `HyunwooPage.jsx`(Header+Team+Footer)가 이미 분리된 별도 컴포넌트 → 이 방식에 가까움 | 만약 나중에 한 페이지에 다 합칠 거면 이 방식 |
| 필요한 것 | `react-router-dom`의 `<Routes>`, `<Link>` | 각 섹션에 `id` + `scroll-behavior: smooth` |

지금 프로젝트는 `main.jsx`에 이미 `<BrowserRouter>`가 감싸져 있고 `react-router-dom`도 설치돼 있는데, `App.jsx`에는 아직 `<Routes>`가 없다. 즉 라우터를 "쓸 준비"만 해놓고 실제로는 안 쓰고 있는 상태. **구조상 방식 A(라우팅)로 가는 게 자연스럽다.** 아래는 방식 A 기준으로 단계별 설명이고, 맨 끝에 방식 B도 짧게 정리했다.

---

## 3. 방식 A: react-router-dom으로 페이지 이동 구현

### 3-1. 라우트(경로) 설계

먼저 "주소가 뭐가 될지"부터 정한다. Header 메뉴 구성을 보면 이 정도가 필요해 보인다.

| 메뉴 | 경로(예시) | 연결할 컴포넌트 |
|---|---|---|
| 홈(로고) | `/` | `MainPage` |
| TEAM | `/team` | `HyunwooPage` (또는 `Team`만 따로) |
| PROJECT | `/project` | 아직 없음 → 새로 만들거나 MainPage의 Projects 섹션 재사용 |
| COMMUNITY(모집공고) | `/community` | 아직 없음 |

지금은 실제로 존재하는 페이지가 `MainPage`, `HyunwooPage`뿐이니, 우선 이 둘부터 라우트로 연결하고 나머지는 나중에 컴포넌트 만들면서 추가하면 된다.

### 3-2. `main.jsx` 확인 (이미 되어 있음)

```jsx
// src/main.jsx — 수정 불필요, 확인만
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

`<Routes>`/`<Link>`가 동작하려면 이 `<BrowserRouter>`가 앱을 감싸고 있어야 하는데, 이미 되어 있으니 이 파일은 손댈 게 없다.

### 3-3. `App.jsx`에 `<Routes>` 추가

지금:
```jsx
const App = () => {
  return (
    <div>
      <MainPage />
    </div>
  );
};
```

변경:
```jsx
import { Routes, Route } from "react-router-dom";
import MainPage from "./boksun/MainPage";
import HyunwooPage from "./hyunwoo/HyunwooPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/team" element={<HyunwooPage />} />
    </Routes>
  );
};
```

`<Route path="주소" element={보여줄 컴포넌트} />` 하나가 "이 주소로 오면 이 컴포넌트를 그려라"는 뜻. 주소가 바뀌면 `<Routes>`가 알아서 맞는 컴포넌트로 화면을 갈아끼운다.

### 3-4. `Header.jsx`에서 버튼을 `<Link>`로 교체

`<a href="#">`나 그냥 `<div>`로는 라우터가 반응하지 않는다. `react-router-dom`이 제공하는 `<Link>`로 바꿔야 한다.

```jsx
import { Link } from "react-router-dom";
```

```jsx
// 변경 전
<div className={styles["menu-title"]}>TEAM</div>

// 변경 후
<Link to="/team" className={styles["menu-title"]}>TEAM</Link>
```

로고도 마찬가지:
```jsx
// 변경 전
<a href="/" className={styles.logo}>

// 변경 후
<Link to="/" className={styles.logo}>
```

**왜 `<a href>` 대신 `<Link to>`인가?**
`<a href="/team">`을 누르면 브라우저가 서버에 `/team` 페이지를 새로 요청하면서 **전체 새로고침**이 일어난다. React 앱은 그럴 필요 없이 JS로 화면 내용만 바꾸면 되는데, `<Link>`는 클릭을 가로채서 새로고침 없이 라우트만 바꿔준다. 이게 SPA(Single Page Application) 방식의 핵심.

### 3-5. 아직 페이지가 없는 메뉴(PROJECT, COMMUNITY, 14기/13기 등)

라우트로 만들 컴포넌트가 아직 없는 메뉴는 지금 당장 `<Link>`로 바꿔봐야 빈 화면(404)만 뜬다. 두 가지 선택지:

1. **일단 페이지 자체를 최소한으로 만들어서 라우트에 연결** (내용은 나중에 채움)
2. **아직 연결하지 말고 `<Link>` 대신 그대로 두거나 `#` 유지** — 페이지 준비되면 그때 `<Link>`로 교체

무리해서 다 한 번에 연결하려 하지 말고, 실제로 존재하는 페이지(TEAM 정도)부터 연결하는 걸 추천.

### 3-6. 서브메뉴(14기/13기/12기/11기) 처리

`Team.jsx`는 이미 자체적으로 `useState(14)`로 14기/13기 탭을 전환하는 로직이 있다. 즉 Header의 "14기" 링크를 누르면 **TEAM 페이지로 이동하면서 동시에 14기 탭이 선택된 상태**가 되어야 자연스럽다. 이건 URL 쿼리 파라미터로 넘기는 방법이 깔끔하다.

```jsx
// Header.jsx
<Link to="/team?gen=14">14기</Link>
<Link to="/team?gen=13">13기</Link>
```

```jsx
// Team.jsx
import { useSearchParams } from "react-router-dom";

export default function Team() {
  const [searchParams] = useSearchParams();
  const initialGen = Number(searchParams.get("gen")) || 14;
  const [tab, setTab] = useState(initialGen);
  // ...
}
```

이렇게 하면 `/team?gen=13`으로 들어오는 순간 13기 탭이 바로 열린 채로 페이지가 뜬다.

### 3-7. 현재 위치 메뉴 강조 (선택사항)

`<Link>` 대신 `<NavLink>`를 쓰면 지금 그 경로에 있을 때 자동으로 클래스가 붙어서 강조 스타일을 줄 수 있다.

```jsx
import { NavLink } from "react-router-dom";

<NavLink
  to="/team"
  className={({ isActive }) =>
    isActive ? `${styles["menu-title"]} ${styles.active}` : styles["menu-title"]
  }
>
  TEAM
</NavLink>
```

---

## 4. 방식 B: 한 페이지 안에서 섹션 스크롤 (참고용)

만약 나중에 TEAM/PROJECT를 별도 페이지가 아니라 `MainPage` 안의 섹션으로 합치기로 하면, 훨씬 간단하다.

1. 각 섹션 컴포넌트 최상단 요소에 `id` 부여
   ```jsx
   <section id="team-section"> ... </section>
   ```
2. Header 링크는 `#섹션id` 그대로 사용
   ```jsx
   <a href="#team-section">TEAM</a>
   ```
3. 부드럽게 스크롤되게 CSS 한 줄 추가 (`index.css` 등 전역에)
   ```css
   html {
     scroll-behavior: smooth;
   }
   ```

라우터도 필요 없고 새 페이지도 안 만들어도 되지만, 대신 모든 콘텐츠가 한 페이지에 다 로드되어 있어야 한다는 전제가 붙는다.

---

## 5. 정리 — 지금 순서대로 하면 되는 일

1. `App.jsx`에 `<Routes>` 추가하고 `/`, `/team` 두 개만 우선 연결
2. `Header.jsx`의 로고와 TEAM 메뉴를 `<Link>`로 교체
3. 나머지(PROJECT, COMMUNITY)는 실제 페이지 컴포넌트가 생기는 대로 하나씩 `<Link>`로 교체
4. 14기/13기 서브메뉴는 `?gen=` 쿼리 파라미터로 `Team.jsx`의 탭 상태와 연결
5. 필요하면 `NavLink`로 현재 메뉴 강조

실제 코드 적용은 말씀해주시면 바로 진행하겠습니다.
