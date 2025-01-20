import React from "react";

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
                  data-src="https://devtechnosys.com/images-2023/home/banner-img-1.webp"
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
                  data-src="https://devtechnosys.com/images-2023/home/banner-img-2.webp"
                  alt="banner"
                />
              </figure>
              <figure className="banner-img-3">
                <img
                  className="lazyload"
                  data-src="https://devtechnosys.com/images-2023/home/banner-img-3.webp"
                  alt="banner"
                />
              </figure>
              <figure className="banner-img-4">
                <img
                  className="lazyload"
                  data-src="https://devtechnosys.com/images-2023/home/banner-img-4.webp"
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
