import React from "react";
import img1 from "../assets/images/hero-img4-men.jpg";
import img2 from "../assets/images/hero-img-men-withmobile.jpg";

export default function MyHero() {
  return (
    <section className="home-banner top-space">
      <span className="circle-img-1" />
      <span className="circle-img-2" />
      <span className="dot-img">
        <img
          className="lazyload"
          data-src="https://devtechnosys.com/images-2023/home/dot-img.webp"
          alt="Dot Ger"
        />
      </span>
      <div className="container">
        <div className="row">
          <div className="col-md-5 home-banner-left">
            <span>
              Transforming Ideas into Interactive <br />
              Business Experiences!
            </span>
            <h1>
              Web &amp; <br />
              Mobile App Development Company
            </h1>
            <p>
              Hire dedicated developers to develop revenue-driven mobile apps
              and websites
            </p>
            <div className="btn-group-box">
              <button className="common-btn get-consultant">
                Let’s Connect
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
              </button>
            </div>
          </div>
          <div className="col-md-7 home-banner-right">
            <div className="img-group d-flex">
              <figure className="banner-img-1">
                <span className="award-winnning">
                  <img
                    className="lazyload"
                    data-src="https://devtechnosys.com/images-2023/home/award-winning-img.webp"
                    alt="banner"
                  />
                </span>
                <img
                  className="lazyload"
                  data-src="https://img.freepik.com/premium-photo/young-smiling-african-american-man-standing-using-laptop-computer-isolated-grey-background_255757-1949.jpg?uid=R120137908&ga=GA1.1.552436040.1735197856&semt=ais_hybrid"
                  alt="banner"
                />
                <span className="star-b">
                  <img
                    className="lazyload"
                    data-src="https://devtechnosys.com/images-2023/home/star-icon-w.webp"
                    alt="star"
                  />
                </span>
              </figure>
              <figure className="banner-img-2">
                <img
                  className="lazyload"
                  data-src="https://img.freepik.com/premium-photo/beauty-with-digital-tablet-beautiful-young-african-woman-holding-touchpad_425904-21413.jpg?uid=R120137908&ga=GA1.1.552436040.1735197856&semt=ais_hybrid"
                  alt="banner"
                />
              </figure>
              <figure className="banner-img-3">
                <img
                  className="lazyload"
                  data-src="https://img.freepik.com/premium-photo/surprised-confused-man-pointing-finger-smartphone-with-white-screen-advertisement_416530-543.jpg?uid=R120137908&ga=GA1.1.552436040.1735197856&semt=ais_hybrid"
                  alt="banner"
                />
              </figure>
              <figure className="banner-img-4">
                <img
                  className="lazyload"
                  data-src="https://img.freepik.com/free-photo/man-wearing-glasses-reading-from-his-digital-tablet_23-2148638715.jpg?uid=R120137908&ga=GA1.1.552436040.1735197856&semt=ais_hybrid"
                  alt="banner"
                />{" "}
                <span className="star-w">
                  <img
                    className="lazyload"
                    data-src="https://devtechnosys.com/images-2023/home/star-icon-b.webp"
                    alt="star"
                  />
                </span>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
