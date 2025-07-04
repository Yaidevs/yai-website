import React from "react";

function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-copyright lazyload">
      <div className="container lazyload">
        <div className="footer-copyright-in d-flex lazyload">
          <span className="lazyload">
            Copyright © {currentYear} YAI Software Technologies. All Rights Reserved
          </span>
          {/* <img class="lazyload" data-src="images/2021-new/dmca_premi_badge_5.jpg" alt="YAI Software Technologies" width="135" height="28"> */}
          <ul className="lazyload">
            {/* <li className="lazyload">
              <a
                className="lazyload"
                href="https://devtechnosys.com/terms-of-services.php"
              >
                Terms of services
              </a>
            </li> */}
            {/* <li className="lazyload">
              <a
                className="lazyload"
                href="https://devtechnosys.com/privacy-policy.php"
              >
                Privacy policy
              </a>
            </li> */}
            {/* <li className="lazyload">
              <a
                className="lazyload"
                href="https://devtechnosys.com/refund-policy.php"
              >
                Refund policy
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterCopyright;
