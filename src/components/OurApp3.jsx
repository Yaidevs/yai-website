import React from "react";

function OurApp3() {
  return (
    <section className="blog-box">
      <div className="blog-img-box">
        <figure>
          <img
            className="lazyload"
            alt="blog"
            data-src="https://devtechnosys.com/images-2023/home/blog-img-3.webp"
          />
        </figure>
        <div className="blog-mob-box yallow-shadow">
          <figure>
            <img
              className="lazyload"
              alt="mob"
              data-src="https://devtechnosys.com/images-2023/home/mob-3.webp"
            />
          </figure>
        </div>
      </div>
      <div className="blog-img-content">
        <div 
        className="title-head text-left">
          <span className="text-black">Safe Car Wash Car</span>
          <span>Wash Application</span>
          <h2 className="text-black">Safe Car Wash</h2>
          <p className="text-black">
            In hand car wash system, system mismanagement and bondage is taking
            place. But with only anecdotal evidence and a partial understanding
            of the problem, law enforcement needs the public’s support to map
            this issue.
          </p>
          <div className="btn-group-box">
            <button data-dialog="modal-3" className="common-btn lazyloaded">
              discover more
  
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurApp3;
