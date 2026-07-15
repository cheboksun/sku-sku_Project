import styles from "./Team.module.css";
import { useState } from "react";

import jo from "./images/조승민.png";
import hong from "./images/홍민경.png";
import noh from "./images/노태경.png";
import kimJ from "./images/김지유.png";
import gu from "./images/구혜원.png";
import kimM from "./images/김민규.png";
import kimS from "./images/김소은.png";
import kwon from "./images/권오현.png";
import yoon from "./images/윤준하.png";
import joJ from "./images/조준형.png";
// ---------- 13기 ----------
import han from "./images/한민규.png";
import shin from "./images/신민서.png";
import seo from "./images/서민주.png";
import oh from "./images/오한솔.png";
import choi from "./images/최유정.png";
import lee from "./images/이호연.png";
import park from "./images/박준범.png";
import kwon13 from "./images/권오현.png";
import no from "./images/노주희.png";

export default function Team() {
  const [tab, setTab] = useState(14);

  const team14 = [
    {
      title: "대표/부대표",
      members: [
        {
          name: "조승민",
          role: "대표",
          major: "미디어소프트웨어학과 21",
          image: jo,
        },
        {
          name: "홍민경",
          role: "부대표",
          major: "컴퓨터공학과 23",
          image: hong,
        },
      ],
    },

    {
      title: "기획/디자인팀",
      members: [
        {
          name: "노태경",
          role: "파트장",
          major: "미디어소프트웨어학과 21",
          image: noh,
        },
        {
          name: "김지유",
          role: "운영진",
          major: "컴퓨터공학과 24",
          image: kimJ,
        },
      ],
    },

    {
      title: "프론트엔드팀",
      members: [
        {
          name: "구혜원",
          role: "파트장",
          major: "미디어소프트웨어학과 22",
          image: gu,
        },
        {
          name: "김민규",
          role: "운영진",
          major: "컴퓨터공학과 23",
          image: kimM,
        },
        {
          name: "김소은",
          role: "운영진",
          major: "컴퓨터공학과 24",
          image: kimS,
        },
      ],
    },

    {
      title: "백엔드팀",
      members: [
        {
          name: "권오현",
          role: "파트장",
          major: "컴퓨터공학과 23",
          image: kwon,
        },
        {
          name: "윤준하",
          role: "운영진",
          major: "미디어소프트웨어학과 21",
          image: yoon,
        },
        {
          name: "조준형",
          role: "운영진",
          major: "컴퓨터공학과 23",
          image: joJ,
        },
      ],
    },
  ];

  const team13 = [
    {
      title: "대표/부대표",
      members: [
        {
          name: "한민규",
          role: "대표",
          major: "컴퓨터공학과 21",
          image: han,
        },
        {
          name: "신민서",
          role: "부대표",
          major: "미디어소프트웨어학과 22",
          image: shin,
        },
      ],
    },

    {
      title: "디자인(UX/UI)팀",
      members: [
        {
          name: "서민주",
          role: "파트장",
          major: "관광학과 22",
          image: seo,
        },
        {
          name: "오한솔",
          role: "운영진",
          major: "관광학과 22",
          image: oh,
        },
      ],
    },

    {
      title: "프론트엔드팀",
      members: [
        {
          name: "최유정",
          role: "파트장",
          major: "미디어소프트웨어학과 21",
          image: choi,
        },
        {
          name: "이호연",
          role: "운영진",
          major: "미디어소프트웨어학과 21",
          image: lee,
        },
        {
          name: "구혜원",
          role: "운영진",
          major: "미디어소프트웨어학과 22",
          image: gu,
        },
      ],
    },

    {
      title: "백엔드팀",
      members: [
        {
          name: "박준범",
          role: "파트장",
          major: "컴퓨터공학과 20",
          image: park,
        },
        {
          name: "권오현",
          role: "운영진",
          major: "컴퓨터공학과 23",
          image: kwon13,
        },
        {
          name: "노주희",
          role: "운영진",
          major: "미디어소프트웨어학과 22",
          image: no,
        },
      ],
    },
  ];

  const teams = tab === 14 ? team14 : team13;

  return (
    <section className={styles.team}>
      <div className={styles["team-container"]}>
        <p className={styles["team-sub"]}>LIKELION</p>
        <h1 className={styles["team-title"]}>TEAM</h1>

        <div className={styles.tabs}>
          <button
            className={tab === 14 ? styles.active : ""}
            onClick={() => setTab(14)}
          >
            14기
          </button>

          <button
            className={tab === 13 ? styles.active : ""}
            onClick={() => setTab(13)}
          >
            13기
          </button>

          <button>12기</button>
          <button>11기</button>
        </div>

        <div className={styles["top-row"]}>
          {teams.slice(0, 2).map((team, index) => (
            <div className={styles["team-section"]} key={index}>
              <h2>{team.title}</h2>

              <div className={styles["card-wrapper"]}>
                <div className={styles["member-card"]}>
                  {team.members.map((member, idx) => (
                    <div className={styles.member} key={idx}>
                      <img src={member.image} alt={member.name} />

                      <div className={styles["member-info"]}>
                        <h3>
                          {member.name}
                          <span>{member.role}</span>
                        </h3>
                        <p>{member.major}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {teams.slice(2).map((team, index) => (
          <div className={styles["team-section"]} key={index + 2}>
            <h2>{team.title}</h2>

            <div className={styles["card-wrapper"]}>
              <div className={styles["member-card"]}>
                {team.members.map((member, idx) => (
                  <div className={styles.member} key={idx}>
                    <img src={member.image} alt={member.name} />

                    <div className={styles["member-info"]}>
                      <h3>
                        {member.name}
                        <span>{member.role}</span>
                      </h3>
                      <p>{member.major}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
