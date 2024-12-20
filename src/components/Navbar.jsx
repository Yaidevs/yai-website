import React, { useEffect } from "react";
import logo from "../assets/images/logo-cmmi.png";
import logowhite from "../assets/images/logo-cmmi-white.png";
import quoteicon from "../assets/images/quote-icon.svg";
import whatsappicon from "../assets/images/whatsapp.svg";
import menu from "../assets/images/menu.svg";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    // Mobile Menu Toggle
    const menuIcon = document.querySelector(".menu-icon");
    const navListMain = document.querySelector(".navlist-main");

    const toggleMenu = () => {
      if (navListMain) {
        navListMain.classList.toggle("show");
      }
    };

    if (menuIcon) {
      menuIcon.addEventListener("click", toggleMenu);
    }

    // Cleanup
    return () => {
      if (menuIcon) {
        menuIcon.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <header className="full-header lazyload ">
      <div className="nav-left">
        <div className="branding-logo lazyload">
          <Link to="/" className="lazyload">
            <img className="lazyload logo-b" src={logo} alt="Dev Logo" />
            <img className="lazyload logo-w" src={logowhite} alt="Dev Logo" />
          </Link>
        </div>
        <nav className="nav-list">
          <button className="menu-icon" style={{ display: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.com/svgjs"
              width={512}
              height={512}
              x={0}
              y={0}
              viewBox="0 0 512 512"
              style={{ enableBackground: "new 0 0 512 512" }}
              xmlSpace="preserve"
              className
            >
              <g>
                <path
                  d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H153.6c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H256c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"
                  fill="#000000"
                  data-original="#000000"
                />
              </g>
            </svg>
          </button>
          <div className="navlist-main">
            <ul className="navlist">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className=" price-btn lazyload"
                  href="https://devtechnosys.com/calculate-it-project-cost.php"
                >
                  <span className="price-text">Pricing</span>
                </Link>
              </li>
              {/* <li>
                <div className="resourcesBox lazyload">
                  <a href="javascript:;" className=" mar-left0 lazyload">
                    Resources
                  </a>
                  <div className="resourcesDropdownBg lazyload">
                    <ul className="lazyload">
                    </ul>
                  </div>
                </div>
              </li> */}
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              {/* <li>
                <a href="https://devtechnosys.com/insights/demo-video/">
                  Demo Video
                </a>
              </li>
              <li>
                <a href="https://devtechnosys.com/video-consultations-for-it-services.php">
                  Video Consulting
                </a>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
      <div className="nav-right">
        <nav className="navbar lazyload">
          <div className="right-nav-bt lazyload">
            <div className="icon-box">
              <a
                className="header-btn quote-bg lazyload get-consultant"
                href="javascript:;"
                title="Let's talk"
              >
                <img
                  className="lazyload"
                  src={quoteicon}
                  alt="talk"
                  width={24}
                  height={24}
                />
              </a>
              <a
                className="header-btn whatsapp-bg lazyload"
                href="https://wa.me/919983263662?text=hello devtechnosys"
                target="_blank"
                title="+91-9983263662"
              >
                <img
                  className="lazyload"
                  src={whatsappicon}
                  alt="Dev Whatsapp"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://devtechnosys.com/menu.php"
                className="header-btn menu-bg lazyload"
                title="menu"
              >
                <img className="lazyload" src={menu} alt="Dev Menu" />
              </a>
            </div>
            <a
              href="https://devtechnosys.com/request-a-quote.php"
              className="common-btn GetQuoteBtn lazyload"
            >
              Get a Quote
              <svg
                id="arrow-img"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <g id="Group_1221" data-name="Group 1221">
                  <path
                    id="Path_36"
                    data-name="Path 36"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_37"
                    data-name="Path 37"
                    d="M5,12H19"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    id="Path_38"
                    data-name="Path 38"
                    d="M15,16l4-4"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    id="Path_39"
                    data-name="Path 39"
                    d="M15,8l4,4"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
