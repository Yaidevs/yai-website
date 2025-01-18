import React from "react";
import img1 from "../assets/images/innovation incubation center.png";
import img2 from "../assets/images/global entrepreneurship festival.png";
import img3 from "../assets/images/ju1.png";
import img4 from "../assets/images/UNDP logo.png";
import img5 from "../assets/images/edi logo.png";
function PartnerSections() {
  return (
    <section className="partners-sec space-comm">
      <div className="container">
        <ul className="partners-list">
          <li className="lazyload">
            <a href="javascript:;" className="lazyload">
              <img
                className="lazyload"
                data-src={img1}
                alt="Dev Technosys"
                width={100}
                height={100}
              />
            </a>
          </li>
          <li className="lazyload">
            <a href="javascript:;" className="lazyload">
              <img
                className="lazyload"
                data-src={img2}
                alt="Dev Technosys"
                width={100}
                height={100}
              />
            </a>
          </li>
          <li className="lazyload">
            <a href="javascript:;" className="lazyload">
              <img
                className="lazyload"
                data-src={img3}
                alt="Dev Technosys"
                width={100}
                height={100}
              />
            </a>
          </li>
          <li className="lazyload">
            <a href="javascript:;" className="lazyload">
              <img
                className="lazyload"
                data-src={img4}
                alt="Dev Technosys"
                width={100}
                height={100}
              />
            </a>
          </li>
          <li className="lazyload">
            <a href="javascript:;" className="lazyload">
              <img
                className="lazyload"
                data-src={img5}
                alt="Dev Technosys"
                width={100}
                height={100}
              />
            </a>
          </li>
          {/* <li className="lazyload">
            <a href="javascript:;" className="lazyload">
              <img
                className="lazyload"
                data-src="https://devtechnosys.com/images/2021-new/logo06.webp"
                alt="Dev Technosys"
                width={115}
                height={115}
              />
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  );
}

export default PartnerSections;
