import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/images/app-dev-girl.webp";

function LookingFor() {
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
              <h2>Be A Market Leader with Own Business App</h2>
              <p>
                Create a strong digital presence today and ensure a better
                tomorrow
              </p>
            </div>
            <Link to="/portfolio" className="btn black-bg btn-purple">
              View Portfolio
            </Link>
            <Link to="/send-inquiry" className=" btn btn-white  margin-left-15">
              Get a Qoute
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LookingFor;
