import React from "react";

function LookingFor() {
  return (
    <section className="looking-for ">
      <div className="container">
        <div className="row">
          <div className="col-md-5 looking-for-L">
            <img
              className="lazyload"
              data-src="https://devtechnosys.com/images/2022/nft-marketplace-development/app-dev-girl.webp"
              alt="Dev Technosys"
              width={468}
              height={468}
            />
          </div>
          <div className="col-md-6 looking-for-R">
            <div className="text-left">
              <h2>Be A Market Leader with Own Business App</h2>
              <p>
                Create a strong digital presence today and ensure a better
                tomorrow
              </p>
            </div>
            <a href="javascript:;" className="btn black-bg btn-purple">
              View Portfolio
            </a>
            <a href="javascript:;" className=" btn btn-white  margin-left-15">
              Get Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LookingFor;
