import React from "react";

function OurApp3() {
  return (
    <section className="blog-box">
      <div className="blog-img-box">
        <figure>
          <img
            className="lazyload"
            alt="blog"
            data-src="https://img.freepik.com/free-photo/young-male-adult-taking-pictures-building_23-2148638746.jpg?t=st=1737969162~exp=1737972762~hmac=bf92acc13ddbc7815bf4d6ad08b71c8cd33a8491ff3370a295c38be4884c860c&w=740"
          />
        </figure>
        <div className="blog-mob-box yallow-shadow">
          <figure>
            <img
              className="lazyload"
              alt="mob"
              data-src="https://firebasestorage.googleapis.com/v0/b/dawaafinder-files.appspot.com/o/yai-pictures%2FScreenshot_20250115-114448.jpg?alt=media&token=9a657c2d-d71e-4eae-880f-3bb89e7f4a4b"
            />
          </figure>
        </div>
      </div>
      <div className="blog-img-content">
        <div className="title-head text-left">
          <h2 className="text-black">ቤት Ale</h2>
          <p className="text-black">
            App designed to make finding your dream home or house effortless.
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
