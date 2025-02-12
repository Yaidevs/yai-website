import React from "react";
import wantto1 from "../assets/images/want-to-1.png";
import wantto2 from "../assets/images/want-to-2.png";
import wantto3 from "../assets/images/want-to-3.png";
import wantto4 from "../assets/images/want-to-4.png";
import wantto5 from "../assets/images/want-to-5.png";
import wantto6 from "../assets/images/want-to-6.png";

function CostEstimation() {
  return (
    <section className="want-to-get section-padding">
      <div className="container">
        <div className="main-heading-box main-heading-box-inner">
          <h2>Get Cost Estimation As Per Your Project Needs</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="want-to-get-box yallow-bg">
              <figure>
                <img
                  className="lazyload"
                  src={wantto1}
                  alt="Hire Dedicated Team"
                />
              </figure>
              <figcaption>
                <h3>Hire Dedicated Team</h3>
                <p>
                  Want to hire dedicated developers or an entire app development
                  team? Know how much it cost to hire dedicated developers.
                </p>
              </figcaption>
              <a href="javascript:;" className="get-quote-btn pricing-modal">
                Get A Quote
              </a>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="want-to-get-box green-bg">
              <figure>
                <img
                  className="lazyload"
                  src={wantto2}
                  alt="Seek Trending Solutions"
                />
              </figure>
              <figcaption>
                <h3>Seek Trending Solutions</h3>
                <p>
                  Get the industry-best app and web development solutions for
                  any industry while choosing Dev Technosys as your development
                  partner.
                </p>
              </figcaption>
              <a href="javascript:;" className="get-quote-btn pricing-modal">
                Get A Quote
              </a>
            </div>
          </div> */}
          <div className="col-md-4">
            <div className="want-to-get-box blue-bg">
              <figure>
                <img
                  className="lazyload"
                  src={wantto3}
                  alt="IT Consulting Services"
                />
              </figure>
              <figcaption>
                <h3>IT Consulting Services</h3>
                <p>
                  Do you have a project idea and want professional assistance to
                  implement it? Seek IT consulting services from Dev Technosys.
                </p>
              </figcaption>
              <a href="javascript:;" className="get-quote-btn pricing-modal">
                Get A Quote
              </a>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="want-to-get-box purple-bg">
              <figure>
                <img className="lazyload" src={wantto4} alt="QA And Testing" />
              </figure>
              <figcaption>
                <h3>QA And Testing</h3>
                <p>
                  Do you already have an existing business application or
                  software and want to seek quality assurance and testing
                  services? We can help.
                </p>
              </figcaption>
              <a href="javascript:;" className="get-quote-btn pricing-modal">
                Get A Quote
              </a>
            </div>
          </div> */}
          <div className="col-md-4">
            <div className="want-to-get-box lightyallow-bg">
              <figure>
                <img
                  className="lazyload"
                  src={wantto5}
                  alt="Support & Maintenance"
                />
              </figure>
              <figcaption>
                <h3>Support &amp; Maintenance</h3>
                <p>
                  Want to keep your application upgraded and increase its
                  lifespan? Seek mobile app support and maintenance services
                  from Dev Technosys.
                </p>
              </figcaption>
              <a href="javascript:;" className="get-quote-btn pricing-modal">
                Get A Quote
              </a>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="want-to-get-box pink-bg">
              <figure>
                <img
                  className="lazyload"
                  src={wantto6}
                  alt="IT Staffing Solutions"
                />
              </figure>
              <figcaption>
                <h3>IT Staffing Solutions</h3>
                <p>
                  Do you need IT staff for your project? Discuss your IT
                  staffing solutions requirements with us and get dedicated
                  resources within your budget.
                </p>
              </figcaption>
              <a href="javascript:;" className="get-quote-btn pricing-modal">
                Get A Quote
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default CostEstimation;
