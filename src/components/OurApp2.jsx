import React from "react";

function OurApp2() {
  return (
    <section className="blog-box odd-blog">
      <div className="blog-img-content">
        <div className="title-head text-left">
          <span className="text-black">Mindbodyonline Franchise </span>
          <span>Management Software Development</span>
          <h2 className="text-black">Mind Body Online</h2>
          <p className="text-black">
            Connecting the world to wellness- Mindbodyonline
          </p>
          <div className="btn-group-box">
            <button data-dialog="modal-2" className="common-btn lazyloaded">
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
            data-src="https://devtechnosys.com/images-2023/home/blog-img-2.webp"
          />
        </figure>
        <div className="blog-mob-box green-shadow">
          <figure>
            <img
              className="lazyload"
              alt="mob"
              data-src="https://devtechnosys.com/images-2023/home/mob-2.webp"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default OurApp2;
