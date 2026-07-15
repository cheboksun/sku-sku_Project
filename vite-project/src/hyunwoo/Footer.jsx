import styles from "./Footer.module.css";

import insta from "./images/instagram.png";
import kakao from "./images/kakaotalk.png";
import mail from "./images/mail.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-top"]}>
          <div className={styles["footer-menu"]}>
            <div>
              <h6>PROJECT</h6>
              <p>14기</p>
              <p>13기</p>
              <p>12기</p>
              <p>11기</p>
            </div>

            <div>
              <h6>TEAM</h6>
              <p>14기</p>
              <p>13기</p>
              <p>12기</p>
              <p>11기</p>
            </div>

            <div>
              <h6>COMMUNITY</h6>
              <p>모집공고</p>
            </div>
          </div>
        </div>

        <div className={styles["footer-bottom"]}>
          <div className={styles["footer-left"]}>
            <div className={styles.info}>
              <h4>INFO</h4>

              <p>멋쟁이사자처럼 성결대학교 | 대표자 조승민</p>

              <p>
                실습실 : 경기도 안양시 만안구 성결대학로 53(안양동) 성결관,
                성결대학교
              </p>

              <p>
                동아리방 : 경기도 안양시 만안구 성결대학로 53(안양동) 중생관
                B11호
              </p>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.contact}>
              <h4>CONTACT</h4>

              <div className={styles.icons}>
                <div className={styles.icon}>
                  <img src={insta} alt="instagram" />
                </div>

                <div className={styles.icon}>
                  <img src={kakao} alt="kakao" />
                </div>

                <div className={styles.icon}>
                  <img src={mail} alt="mail" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles["footer-right"]}>
            <button className={styles["top-btn"]}>TOP ▲</button>

            <p>SKU LIKELION 14th Edition</p>

            <p>Copyright © 2026 SKU LIKELION. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
