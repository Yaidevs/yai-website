import React from "react";

function OurApp2() {
  return (
    <section className="blog-box odd-blog">
      <div className="blog-img-content">
        <div className="title-head text-left">
          <h2 className="text-black">GibiInfo</h2>
          <p className="text-black">
            A learning app designed to help students excel in their academic
            journey by providing a platform to practice a wide range of
            questions.
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
            data-src="https://img.freepik.com/free-photo/glad-student-has-curly-hair-holds-notebook-uses-mobile-phone-surfing-internet-reads-ideas-project-dressed-casually-poses-outdoors_273609-55627.jpg?t=st=1737968418~exp=1737972018~hmac=9ff41f741f9ed22a21d1375245913406686be52fee67afb64441913361b1d723&w=740"
          />
        </figure>
        <div className="blog-mob-box green-shadow">
          <figure>
            <img
              className="lazyload"
              alt="mob"
              data-src="https://firebasestorage.googleapis.com/v0/b/dawaafinder-files.appspot.com/o/yai-pictures%2FScreenshot_20250122-003751.jpg?alt=media&token=2359ca48-281b-4cf5-addb-0e88d24ae5e0"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default OurApp2;
