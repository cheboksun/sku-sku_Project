import "./Header.css";

import logo from "./images/likelionLogo.png";
import insta from "./images/insta.png";
import chat from "./images/chat.png";
import campus from "./images/campus.png";
import google from "./images/googleLogin.png";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* LEFT */}
        <div className="header-left">
          <a href="/" className="logo">
            <img src={logo} alt="Logo" />
            <p>LIKELION SKU</p>
          </a>

          <nav className="nav">
            <div className="menu-title">PROJECT</div>
            <div className="menu-title">TEAM</div>
            <div className="menu-title">COMMUNITY</div>

            <div className="mega-menu">
              <div className="mega-column">
                <a href="#">14기</a>
                <a href="#">13기</a>
                <a href="#">12기</a>
                <a href="#">11기</a>
              </div>

              <div className="mega-column">
                <a href="#">14기</a>
                <a href="#">13기</a>
                <a href="#">12기</a>
                <a href="#">11기</a>
              </div>

              <div className="mega-column">
                <a href="#">모집공고</a>
              </div>
            </div>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="header-right">
          <div className="social">
            <a href="#">
              <img src={insta} alt="Instagram" />
            </a>

            <a href="#">
              <img src={chat} alt="Chat" />
            </a>
          </div>

          <button className="campus-btn">
            <img src={campus} alt="Campus" />
            <span>CYBERCAMPUS</span>
          </button>

          <button className="google-btn">
            <img src={google} alt="Google" />
            <span>구글계정으로 계속하기</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
