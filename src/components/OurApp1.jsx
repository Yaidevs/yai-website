import React from "react";

function OurApp1() {
  return (
    <section className="blog-box">
      <div className="blog-img-box">
        <figure className="">
          <img
            className="lazyload"
            alt="Blog"
            data-src="https://t4.ftcdn.net/jpg/10/11/47/65/240_F_1011476573_EkVPrBC7mLgh100qsv2Fa61WasgiQJlm.jpg"
          />
        </figure>
        <div className="blog-mob-box pink-shadow">
          <figure className="">
            <img
              className="lazyload"
              alt="mob"
              data-src="https://firebasestorage.googleapis.com/v0/b/dawaafinder-files.appspot.com/o/yai-pictures%2FHome%20(1).jpg?alt=media&token=0e32c121-c53b-4d4f-8279-309f1856437b"
            />
          </figure>
        </div>
      </div>
      <div className="blog-img-content">
        <div className="title-head text-left">
          <h2 className="text-black">DawaaFinder</h2>
          <p className="text-black">
            App that simplifies finding affordable medicines and ensures
            adherence through timely reminders.We as a DawaaFinder also provide
            an ERP for health organizations to enhance efficiency and safety.
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
