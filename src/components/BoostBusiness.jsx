import React from "react";
import { Link } from "react-router-dom";
function BoostBusiness() {
  return (
    <section className="cta-black space-comm">
      <div className="container">
        <div className="cta-bg">
          <div className="cta-content-r">
            <div className="title-head text-left">
              <h2 className="text-white ">
                Boost Your Business Growth with Top Mobile App Development
                Services!
              </h2>
              <p className="text-white hidden md:block lg:text-lg">
                Are you looking for the right place to kickstart a digital
                business journey? Look no further than YAI Software Technologies.
                Accomplish your business dream with us!
              </p>
              <div className="btn-group-box">
                <Link    
                to="/send-inquiry"
                  className="common-btn white-btn lazyloaded"
                >
                  Request A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoostBusiness;
