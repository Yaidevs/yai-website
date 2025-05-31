import React from "react";
import { Link } from "react-router-dom";

function FooterMenu() {
  return (
    <div className="footer-menu-box lazyload">
      <div className="container lazyload">
        <div className="row lazyload">
          <div className="col-md-2 lazyload">
            <h4 className="footer-tit lazyload">Quick links</h4>
            <ul className="footer-menu lazyload">
              <li className="lazyload">
                <Link to="/about" className="lazyload">
                  About Us
                </Link>
              </li>
              <li className="lazyload">
                <Link to="/portfolio" className="lazyload">
                  Portfolio
                </Link>
              </li>
              <li className="lazyload">
                <Link to="/send-inquiry" className="lazyload">
                  Contact Us
                </Link>
              </li>

              {/* <li className="lazyload">
                <Link to className="lazyload" >
                  Testimonials
                </Link>
              </li> */}

              {/* <li className="lazyload">
                <a className="lazyload" href=".">
                  FAQ
                </a>
              </li> */}
              {/* <li className="lazyload">
                <a className="lazyload" href=".">
                  Sitemap
                </a>
              </li> */}
            </ul>
          </div>
          <div className="col-md-3 lazyload">
            <h4 className="footer-tit lazyload">Our services</h4>
            <ul className="footer-menu lazyload">
              <li className="lazyload">
                <Link to="/portfolio" className="lazyload">
                  Mobile Application Development
                </Link>
              </li>
              {/* <li className="lazyload">
                <a className="lazyload" href=".">
                  IOT Application Development
                </a>
              </li> */}
              <li className="lazyload">
                <Link to="/portfolio" className="lazyload" href=".">
                  Blockchain Development
                </Link>
              </li>
              {/* <li className="lazyload">
                <a className="lazyload" href=".">
                  POS Development Solution
                </a>
              </li> */}
              <li className="lazyload">
                <Link to="/portfolio" className="lazyload" href=".">
                  AI Development
                </Link>
              </li>
              {/* <li className="lazyload">
                <a className="lazyload" href=".">
                  ICO Development
                </a>
              </li> */}
              <li className="lazyload">
                <Link to="/portfolio" className="lazyload" href=".">
                  Custom Web Development
                </Link>
              </li>
              {/* <li className="lazyload">
                <a className="lazyload" href=".">
                  Mobile App Development Cost
                </a>
              </li> */}
              <li className="lazyload">
                <Link to="/portfolio" className="lazyload" href=".">
                  Web3 Development
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 lazyload">
            <h4 className="footer-tit lazyload">Our industries</h4>
            <ul className="footer-menu lazyload">
              <li className="lazyload">
                <Link to="/portfolio" className="lazyload">
                  Real Estate
                </Link>
              </li>
              <li className="lazyload">
                <Link to="/portfolio" className="lazyload">
                  On-Demand
                </Link>
              </li>
              <li className="lazyload">
                <Link to="/portfolio" className="lazyload">
                  Travel &amp; Tours
                </Link>
              </li>
              <li className="lazyload">
                <Link to="/portfolio" className="lazyload">
                  Ecommerce &amp; Retail
                </Link>
              </li>
              <li className="lazyload">
                <Link to="/portfolio" className="lazyload">
                  Healthcare
                </Link>
              </li>
              <li className="lazyload">
                <Link to="/portfolio" className="lazyload">
                  Event &amp; Tickets
                </Link>
              </li>

              {/* <li className="lazyload">
                <a
                  className="lazyload"
                  href="https://devtechnosys.com/auction-app-development.php"
                >
                  Auction
                </a>
              </li> */}
              <li className="lazyload">
                <Link to="/portfolio" className="lazyload">
                  Food &amp; Restaurant
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 lazyload">
            <div className="get-in-touch lazyload">
              <h4 className="footer-tit lazyload">Get in touch</h4>
              <ul className="get-in-info lazyload">
                <li className="lazyload">
                  <span className="lazyload">Email :</span>{" "}
                  <a
                    className="lazyload"
                    href="/cdn-cgi/l/email-protection#f39a9d959cb39796858796909b9d9c808a80dd909c9e"
                  >
                    <span
                      className="__cf_email__"
                      data-cfemail="e48d8a828ba48081929081878c8a8b979d97ca878b89"
                    >
                     info@yaisoftwares.com
                    </span>
                  </a>
                </li>
                <li className="lazyload">
                  <span className="lazyload">Phone Number :</span>{" "}
                  <a
                    className="lazyload"
                    href="/cdn-cgi/l/email-protection#31585f575e71555447455452595f5e4248421f5054"
                  >
                    <span
                      className="__cf_email__"
                      data-cfemail="61080f070e21050417150402090f0e1218124f0004"
                    >
                      +251948952757
                    </span>
                  </a>
                </li>
                {/* <li className="lazyload">
                  <span className="lazyload">HR :</span>{" "}
                  <a className="lazyload" href="tel:+91 141-4107667">
                    +251948952757
                  </a>
                </li> */}
                <li className="lazyload">
                  <span className="lazyload">HQ :</span>Ethiopia ,Oromia ,Jimma
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterMenu;
