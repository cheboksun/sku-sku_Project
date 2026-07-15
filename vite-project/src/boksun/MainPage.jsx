import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* ---------------- 공통 스크롤 애니메이션 variants ---------------- */
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const fadeUp30 = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeUp100 = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------- PROGRAM 소개 타이핑 효과 ---------------- */
const BOLD_WORD = "프로그램";
const FULL_TEXT = `멋쟁이사자처럼 14기에서 진행되는 ${BOLD_WORD}을 소개합니다.`;

function ProgramIntro() {
  const [typedLength, setTypedLength] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let timeoutId;

    const tick = (index) => {
      setTypedLength(index);
      if (index < FULL_TEXT.length) {
        timeoutId = setTimeout(
          () => tick(index + 1),
          Math.floor(Math.random() * 100),
        );
      }
    };

    const startTyping = () => {
      clearTimeout(timeoutId);
      setTypedLength(0);
      timeoutId = setTimeout(() => tick(1), Math.floor(Math.random() * 100));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTyping();
          } else {
            clearTimeout(timeoutId);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const shown = FULL_TEXT.slice(0, typedLength);
  const boldStart = FULL_TEXT.indexOf(BOLD_WORD);
  const boldEnd = boldStart + BOLD_WORD.length;

  const before = shown.slice(0, boldStart);
  const boldPart = shown.slice(boldStart, boldEnd);
  const after = shown.slice(boldEnd);

  return (
    <div ref={containerRef} className="h-[300px] w-full relative">
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        <p className="text-white text-[24px] text-center">
          {before}
          <span className="font-bold text-[25px]">{boldPart}</span>
          {after}
        </p>
      </div>
    </div>
  );
}

/* ---------------- 3가지 방향성 데이터 ---------------- */
const DIRECTIONS = [
  {
    label: "자기주도성",
    desc: "나만의 커리어를 직접 설계하고,\n만들어갈 수 있습니다",
    bg: "#4B76D3",
    icon: "/clonecoding/main/Self.png",
  },
  {
    label: "협력성",
    desc: "동료들과 개발 고민을 함께\n협력하고 공유하며,\n성장할 수 있습니다.",
    bg: "#264C9F",
    icon: "/clonecoding/main/cooperation.png",
  },
  {
    label: "가능성",
    desc: "나만의 커리어를 직접 설계하고,\n만들어갈 수 있습니다",
    bg: "#142F69",
    icon: "/clonecoding/main/Possibility.png",
  },
];

/* ---------------- PROGRAM info 데이터 ---------------- */
const PROGRAMS = [
  {
    title: "함께 공부하는",
    highlight: "스터디",
    desc: "공부하고 싶은 트랙을 함께 공부하며\n지식을 습득할 수 있는 학습의 장이 마련됩니다.",
    place: "성결대학교 성결관",
    time: "스터디 별로 상이 (스쿠스쿠 사이버캠퍼스 내 일정 참고)",
    image: "/clonecoding/main/Main3_1.png",
    reverse: false,
  },
  {
    title: "세분화된 교육,",
    highlight: "정기세션",
    desc: "아기사자들에게 트랙별로 교육을 제공합니다.\n매주 정기세션에서 아기사자들과 운영진이 함께 성장합니다.",
    place: "성결대학교 성결관",
    time: "매주 목요일 18시-21시",
    image: "/clonecoding/main/Main3_2.png",
    reverse: true,
  },
  {
    title: "서비스의 초석",
    highlight: "아이디어톤",
    desc: "서비스 아이디어를 다듬고 실현 가능성을 테스트하는 시간입니다.\n열정적인 토론과 발표로 아이디어의 깊이를 더합니다.",
    place: "성결대학교 성결관",
    time: "스터디 별로 상이 (스쿠스쿠 사이버캠퍼스 내 일정 참고)",
    image: "/clonecoding/main/Main3_3.png",
    reverse: false,
  },
  {
    title: "상상을 현실로 만드는",
    highlight: "해커톤",
    desc: "주어진 시간 내에 팀을 이뤄 서비스를 기획/개발합니다.\n실전 감각을 익히고 팀워크를 높이는 경험을 제공합니다.",
    place: "성결대학교 성결관",
    time: "스터디 별로 상이 (스쿠스쿠 사이버캠퍼스 내 일정 참고)",
    image: "/clonecoding/main/Main3_4.png",
    reverse: true,
  },
  {
    title: "하계",
    highlight: "MT",
    desc: "팀워크를 다지는 특별한 시간!\n친목과 소통을 통해 끈끈한 유대감을 형성합니다.",
    place: "성결대학교 외부 장소",
    time: "방학 중 진행",
    image: "/clonecoding/main/Main3_5.png",
    reverse: false,
  },
];

/* ---------------- TRACKS 데이터 ---------------- */
const TRACKS = [
  {
    id: "frontend",
    label: "프론트엔드",
    subLabel: "FRONT-END",
    icon: "/clonecoding/main/Main4_React.png",
    detailImage: "/clonecoding/main/front.png",
    accentColor: "#F75222",
    selectedBg: "#7A3B1C",
    hoverClass: "hover:text-[#F75222]",
  },
  {
    id: "backend",
    label: "백엔드",
    subLabel: "BACK-END",
    icon: "/clonecoding/main/Main4_spring.png",
    detailImage: "/clonecoding/main/back_.png",
    accentColor: "#0ACF83",
    selectedBg: "#1C7674",
    hoverClass: "hover:text-[#0ACF83]",
  },
  {
    id: "design",
    label: "기획/디자인",
    subLabel: "PM/DESIGN",
    icon: "/clonecoding/main/Main4_figma.png",
    detailImage: "/clonecoding/main/design_.png",
    accentColor: "#FF6F71",
    selectedBg: "#7A2C2C",
    hoverClass: "hover:text-[#FF6F71]",
  },
];

function Tracks() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedTrack = TRACKS.find((t) => t.id === selectedId);

  return (
    <div className="bg-[#121212] pt-[10%] pb-[8%] flex flex-col items-center">
      <motion.div
        className="flex flex-col text-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#3B79FF] fontBold sm:text-[30px] text-[20px]">
          TRACKS
        </p>
        <p className="fontThin text-[#ffffff] sm:mt-8 mt-2 sm:text-[18px] text-[9px]">
          멋쟁이사자처럼에서 각 트랙별로 세분화된 교육과 경험을 제공합니다.
        </p>
        <p
          onClick={() => selectedTrack && setSelectedId(null)}
          className={`fontMedium mt-4 text-white transition-opacity duration-300 ${
            selectedTrack ? "opacity-100 cursor-pointer" : "opacity-0"
          }`}
        >
          상상을 현실로 만드는 시작,{" "}
          <span
            className="font-semibold"
            style={{
              color: selectedTrack ? selectedTrack.accentColor : "transparent",
            }}
          >
            {selectedTrack ? selectedTrack.label : ""}
          </span>
          팀 커리큘럼을 소개합니다.
        </p>
      </motion.div>

      <div className="bg-[#262626] mt-10 w-full h-[160px] flex items-center justify-center text-white overflow-hidden">
        {selectedId === null ? (
          <div className="flex items-center justify-evenly h-[160px] w-full px-10">
            {TRACKS.map((track) => (
              <div
                key={track.id}
                onClick={() => setSelectedId(track.id)}
                className={`flex items-center cursor-pointer transition-transform hover:scale-105 ${track.hoverClass}`}
              >
                <img className="w-12 mr-4" alt={track.label} src={track.icon} />
                <div>
                  <span className="text-[18px]">{track.label}</span>
                  <span className="ml-3 fontEL text-[12px]">
                    {track.subLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="flex items-center justify-evenly h-[160px] w-full"
            style={{ backgroundColor: selectedTrack.selectedBg }}
          >
            <div
              onClick={() => setSelectedId(null)}
              className="flex cursor-pointer"
            >
              <img className="w-12 mr-4" alt="" src={selectedTrack.icon} />
              <div className="text-center flex items-center">
                <p className="text-[20px] font-semibold">
                  {selectedTrack.label}
                </p>
                <p className="text-[14px] ml-2">{selectedTrack.subLabel}</p>
              </div>
            </div>
            <img
              className="text-[16px] md:w-[50%] w-[900px]"
              alt=""
              src={selectedTrack.detailImage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- PROJECTS 데이터 ---------------- */
const PROJECTS = [
  {
    title: "승부예측 : SOLVIT-FINAL",
    subtitle: "2025 영암체전 결승전 승부예측",
    image: "/clonecoding/project/2025영암체전.png",
    link: "https://solvit-final.sku-sku.com/",
  },
  {
    title: "나는 어떤 신데렐라일까?",
    subtitle: "2025 동아리페스티벌 심리테스트",
    image: "/clonecoding/project/신데렐라.png",
    link: "https://cinderella.sku-sku.com",
  },
  {
    title: "13TH SKU-SKU",
    subtitle: "성결대 멋쟁이사자처럼 13기 홈페이지",
    image: "/clonecoding/project/스쿠스쿠리뉴얼.png",
    link: "https://sku-sku.com/",
  },
  {
    title: "Page",
    subtitle: "2025년 동아리 연합회 웹사이트",
    image: "/clonecoding/project/41대동연page.png",
    link: "https://page.sku-sku.com/",
  },
  {
    title: "12TH SKU-SKU",
    subtitle: "성결대 멋쟁이사자처럼 12기 홈페이지",
    image: "/clonecoding/project/12기스쿠스쿠.png",
    link: "https://legacy.sku-sku.com/",
  },
  {
    title: "퍼즐 물품 대여 서비스",
    subtitle: "동아리원들의 편의성 확대",
    image: "/clonecoding/project/퍼즐물품대여.png",
    link: "https://sku-sku.com/",
  },
  {
    title: "보궐선거",
    subtitle: "입후보자 확인 및 투표 격려",
    image: "/clonecoding/project/2024보궐선거.png",
    link: "https://vote2024.sku-sku.com/by-election",
  },
  {
    title: "새로운 안녕 올라 HOLA!",
    subtitle: "2024 신입생 오리엔테이션",
    image: "/clonecoding/project/hola.png",
    link: "https://welcome-hola.sku-sku.com/",
  },
  {
    title: "2024 총선거",
    subtitle: "입후보자 확인 및 투표 격려",
    image: "/clonecoding/project/2024총선거.png",
    link: "https://vote2024.sku-sku.com/main-election",
  },
  {
    title: "글LOVER",
    subtitle: "2023 글천절",
    image: "/clonecoding/project/글천절.png",
    link: "https://glover.sku-sku.com/",
  },
  {
    title: "파동",
    subtitle: "2023 영암체전",
    image: "/clonecoding/project/2023영암체전.png",
    link: "https://wave-renew.sku-sku.com/",
  },
  {
    title: "SKETCH VILLAGE",
    subtitle: "2023 동아리 페스티벌",
    image: "/clonecoding/project/39대동연sketch.png",
    link: "https://sketch39.sku-sku.com/",
  },
  {
    title: "졸업학점계산기",
    subtitle: "졸업요건 확인",
    image: "/clonecoding/project/졸업학점계산기.png",
    link: "https://gcc.sku-sku.com/",
  },
  {
    title: "POOL:US",
    subtitle: "2023 영암축전",
    image: "/clonecoding/project/2023영암축전poolus.png",
    link: "https://poolus.sku-sku.com/",
  },
];

function Projects() {
  return (
    <div className="bg-[#121212] pt-14 sm:pb-30 pb-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col text-center justify-center">
          <p className="text-[#3B79FF] fontBold sm:text-[30px] text-[20px]">
            PROJECTS
          </p>
          <p className="fontThin text-[#ffffff] sm:mt-8 mt-2 sm:text-[18px] text-[9px] mb-12">
            성결대학교 멋쟁이사자처럼과 함께한 프로젝트들을 소개합니다.
          </p>
        </div>

        <div className="sm:mx-9 mx-4">
          <div className="flex justify-center items-center">
            <div className="w-[90%]">
              <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                speed={4000}
              >
                {PROJECTS.map((project, i) => (
                  <SwiperSlide key={i} className="!w-[468px] h-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center w-full cursor-pointer"
                    >
                      <div
                        className="w-full aspect-[16/9] rounded-[10px] overflow-hidden mx-2 sm:mx-3 md:mx-4 lg:mx-5 bg-cover bg-center flex flex-col justify-end p-4"
                        style={{
                          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${project.image})`,
                        }}
                      >
                        <div className="text-[10px] sm:text-base md:text-lg lg:text-xl xl:text-2xl fontEB text-white">
                          {project.title}
                        </div>
                        <p className="pt-1 text-[8px] sm:text-sm md:text-base lg:text-lg text-white fontRegular">
                          {project.subtitle}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------- MainPage ---------------- */
const MainPage = () => {
  return (
    <>
      <style>{`
  @font-face {
    font-family: "Pretendard-Thin";
    src: url("/clonecoding/fonts/Pretendard-Thin.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard-ExtraLight";
    src: url("/clonecoding/fonts/Pretendard-ExtraLight.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard-Light";
    src: url("/clonecoding/fonts/Pretendard-Light.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("/clonecoding/fonts/Pretendard-Regular.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard-Medium";
    src: url("/clonecoding/fonts/Pretendard-Medium.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard-SemiBold";
    src: url("/clonecoding/fonts/Pretendard-SemiBold.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard-Bold";
    src: url("/clonecoding/fonts/Pretendard-Bold.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard-ExtraBold";
    src: url("/clonecoding/fonts/Pretendard-ExtraBold.otf") format("opentype");
  }
  @font-face {
    font-family: "Pretendard-Black";
    src: url("/clonecoding/fonts/Pretendard-Black.otf") format("opentype");
  }

  .fontThin { font-family: "Pretendard-Thin", sans-serif; }
  .fontEL { font-family: "Pretendard-ExtraLight", sans-serif; }
  .fontLight { font-family: "Pretendard-Light", sans-serif; }
  .fontRegular { font-family: "Pretendard-Regular", sans-serif; }
  .fontMedium { font-family: "Pretendard-Medium", sans-serif; }
  .fontSB { font-family: "Pretendard-SemiBold", sans-serif; }
  .fontBold { font-family: "Pretendard-Bold", sans-serif; }
  .fontEB { font-family: "Pretendard-ExtraBold", sans-serif; }
  .fontBlack { font-family: "Pretendard-Black", sans-serif; }
`}</style>

      {/* Hero */}
      <div className="relative h-screen w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="absolute inset-0 bg-[url('/clonecoding/main/Main1.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-80" />
        </div>
        <motion.div
          className="relative flex flex-col justify-center h-full text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="fontSB text-[28px] sm:pl-[8%] pl-6 sm:text-[clamp(28px,2.9vw,3rem)]">
            <p>상상을 현실로 만드는</p>
            <p>
              내 손 안에{" "}
              <span className="text-[#3B79FF] block sm:inline">스쿠스쿠</span>
            </p>
          </div>
          <div className="sm:pt-9 pt-6 sm:pl-[8%] pl-6 sm:text-[clamp(9px,2.9vw,16px)] fontThin text-[9px]">
            <p>
              <span className="fontSB">성결대학교 멋쟁이사자처럼</span>은
            </p>
            <p>
              자신이 원하는 IT 서비스를 구현하고 싶은 성결대학교 학생들이 모인
              동아리입니다.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="absolute sm:flex hidden flex-col items-center bottom-[10%] left-1/2 -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <p className="fontSB text-sm text-[#666666]">Scroll down</p>
          <img
            alt="마우스 모양"
            className="w-[23px] mt-2"
            src="/clonecoding/Mouse.png"
          />
        </motion.div>
      </div>

      {/* 3가지 방향성 */}
      {/* 3가지 방향성 wrapper */}
      <div className="relative flex flex-col justify-between h-full text-white items-center py-10 sm:py-24">
        <div className="absolute inset-0 bg-[url('/clonecoding/main/Main2.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-80" />
        </div>
        <div className="relative flex flex-col justify-center h-full text-white items-center sm:space-y-30 sm:pt-32 py-16 space-y-3">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <p className="sm:text-[clamp(9px,2.9vw,16px)] text-[11px] fontThin">
              성결대학교 멋쟁이사자처럼의
            </p>
            <p className="sm:text-[clamp(20px,2.9vw,30px)] text-[12px] fontSB">
              3가지 방향성
            </p>
          </motion.div>

          <div className="flex flex-wrap w-full px-4 sm:px-20 justify-center gap-x-2 gap-y-4 sm:gap-x-22 sm:gap-y-6 mt-2">
            {DIRECTIONS.map((d, i) => (
              <motion.div
                key={d.label}
                className="flex flex-1 min-w-0 sm:max-w-[25%] w-full h-auto sm:h-48 rounded-sm sm:rounded-xl items-center justify-evenly px-2 sm:px-3 py-2"
                style={{ backgroundColor: d.bg }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUp30}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="flex flex-col justify-center gap-1 sm:gap-2 text-left overflow-hidden">
                  <p className="fontSB text-[11px] sm:text-[clamp(11px,2.9vw,26px)] truncate">
                    {d.label}
                  </p>
                  <div className="hidden lg:block fontEL leading-5 text-[clamp(8px,2vw,15px)] whitespace-pre-line">
                    {d.desc}
                  </div>
                </div>
                <img
                  alt={d.label}
                  className="w-[clamp(24px,5vw,60px)] shrink-0"
                  src={d.icon}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center hidden sm:block leading-8">
            <p className="fontThin sm:text-[clamp(9px,2.9vw,16px)]">
              <span className="fontMedium text-xl">
                "내 아이디어를 내 손으로 실현한다."{" "}
              </span>
              라는 모토를 가지고,
            </p>
            <p className="fontThin">
              실제 서비스를 구현하며 개발자의 꿈을 이루는데
            </p>
            <p className="fontThin">한걸음 더 다가가고자 합니다.</p>
          </div>
        </div>
      </div>

      <ProgramIntro />

      {/* PROGRAM info */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-14 xl:px-18 bg-[#1B1B1B] sm:pt-20 sm:pb-32 pt-12 pb-20 space-y-20">
        <p className="text-[#9ABFFF] fontSB text-center text-[9px] sm:text-[14px] md:text-[18px]">
          @2026 PROGRAM info
        </p>

        <div className="max-w-5xl mx-auto flex flex-col sm:gap-25 gap-10">
          {PROGRAMS.map((p, i) => (
            <motion.div
              key={p.highlight}
              className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-20 ${
                p.reverse ? "sm:flex-row-reverse" : ""
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUp100}
              transition={{ duration: 0.7 }}
            >
              <img
                alt={p.highlight}
                className="w-38 sm:w-[45%] sm:rounded-[15px] rounded-sm"
                src={p.image}
              />
              <div className="flex-1 text-white space-y-4 sm:space-y-6 sm:px-4">
                <p className="text-[12px] sm:text-[18px] md:text-[32px] fontSB">
                  {p.title}{" "}
                  <span className="text-[#72A6FF]">{p.highlight}</span>
                </p>
                <p className="hidden sm:block text-[#E5E5E5] fontThin text-[11px] sm:text-[12px] md:text-[15px] whitespace-pre-line">
                  {p.desc}
                </p>
                <div className="hidden sm:block text-[11px] sm:text-[12px] md:text-[13px] text-[#E5E5E5] fontThin space-y-1">
                  <div className="flex items-center gap-2">
                    <img
                      alt="장소"
                      className="w-3"
                      src="/clonecoding/main/place.png"
                    />
                    <p>{p.place}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      alt="시간"
                      className="w-3"
                      src="/clonecoding/main/date.png"
                    />
                    <p>{p.time}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Tracks />

      <Projects />
    </>
  );
};

export default MainPage;
