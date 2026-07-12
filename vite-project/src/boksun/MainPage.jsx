import React from "react";

const MainPage = () => {
  return (
    <>
      <div className="h-screen w-full relative">
        <div className="absolute inset-0 bg-[url('/clonecoding/main/Main1.jpeg')] bg-center bg-cover bg-no-repeat">
          <div className="absolute inset-0 bg-black opacity-80"></div>

          {/* opacity-80 ( 80% 불투명도, [ 20% 투명 ] ), inset-0은 top-0, right-0, bottom-0 left-0로 지정, 부모를 꽉 채우게 된다. */}
        </div>
        <div className="inset-0 absolute flex flex-col justify-center gap-10 p-[90px]">
          <p className="text-white text-[38px] font-bold">
            상상을 현실로 만드는 <br />내 손 안에
            <span className="text-[#3B79FF]"> 스쿠스쿠 </span>
          </p>
          <p className="text-white">
            <span className="font-bold">성결대학교 멋쟁이사자처럼</span>은
            <br />
            자신이 원하는 IT 서비스를 구현하고 싶은 성결대학교 학생들이 모인
            동아리입니다.
          </p>
          {/* 로그인 및 캠버스 버튼 */}
          {/* <div className="flex gap-3 justify-center"> 
            <div className="w-50 h-10 bg-[#2D5ABB] flex gap-2 rounded items-center justify-center">
              <img src="clonecoding/campus.png" className="w-5 h-5" />
              <span className="text-white">CYBERCSMPUS</span>
            </div>
            <div className="w-50 h-10 bg-white flex gap-2 rounded items-center justify-center">
              <img src="clonecoding/googleLogin.png" className="w-5 h-5" />
              <p>구글계정으로 계속하기</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="h-screen w-full relative">
        <div className="absolute inset-0 bg-[url('/clonecoding/main/Main2.jpeg')] bg-center bg-cover bg-no-repeat">
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-between">
          <div>
            <p className="text-white text-center">
              성결대학교 멋쟁이사자처럼의 <br />
              <span className="font-bold text-[20px]">3가지 방향성</span>
            </p>
          </div>
          <div className="flex text-white justify-center gap-3 justify-evenly">
            <div className="w-[250px] h-[200px] bg-blue-400 rounded-xl flex items-center p-[10px]">
              <h1>
                자기주도성
                <p>나만의커리어를 직접설계하고, 만들어갈 수 있습니다</p>
              </h1>
              <img
                src="/clonecoding/main/Self.png"
                className="w-[75px] h-[50px]"
              />
            </div>
            <div className="w-[250px] h-[200px] bg-blue-600 rounded-xl flex items-center p-[10px]">
              <h1>
                협력성
                <p>
                  동료들과 개발 고민을 함께 협력하고 공유하며, 성장할 수
                  있습니다.
                </p>
              </h1>
              <img
                src="/clonecoding/main/cooperation.png"
                className="w-[75px] h-[50px]"
              />
            </div>
            <div className="w-[250px] h-[200px] bg-blue-800 rounded-xl flex items-center p-[10px]">
              <h1>
                가능성
                <p>나만의 커리어를 직접 설계하고, 만들어갈 수 있습니다.</p>
              </h1>
              <img
                src="/clonecoding/main/Possibility.png"
                className="w-[75px] h-[50px]"
              />
            </div>
          </div>
          <div className="text-center">
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
          <p className="text-white text-[20px] inset-0 absolute text-center flex items-center justify-center">
            멋쟁이사자처럼 14기에서 진행되는
            <span className="font-bold">프로그램</span>을 소개합니다.
          </p>
        </div>
      </div>
      <div className="h-[1500px] w-full relative bg-[#1B1B1B]">
        <div className="absolute inset-20 flex flex-col gap-25">
          <p className="text-blue-300 text-center">@2026 PROGRAM info</p>
          <div className="flex text-white">
            <img src="/clonecoding/main/Main3_1.png" className="w-[300px]" />
            <div>
              <h1 className="">
                함께 공부하는 <span className="text-blue-400">스터디</span>
                <p>
                  공부하고 싶은 트랙을 함께 공부하며
                  <br />
                  지식을 습득할 수 있는 학습의 장이 마련됩니다.
                </p>
              </h1>
            </div>
          </div>
          <div className="flex text-white">
            <img src="/clonecoding/main/Main3_2.png" className="w-[300px]" />
            <div>
              <h1 className="">
                세분화된 교육, <span className="text-blue-400">정기세션</span>
                <p>
                  아기사자들에게 트랙별로 교육을 제공합니다.
                  <br />
                  매주 정기세션에서 아기사자들과 운영진이 함께 성장합니다.
                </p>
              </h1>
            </div>
          </div>
          <div className="flex text-white">
            <img src="/clonecoding/main/Main3_3.png" className="w-[300px]" />
            <div>
              <h1 className="">
                서비스의 초석 <span className="text-blue-400">아이디어톤</span>
              </h1>
              <p>
                서비스 아이디어를 다듬고 실현 가능성을 테스트하는 시간입니다.
                <br />
                열정적인 토론과 발표로 아이디어의 깊이를 더합니다.
              </p>
            </div>
          </div>
          <div className="flex text-white">
            <img src="/clonecoding/main/Main3_4.png" className="w-[300px]" />
            <div>
              <h1 className="">
                상상을 현실로 만드는{" "}
                <span className="text-blue-400">해커톤</span>
              </h1>
              <p>
                주어진 시간 내에 팀을 이뤄 서비스를 기획/개발합니다.
                <br />
                실전 감각을 익히고 팀워크를 높이는 경험을 제공합니다.
              </p>
            </div>
          </div>
          <div className="flex text-white">
            <img src="/clonecoding/main/Main3_5.png" className="w-[300px]" />
            <div>
              <h1 className="">
                하계 <span className="text-blue-400">MT</span>
                <p>
                  팀워크를 다지는 특별한 시간!
                  <br />
                  친목과 소통을 통해 끈끈한 유대감을 형성합니다.
                </p>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-full relative">
        <div className="absolute inset-0 bg-black flex flex-col text-center items-center justify-center">
          <h1 className="text-blue-500 text-[28px]">TRACKS</h1>
          <p className="text-white">
            멋쟁이사자처럼에서 각 트랙별로 세분화된 교육과 경험을 제공합니다.
          </p>
          <div className="flex text-white gap-10 bg-gray-800 h-[150px] w-full justify-evenly">
            <div className="flex items-center justify-center gap-2">
              <img src="/clonecoding/main/Main4_React.png" className="w-10" />
              <p>
                프론트엔드<span>FRONT-END</span>
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img src="/clonecoding/main/Main4_spring.png" className="w-10" />
              <p>
                백엔드<span>BACK-END</span>
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img src="/clonecoding/main/Main4_figma.png" className="w-10" />
              <p>
                기획/디자인<span>PM/DESIGN</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full relative">
        <div className="absolute inset-0 bg-[#121212] text-center">
          <h2 className="text-blue-500 text-[28px]">PROJECTS</h2>
          <p className="text-white">
            성결대학교 멋쟁이사자처럼과 함께한 프로젝트들을 소개합니다.
          </p>
          {/* 프로젝트 div */}
          <div>
            {" "}
            !afelaefklasjfalksfjasklfajsfklesjflksfjkseaefjalsfafasefklasjflasfsaflsae
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
