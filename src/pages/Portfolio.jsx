import React from "react";
import "./portfolio.css";
import "./portfolio-2023.css";
import "./bsm.css";
import "./css2Minify.css";
import "./cssFamily.css";
import "./jquery-ui.css";
import starshape1 from "../assets/images/star-shape.png";
import starshapeb from "../assets/images/star-shape-b.png";
import mob1 from "../assets/images/mob-1.png";
import mob2 from "../assets/images/mob-2.png";
import img1 from "../assets/images/img-1.png";
import womenwithmedicine from "../assets/images/womenwithmedicine.png";
import doctorwithmobile from "../assets/images/doctorwithmobile.png";
import doctor from "../assets/images/doctor.png";
import screen1 from "../assets/images/screen-1.png";
import img2 from "../assets/images/img-2.png";
import img3 from "../assets/images/img-3.png";
import dawafinder from "../assets/images/dawafinderhomepage.png";
import gibiinfo from "../assets/images/gibiinfohomepage.png";
import betale from "../assets/images/betalehome.png";

import arrow from "../assets/images/arrow-up.png";

function Portfolio() {
  return (
    <div className="my-class">
      <section className="portfolio">
        <div className="banner-sec">
          <div className="container">
            <figure className="banner-sec-shape-l">
              <img className="lazyload" src={starshape1} alt="Yai Softwares" />
            </figure>
            <div className="banner-sec-content">
              <h1>
                <i>Transforming </i> Ideas into Thriving Business
                {""} <i>Opportunities </i>
              </h1>
              <p>
                Yai Softwares, a leading mobile &amp; web development offers the
                best solutions which won national and global awards. Those are
                DawaFinder ,Gibi Info and ቤትAle.
              </p>
            </div>
            <figure className="banner-sec-shape-r">
              <img className="lazyload" src={starshapeb} alt="Yai Softwares" />
            </figure>
          </div>
        </div>
        <div className="box-portfolio">
          <div className="container">
            <div className="green-bg box-portfolio-inner">
              <figure className="porfolio-mob">
                <img
                  className="lazyload w-full lg:w-72"
                  src={dawafinder}
                  alt="Yai Softwares"
                />
              </figure>
              <div className="box-portfolio-content">
                <div className="img-content">
                  <h2>DawaFinder</h2>
                  <h4>Finding Medicine Shouldn’t Be a Struggle!</h4>
                  <p>
                    Dawafinder is a platform that enables patients to easily
                    find medications by easily scanning prescriptions or typing
                    the name of medications.
                  </p>
                  {/* <a
                    href="https://devtechnosys.com/case-study/healthcare-careu.php"
                    className="link-text"
                  >
                    View Case Study
                    <img className="lazyload" src={arrow} alt="Yai Softwares" />
                  </a> */}
                </div>
              </div>

              <div className="box-portfolio-img">
                <figure>
                  <img className="lazyload" src={doctor} alt="Yai Softwares" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="box-portfolio">
          <div className="container">
            <div className="green-bg box-portfolio-inner">
              <figure className="porfolio-mob">
                <img
                  className="lazyload w-full lg:w-72"
                  src={gibiinfo}
                  alt="Yai Softwares"
                />
              </figure>
              <div className="box-portfolio-content">
                <div className="img-content">
                  <h2>Gibi Info</h2>
                  <h4>The Best Way To Learn!</h4>
                  <p>
                    Gibi Info is a platform that helps students practice with
                    expert-analyzed questions, exchange educational materials,
                    and access a blog to guide them in understanding
                    universities and improving academically.
                  </p>
                  {/* <a
                    href="https://devtechnosys.com/case-study/healthcare-careu.php"
                    className="link-text"
                  >
                    View Case Study
                    <img className="lazyload" src={arrow} alt="Yai Softwares" />
                  </a> */}
                </div>
              </div>

              <div className="box-portfolio-img">
                <figure>
                  <img
                    className="lazyload"
                    src="https://img.freepik.com/free-photo/young-pretty-woman-student-browsed-mobile-phone-walking-city-street_231208-1202.jpg?uid=R120137908&ga=GA1.1.552436040.1735197856&semt=ais_hybrid"
                    alt="Yai Softwares"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="box-portfolio portfolio-odd">
          <div className="container">
            <div className="skin-bg box-portfolio-inner">
              <figure className="porfolio-screen">
                <img
                  className="lazyload w-72 z-10"
                  src={gibiinfo}
                  alt="Yai Softwares"
                />
              </figure>
              <div className="box-portfolio-img">
                <figure>
                  <img className="lazyload" src={img2} alt="Yai Softwares" />
                </figure>
              </div>
              <div className=" box-portfolio-content">
                <div className="img-content">
                  <h2>Gibi Info</h2>
                  <h4>The Best Way To Learn!</h4>
                  <p>
                    Gibi Info is a platform that helps students practice with
                    expert-analyzed questions, exchange educational materials,
                    and access a blog to guide them in understanding
                    universities and improving academically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="box-portfolio">
          <div className="container">
            <div className="green-bg box-portfolio-inner">
              <figure className="porfolio-mob">
                <img
                  className="lazyload w-full lg:w-72"
                  src={betale}
                  alt="Yai Softwares"
                />
              </figure>
              <div className="col-md-7 box-portfolio-content">
                <div className="img-content">
                  <h2>ቤትAle</h2>
                  <h4>Get Your Dream Home</h4>
                  <p className="max-w-lg">
                    ቤትAle is an easy-to-use app that helps you find your dream
                    home, whether you're looking to rent or buy. Property owners
                    can easily post their listings, while buyers and renters can
                    browse and connect with them. ቤትAle makes it simple to find
                    the perfect home and connect with the right people. Get Your
                    Dream Home with ቤትAle!
                  </p>
                  {/* <a
                    href="https://devtechnosys.com/case-study/music-application-giggle.php"
                    className="link-text"
                  >
                    View Case Study
                    <img className="lazyload" src={arrow} alt="Yai Softwares" />
                  </a> */}
                </div>
              </div>
              <div className="box-portfolio-img">
                <figure>
                  <img
                    className="lazyload"
                    src="https://img.freepik.com/premium-photo/young-man-with-keys-just-bought-new-appartment_926199-3591900.jpg?uid=R120137908&ga=GA1.1.552436040.1735197856&semt=ais_hybrid"
                    alt="Yai Softwares"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="box-portfolio portfolio-odd">
          <div className="container">
            <div className="skin-bg box-portfolio-inner">
              <figure className="porfolio-screen">
                <img
                  className="lazyload"
                  src="images/2023/porfolio/screen-2.png"
                  alt="Yai Softwares"
                />
              </figure>
              <div className="box-portfolio-img">
                <figure>
                  
                  <img
                    className="lazyload"
                    src="images/2023/porfolio/img-4.png"
                    alt="Yai Softwares"
                  />
                </figure>
              </div>
              <div className="box-portfolio-content">
                <div className="img-content">
                  <h2>Shoppers Supermarket</h2>
                  <h4>
                    Connecting Shoppers to Dreams with E-commerce Platform
                  </h4>
                  <p>
                    Shoppers Supermarket is an e-commerce-based solution for a
                    Supermarket chain business where users can explore the
                    products listed.
                  </p>
                  <a
                    href="https://devtechnosys.com/case-study/ecommerce-app-shoppers-supermarket.php"
                    className="link-text"
                  >
                    View Case Study
                    <img
                      className="lazyload"
                      src={arrow}
                      alt="Yai Softwares"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
         {/*
        <div className="box-portfolio ">
          <div className="container">
            <div className="light-org-bg box-portfolio-inner">
              <figure className="porfolio-screen">
                <img
                  className="lazyload"
                  src="images/2023/porfolio/mob-3.png"
                  alt="Yai Softwares"
                />
              </figure>
              <div className="box-portfolio-img">
                <figure>
                  
                  <img
                    className="lazyload"
                    src="images/2023/porfolio/img-5.png"
                    alt="Yai Softwares"
                  />
                </figure>
              </div>
              <div className="box-portfolio-content">
                <div className="img-content">
                  <h2>Fashion Porters</h2>
                  <h4>Shop Smart &amp; Live Well with E-commerce Platform</h4>
                  <p>
                    Fashion Porters is a mobile app platform for
                    customers/service seekers who like to buy dresses by knowing
                    exactly how they would look on them.
                  </p>
                  <a
                    href="https://devtechnosys.com/case-study/ecommerce-application-fashion-porters.php"
                    className="link-text"
                  >
                    View Case Study
                    <img
                      className="lazyload"
                      src={arrow}
                      alt="Yai Softwares"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-portfolio portfolio-odd">
          <div className="container">
            <div className="pink-bg box-portfolio-inner">
              <figure className="porfolio-mob">
                <img
                  className="lazyload"
                  src="images/2023/porfolio/screen-3.png"
                  alt="Yai Softwares"
                />
              </figure>
              <div className="box-portfolio-content">
                <div className="img-content">
                  <h2>Qarqish</h2>
                  <h4>Elevating Shopping Experiences Worldwide</h4>
                  <p>
                    Qarqish is an online platform enabling B2C to sell any
                    product. Here customers can purchase any product directly.
                  </p>
                  <a
                    href="https://devtechnosys.com/case-study/e-commerce-qarqish.php"
                    className="link-text"
                  >
                    View Case Study
                    <img
                      className="lazyload"
                      src={arrow}
                      alt="Yai Softwares"
                    />
                  </a>
                </div>
              </div>
              <div className="box-portfolio-img">
                <figure>
                  <img
                    className="lazyload"
                    src="images/2023/porfolio/img-6.png"
                    alt="Yai Softwares"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="box-portfolio">
          <div className="container">
            <div className="light-prp-bg box-portfolio-inner">
              <figure className="porfolio-mob">
                <img
                  className="lazyload"
                  src="images/2023/porfolio/mob-4.png"
                  alt="Yai Softwares"
                />
              </figure>
              <div className="box-portfolio-content">
                <div className="img-content">
                  <h2>Birlingo</h2>
                  <h4>
                    Empower Minds, Illuminate Futures: A Gateway to Education
                    Excellence
                  </h4>
                  <p>
                    Birlingo is a language learning platform mainly targeting
                    German-speaking people who want to learn different
                    languages.
                  </p>
                  <a
                    href="https://devtechnosys.com/case-study/education-application-birlingo.php"
                    className="link-text"
                  >
                    View Case Study
                    <img
                      className="lazyload"
                      src={arrow}
                      alt="Yai Softwares"
                    />
                  </a>
                </div>
              </div>
              <div className=" box-portfolio-img">
                <figure>
                  <img
                    className="lazyload"
                    src="images/2023/porfolio/img-7.png"
                    alt="Yai Softwares"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="box-portfolio portfolio-odd">
          <div className="container">
            <div className="light-org-bg box-portfolio-inner">
              <figure className="porfolio-screen">
                <img
                  className="lazyload"
                  src="images/2023/porfolio/screen-4.png"
                  alt="Yai Softwares"
                />
              </figure>
              <div className="box-portfolio-img">
                <figure>
                  
                  <img
                    className="lazyload"
                    src="images/2023/porfolio/img-8.png"
                    alt="Yai Softwares"
                  />
                </figure>
              </div>
              <div className="box-portfolio-content">
                <div className="img-content">
                  <h2>FYNDA PRO</h2>
                  <h4>Simplifying Care with All-in-One Healthcare Companion</h4>
                  <p>
                    FYNDA PRO is a doctor-on-demand platform enabling users to
                    connect with doctors to offer different services.
                  </p>
                  <a
                    href="https://devtechnosys.com/case-study/healthcare-application-fynda-pro.php"
                    className="link-text"
                  >
                    View Case Study
                    <img
                      className="lazyload"
                      src={arrow}
                      alt="Yai Softwares"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-portfolio">
          <div className="container">
            <div className="light-org-bg box-portfolio-inner">
              <figure className="porfolio-screen">
                <img
                  className="lazyload"
                  src="images/2023/porfolio/mob-5.png"
                  alt="Yai Softwares"
                />
              </figure>
              <div className="box-portfolio-img">
                <figure>
                  
                  <img
                    className="lazyload"
                    src="images/2023/porfolio/img-9.png"
                    alt="Yai Softwares"
                  />
                </figure>
              </div>
              <div className="box-portfolio-content">
                <div className="img-content">
                  <h2>Ogaworkman</h2>
                  <h4>Elevating Home Services with Convenience and Care</h4>
                  <p>
                    Ogaworkman is an on-demand solution that offers domestic
                    services, including plumbing, and electrician service, to
                    the client/service seeker.
                  </p>
                  <a
                    href="https://devtechnosys.com/case-study/home-service-app-ogaworkman.php"
                    className="link-text"
                  >
                    View Case Study
                    <img
                      className="lazyload"
                      src={arrow}
                      alt="Yai Softwares"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-portfolio portfolio-odd">
          <div className="container">
            <div className="light-org-bg box-portfolio-inner">
              <figure className="porfolio-screen">
                <img
                  className="lazyload"
                  src="images/2023/porfolio/mob-6.png"
                  alt="Yai Softwares"
                />
              </figure>
              <div className="box-portfolio-img">
                <figure>
                  
                  <img
                    className="lazyload"
                    src="images/2023/porfolio/img-10.png"
                    alt="Yai Softwares"
                  />
                </figure>
              </div>
              <div className="box-portfolio-content">
                <div className="img-content">
                  <h2>MULTIPARK VALET</h2>
                  <h4>
                    Offering Seamless Valet Parking Solutions At Fingertips
                  </h4>
                  <p>
                    The multi-parking mobile application is an online platform
                    where customers search the nearby valet and send requests to
                    park a car.
                  </p>
                  <a
                    href="https://devtechnosys.com/case-study/parking-booking-app-multipark-valet.php"
                    className="link-text"
                  >
                    View Case Study
                    <img
                      className="lazyload"
                      src={arrow}
                      alt="Yai Softwares"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}

export default Portfolio;
