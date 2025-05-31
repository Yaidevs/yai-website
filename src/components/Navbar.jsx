import React, { useEffect } from "react";
import logo from "../assets/images/yai-logo.jpeg";
import logowhite from "../assets/images/logo-cmmi-white.png";
import gmail from "../assets/images/gmail.png";
import whatsappicon from "../assets/images/whatsapp.svg";
import menu from "../assets/images/menu.svg";
import { Link, useLocation } from "react-router-dom";
import { MoveUpRight } from "lucide-react";

function Navbar() {
  const handleLinkClick = () => {
    const navListMain = document.querySelector(".navlist-main");
    if (navListMain) {
      navListMain.classList.remove("show");
    }
  };

  useEffect(() => {
    const menuIcon = document.querySelector(".menu-icon");
    const navListMain = document.querySelector(".navlist-main");

    const toggleMenu = (event) => {
      event.stopPropagation();
      if (navListMain) {
        navListMain.classList.toggle("show");
      }
    };

    const closeMenu = () => {
      if (navListMain) {
        navListMain.classList.remove("show");
      }
    };

    if (menuIcon) {
      menuIcon.addEventListener("click", toggleMenu);
    }
    document.addEventListener("click", closeMenu);

    // Cleanup
    return () => {
      if (menuIcon) {
        menuIcon.removeEventListener("click", toggleMenu);
      }
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <header className="full-header lazyload">
      <div className="nav-left">
        <div className="branding-log lazyload">
          <Link to="/" className="lazyload">
            <img className="lazyload w-16" src={logo} alt="yai logo" />
          </Link>
        </div>
        <nav className="nav-list">
          <button className="menu-icon" style={{ display: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width={512}
              height={512}
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H153.6c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H256c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"
                  fill="#000000"
                />
              </g>
            </svg>
          </button>
          <div className="navlist-main">
            <ul className="navlist">
              <li>
                <Link to="/about" onClick={handleLinkClick}>About</Link>
              </li>
              <li>
                <Link to="/pricing" className="price-btn lazyload" onClick={handleLinkClick}>
                  <span className="price-text">Pricing</span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={handleLinkClick}>Portfolio</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="nav-right">
        <nav className="navbar lazyload">
          <div className="right-nav-bt lazyload">
            <div className="icon-box">
              <a
                className="header-btn bg-gray-300 lazyload"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@yaisoftwares.com&su=Hello Yai Software&body=I would like to get in touch."
                target="_blank"
                title="Email Yai Software"
              >
                <img
                  className="lazyload"
                  src={gmail}
                  alt="yai software email"
                  width={24}
                  height={24}
                />
              </a>

              <a
                className="header-btn whatsapp-bg lazyload"
                href="https://wa.me/251948952757?text=hello yaisoftware"
                target="_blank"
                title="+251-948952757"
              >
                <img
                  className="lazyload"
                  src={whatsappicon}
                  alt="yai software Whatsapp"
                  width={24}
                  height={24}
                />
              </a>
            </div>
            <Link
              to="/send-inquiry"
              className="rounded-lg bg-[#1c6aa3] px-3 text-lg py-2 justify-center items-center text-white lazyload flex gap-3"
              onClick={handleLinkClick}
            >
              <span>Get a Quote</span>
              <MoveUpRight size={36} color="#fff" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;