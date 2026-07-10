import React from "react";

const MainPage = () => {
  return (
    <>
      <div className="h-screen w-full relative">
        <div className="absolute inset-0 bg-[url('/clonecoding/main/Main1.jpeg')] bg-center bg-cover bg-no-repeat">
          <div className="absolute inset-0 bg-black opacity-80">
            <p className="text-white text-[28px] text-center font-bold">
              상상을 현실로 만드는 <br /> 내 손 안에{" "}
              <span className="text-[#3B79FF]"> 스쿠스쿠 </span>
            </p>
            <p className="text-white">
              <span className="font-bold">성결대학교 멋쟁이사자처럼</span>은
              <br />
              자신이 원하는 IT 서비스를 구현하고 싶은 성결대학교 학생들이 모인
              동아리입니다.
            </p>
          </div>

          {/* opacity-80 ( 80% 불투명도, [ 20% 투명 ] ), inset-0은 top-0, right-0, bottom-0 left-0로 지정, 부모를 꽉 채우게 된다. */}
        </div>
      </div>
      <div className="h-screen w-full relative">
        <div className="absolute inset-0 bg-[url('/clonecoding/main/Main2.jpeg')] bg-center bg-cover bg-no-repeat">
          <div className="absolute inset-0 bg-black opacity-80">
            <p className="text-white">
              성결대학교 멋쟁이사자처럼의 <br />
              <span className="font-bold text-[20px]">3가지 방향성</span>
            </p>
            <p className="text-white">
              <span className="font-bold text-[20px]">
                "내 아이디어를 내 손으로 실현한다."&nbsp;
              </span>
              라는 모토를 가지고,
              <br /> 실제 서비스를 구현하며 개발자의 꿈을 이루는데
              <br /> 한걸음 더 다가가고자 합니다.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[300px] w-full relative">
        <div className="absolute inset-0 bg-black">
          <p className="text-white text-[20px]">
            멋쟁이사자처럼 14기에서 진행되는{" "}
            <span className="font-bold">프로그램</span>을 소개합니다.
          </p>
        </div>
      </div>
      <div className="h-screen w-full relative">
        <div className="absolute inset-0 bg-[#1B1B1B]">
          <p className="text-blue-300">@2026 PROGRAM info</p>
          <div>
            <h1 className="text-white">
              함께 공부하는 <span className="text-blue-400">스터디</span>
            </h1>
          </div>
          <div>
            <h1 className="text-white">
              세분화된 교육, <span className="text-blue-400">정기세션</span>
            </h1>
          </div>
          <div>
            <h1 className="text-white">
              서비스의 초석 <span className="text-blue-400">아이디어톤</span>
            </h1>
          </div>
          <div>
            <h1 className="text-white">
              상상을 현실로 만드는 <span className="text-blue-400">해커톤</span>
            </h1>
          </div>
          <div>
            <p className="text-white">
              하계 <span className="text-blue-400">MT</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-full relative">
        <div className="absolute inset-0 bg-black">
          <h1 className="text-blue-500 text-[28px]">TRACKS</h1>
          <p className="text-white">
            멋쟁이사자처럼에서 각 트랙별로 세분화된 교육과 경험을 제공합니다.
          </p>
        </div>
      </div>
      <div className="h-screen w-full relative">
        <div className="absolute inset-0 bg-[#121212]">
          <h2 className="text-blue-500 text-[28px] text-center">PROJECTS</h2>
          <p className="text-white">
            성결대학교 멋쟁이사자처럼과 함께한 프로젝트들을 소개합니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
