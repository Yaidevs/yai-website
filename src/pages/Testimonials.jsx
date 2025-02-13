import React from "react";
import test1 from "../assets/images/testimonial1.webp";
import test2 from "../assets/images/testimonial2.webp";
import test3 from "../assets/images/testimonial1.webp";

function Testinomials() {
  return (
    <section className="testimonial-home section-padding lazyload">
      <div className="container lazyload">
        <div className="heading-with-btn lazyload">
          <div className="main-heading-box text-left lazyload">
            <h5 className="lazyload">Our testimonial</h5>
            <h2 className="lazyload">Our clients simply love our work</h2>
          </div>
        </div>
        <div className="row testimonial-box lazyload">
          <div className="col-md-4 d-flex lazyload">
            <article className="lazyload">
              <p className="lazyload">
                Yai Softwares delivered everything they promised. Their team did
                an excellent job. They deliver a quality project within the
                promised date. In-house agents have reported greater efficiency
                and increased profit thanks to the site’s ability to manage
                properties and payments.
              </p>
              <div className="testimonial-info d-flex lazyload">
                <figure className="lazyload">
                  <img
                    width={69}
                    height={69}
                    className="lazyload"
                    src="https://via.placeholder.com/150"
                    alt="Yai Softwares"
                  />
                </figure>
                <h4 className="lazyload">Adane Tadese</h4>
              </div>
            </article>
          </div>
          <div className="col-md-4 d-flex lazyload">
            <article className="lazyload">
              <p className="lazyload">
                Yai Softwares has consistently provided a strong level of
                service and quality of deliverables. Fully committed to securing
                satisfaction, they offer honest and useful advice to maximize
                the budget. A skilled team, they have the client’s best
                interests at heart in all of their consultation.
              </p>
              <div className="testimonial-info d-flex lazyload">
                <figure className="lazyload">
                  <img
                    width={69}
                    height={69}
                    className="lazyload"
                    src="https://via.placeholder.com/150"
                    alt="Yai Softwares"
                  />
                </figure>
                <h4 className="lazyload">Alemisa Indebu</h4>
              </div>
            </article>
          </div>
          <div className="col-md-4 d-flex lazyload">
            <article className="lazyload">
              <p className="lazyload">
                The work completed by the Yai Softwares team is of high quality
                and meets the requirements. They offered several design options
                to choose from that were attractive and fit for purpose. Despite
                some language barriers with the developers, the project is
                managed well.
              </p>
              <div className="testimonial-info d-flex lazyload">
                <figure className="lazyload">
                  <img
                    width={69}
                    height={69}
                    className="lazyload"
                    src="https://via.placeholder.com/150"
                    alt="Yai Softwares"
                  />
                </figure>
                <h4 className="lazyload">Chris G.</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testinomials;
