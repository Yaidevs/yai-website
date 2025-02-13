import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/images/app-dev-girl.webp";

function LookingFor2() {
  return (
    <section className="looking-for ">
      <div className="container">
        <div className="row">
          <div className="col-md-5 looking-for-L">
            <img
              className="lazyload"
              src={img1}
              alt="Yai Softwares"
              width={468}
              height={468}
            />
          </div>
          <div className="col-md-6 looking-for-R">
            <div className="text-left">
              <h2>Why Miss Out on Growth? Invest In Mobile App Development!</h2>
              <p>
                Establish your business as a market leader with your own
                dedicated mobile application.
              </p>
            </div>
            <Link to="/portfolio" className="btn black-bg btn-purple">
              View Portfolio
            </Link>
            <Link to="/send-inquiry" className=" btn btn-white  margin-left-15">
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LookingFor2;
