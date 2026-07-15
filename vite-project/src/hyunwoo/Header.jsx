import styles from "./Header.module.css";

import logo from "./images/likelionLogo.png";
import insta from "./images/insta.png";
import chat from "./images/chat.png";
import campus from "./images/campus.png";
import google from "./images/googleLogin.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-inner"]}>
        {/* LEFT */}
        <div className={styles["header-left"]}>
          <a href="/" className={styles.logo}>
            <img src={logo} alt="Logo" />
            <p>LIKELION SKU</p>
          </a>

          <nav className={styles.nav}>
            <div className={styles["menu-title"]}>PROJECT</div>
            <div className={styles["menu-title"]}>TEAM</div>
            <div className={styles["menu-title"]}>COMMUNITY</div>

            <div className={styles["mega-menu"]}>
              <div className={styles["mega-column"]}>
                <a href="#">14기</a>
                <a href="#">13기</a>
                <a href="#">12기</a>
                <a href="#">11기</a>
              </div>

              <div className={styles["mega-column"]}>
                <a href="#">14기</a>
                <a href="#">13기</a>
                <a href="#">12기</a>
                <a href="#">11기</a>
              </div>

              <div className={styles["mega-column"]}>
                <a href="#">모집공고</a>
              </div>
            </div>
          </nav>
        </div>

        {/* RIGHT */}
        <div className={styles["header-right"]}>
          <div className={styles.social}>
            <a href="#">
              <img src={insta} alt="Instagram" />
            </a>

            <a href="#">
              <img src={chat} alt="Chat" />
            </a>
          </div>

          <button className={styles["campus-btn"]}>
            <img src={campus} alt="Campus" />
            <span>CYBERCAMPUS</span>
          </button>

          <button className={styles["google-btn"]}>
            <img src={google} alt="Google" />
            <span>구글계정으로 계속하기</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
