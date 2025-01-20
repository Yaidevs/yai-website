import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
  FaYoutubeSquare,
} from "react-icons/fa";
import { PiStarThin } from "react-icons/pi";
import { Link } from "react-router-dom";

function FooterSocial() {
  return (
    <div className="footer-social">
      <div className="container">
        <div className="footer-social-in d-flex">
          <div className="footer-social-icon">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/devtechnosys/"
                  target="_blank"
                  rel="nofollow"
                >
                  <FaFacebookSquare size={40} color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://bit.ly/clicktosubscribenow"
                  target="_blank"
                  rel="nofollow"
                >
                  <FaYoutubeSquare size={40} color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/devtechnosys?lang=en"
                  target="_blank"
                  rel="nofollow"
                >
                  <FaInstagramSquare size={40} color="white" />
                </a>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/devtechnosys/"
                  target="_blank"
                  rel="nofollow"
                >
                  <FaLinkedinIn size={40} color="white" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="rating-star lazyload">
            <span className="rating-tag">
              <img
                className="lazyload"
                data-src="https://devtechnosys.com/images-2023/common/start-rating-w.svg"
                alt="Dev Technosys"
                width={13}
                height={13}
              />
              4.9 / 5.0
            </span>
            <span>
              {" "}
              by 800+ customers for 1000+ Web and Mobile App Development
              Projects.{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSocial;
