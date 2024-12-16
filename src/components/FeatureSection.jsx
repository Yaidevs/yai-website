import React from "react";

function FeatureSection() {
  return (
    <section className="our-keyfetures space-comm">
      <div className="container">
        <div className="title-head text-center">
          <small className="green-tag">OUR FEATURES</small>
          <h2>Why Choose Dev Technosys?</h2>
          <p>
            Here’s a glimpse of the result-oriented services that make us the
            top web and mobile app development company.
          </p>
        </div>
      </div>
      <div className="our-keyfetures-list">
        <div className="owl-carousel owl-theme keyfetures-owl">
          <div className="item">
            <figure className="orange-bg-box">
              <img
                className="lazyload"
                alt="Time Delivery"
                data-src="https://devtechnosys.com/images-2023/home/slide-icon-6.svg"
              />
            </figure>
            <figcaption>
              <h3>Timely Delivery</h3>
              <p>
                Time is money. At Dev Technosys, we value every client’s time;
                hence, our team makes sure to deliver the project within the
                promised deadline.{" "}
              </p>
            </figcaption>
          </div>
          <div className="item">
            <figure className="green-bg-box">
              <img
                className="lazyload"
                alt="Top Work Quality"
                data-src="https://devtechnosys.com/images-2023/home/slide-icon-7.svg"
              />
            </figure>
            <figcaption>
              <h3>Top Work Quality</h3>
              <p>
                We never compromise with the work quality and ensure to deliver
                top quality work adhering to the business needs and project
                requirements.{" "}
              </p>
            </figcaption>
          </div>
          <div className="item">
            <figure className="blue-bg-box">
              <img
                className="lazyload"
                alt="Dedicated Team"
                data-src="https://devtechnosys.com/images-2023/home/slide-icon-1.svg"
              />
            </figure>
            <figcaption>
              <h3>Dedicated Team</h3>
              <p>
                Whether you want to develop a website or mobile application, we
                have a dedicated team for all. Share your requirements with our
                experts!
              </p>
            </figcaption>
          </div>
          <div className="item">
            <figure className="purple-bg-box">
              <img
                className="lazyload"
                alt="24*7 Support"
                data-src="https://devtechnosys.com/images-2023/home/slide-icon-2.svg"
              />
            </figure>
            <figcaption>
              <h3>24*7 Support</h3>
              <p>
                It doesn’t matter what time or day it is; Dev Technosys customer
                support is there to assist you with the best services and
                resolve concerns instantly.{" "}
              </p>
            </figcaption>
          </div>
          <div className="item">
            <figure className="pink-bg-box">
              <img
                className="lazyload"
                alt="Agile Development"
                data-src="https://devtechnosys.com/images-2023/home/slide-icon-3.svg"
              />
            </figure>
            <figcaption>
              <h3>Agile Development</h3>
              <p>
                We always follow an agile development approach that helps us
                deliver the project with the utmost quality. Get reliable and
                scalable business solutions.
              </p>
            </figcaption>
          </div>
          <div className="item">
            <figure className="orange-bg-box">
              <img
                className="lazyload"
                alt="Cost-effective Solutions"
                data-src="https://devtechnosys.com/images-2023/home/slide-icon-4.svg"
              />
            </figure>
            <figcaption>
              <h3>Cost-effective Solutions</h3>
              <p>
                At Dev Technosys, we always value hard-earned money and also
                understand budget concerns. So, we offer reasonable mobile and
                web development services.
              </p>
            </figcaption>
          </div>
          <div className="item">
            <figure className="orange-bg-box">
              <img
                className="lazyload"
                alt="User-centric Development"
                data-src="https://devtechnosys.com/images-2023/home/slide-icon-5.svg"
              />
            </figure>
            <figcaption>
              <h3>User-centric Development</h3>
              <p>
                An application, website, or software is nothing if it is not
                user-friendly. Considering this, Dev Technosys always offers
                user-centric development assistance.
              </p>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;