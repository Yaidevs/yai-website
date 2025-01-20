import React from "react";

function OurApp1() {
  return (
    <section className="blog-box">
      <div className="blog-img-box">
        <figure>
          <img
            className="lazyload"
            alt="Blog"
            data-src="https://devtechnosys.com/images-2023/home/blog-img-1.webp"
          />
        </figure>
        <div className="blog-mob-box pink-shadow">
          <figure>
            <img
              className="lazyload"
              alt="mob"
              data-src="https://devtechnosys.com/images-2023/home/mob-1.webp"
            />
          </figure>
        </div>
      </div>
      <div className="blog-img-content">
        <div className="
        title-head text-left">
          <span className="text-black">Fashion Porters- Artificial </span>
          <span>Intelligence Solutions</span>
          <h2 className="text-black">Fashion Porters</h2>
          <p className="text-black">
            An artificial intelligence-powered smartphone scanning solution.
            Upload 2 photos within seconds and get 65+ different body
            measurements in a go.
          </p>
          <div className="btn-group-box">
            <button
              data-dialog="modal-1"
              className="common-btn lazyloaded btnblog"
            >
              discover more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurApp1;
