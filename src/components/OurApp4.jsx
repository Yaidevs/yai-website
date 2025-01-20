import React from "react";

function OurApp4() {
  return (
    <section className="blog-box odd-blog">
      <div className="blog-img-content">
        <div className="title-head text-left">
          <span className="text-black">ViralStyle </span>
          <span> Multi-Vendor Marketplace with Apparel Design Tool</span>
          <h2 className="text-black">Viral Style</h2>
          <p className="text-black">
            Viralstyle is a Multivendor web and mobile marketplace based on the
            Laravel framework. It allows users to sell, purchase, and design
            products. The web and mobile apps let users upload, develop, and
            sell the product over the marketplace. Also, the users get a
            commission per sale. The system is designed with an adaptive PayPal
            processing system for real-time payments. Although the system is
            split between seller and admin, manufacturing occurs at the admin
            end.
          </p>
          <div className="btn-group-box">    
            <button data-dialog="modal-4" className="common-btn lazyloaded">
              discover more
            </button>
          </div>
        </div>
      </div>
      <div className="blog-img-box">
        <figure>
          <img
            className="lazyload"
            alt="blog"
            data-src="https://devtechnosys.com/images-2023/home/blog-img-4.webp"
          />
        </figure>
        <div className="blog-mob-box green-shadow">
          <figure>
            <img
              className="lazyload"
              alt="mob"
              data-src="https://devtechnosys.com/images-2023/home/mob-4.webp"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default OurApp4;
