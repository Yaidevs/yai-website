import React from "react";
import aboutbanner from "../assets/images/about-banner.webp";
import missionvisionimg from "../assets/images/Ceo.jpg";
import inc1 from "../assets/images/inc-1.svg";
import inc2 from "../assets/images/inc-2.svg";
import inc3 from "../assets/images/inc-3.svg";
import inc4 from "../assets/images/inc-4.svg";
import inc5 from "../assets/images/inc-5.svg";
import inc6 from "../assets/images/inc-6.svg";
import "./about.css";
import Blogs from "../components/Blogs";
import GetFreeQuote from "../components/GetFreeQuote";
import Honour from "../components/Honour";
import OurOffices from "../components/OurOffices";

function About() {
  return (
    <div className="inner-warper">
      {/* Banner section */}
      <section className="about-us-main-banner-sec lazyload">
        <div
          className="about-us-main-banner-content lazyload"
          style={{ position: "relative" }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1))",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}
          />
          <img
            alt="Yai Softwares"
            className="lazyload w-52"
            src="https://img.freepik.com/free-photo/dolly-out-shot-african-american-employees-sitting-desks-office-imputing-data-computers-overnight-coworkers-modern-relaxed-workspace-solving-tasks-nightshift_482257-70203.jpg?uid=R120137908&ga=GA1.1.552436040.1735197856&semt=ais_hybrid"
            style={{ position: "relative", zIndex: 0 }}
          />
          <div className="container lazyload">
            <div className="main-heading-box lazyload">
              <h1 className="lazyload">
                Experience the True Technology at Yai Softwares
              </h1>
              <p className="lazyload">
                High - end IT solution from and by the world's greatest
                technical mindset
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About profile section  */}
      <section className="about-profile-sec lazyload">
        <div className="container lazyload">
          <div className="about-info-block lazyload">
            <ul className="lazyload">
              <li className="lazyload">
                <figure className="lazyload">
                  <img
                    alt="Yai Softwares"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/map-icon.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <p className="lazyload">Office Location</p>
                  <p className="lazyload">Jimma</p>
                </figcaption>
              </li>
              <li className="lazyload">
                <figure className="lazyload">
                  <img
                    alt="Yai Softwares"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/team-icon.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <p className="lazyload">Team Members</p>
                  <h4 className="lazyload">6</h4>
                </figcaption>
              </li>
              <li className="lazyload">
                <figure>
                  <img
                    alt="Yai Softwares"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/business-icon.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <p className="lazyload">Year in business</p>
                  <h4 className="lazyload">4 year</h4>
                </figcaption>
              </li>
              <li className="lazyload">
                <figure className="lazyload">
                  <img
                    alt="Yai Softwares"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/client-icon.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <p className="lazyload">Clients</p>
                  <h4 className="lazyload">10+</h4>
                </figcaption>
              </li>
              <li className="lazyload">
                <figure className="lazyload">
                  <img
                    alt="Yai Softwares"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/rocket-icon.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <p className="lazyload">App deliver</p>
                  <h4 className="lazyload">20+</h4>
                </figcaption>
              </li>
            </ul>
          </div>
          {/* <div className="about-info-content lazyload">
            <h5 className="lazyload">CORPORATE PROFILE</h5>
            <h4 className="lazyload">
              Does more then ever platform to achieve goal stages
            </h4>
            <p className="lazyload">
              Yai Softwares is an ISO 9001:2015 certified Web/Mobile App
              Development Company, commenced in year 2010. In our 12+ years of
              experience we have continually delivered modern technology
              solutions that have strengthen enterprise’s technical
              infrastructure and helped them lead in their business domain. At
              Yai Softwares we deploy a vast talent pool of skilful and
              experienced Web developers of strong command on contemporary
              languages and frameworks such as PHP, JavaScript, .Net, Open
              Source, etc.
            </p>
            <p className="lazyload">
              Also, we are acknowledged as one of the leading web/mobile app
              development company, We render advance development services such
              as iOS/android app development, IoT development, wearable app
              development, web development designing, and software product
              development etc.
            </p>
            <p className="lazyload">
              At Yai Softwares, we believe in the uniqueness of your idea and
              industry specific requirements of your enterprise, thus to
              perfectly meet your needs we engineer highly customise our
              projects to make them feature-rich, robust, visually stunning and
              highly responsive and interactive on backend and front end.
            </p>
            <p className="lazyload">
              Till date we have successfully rendered 1500+ projects. Over the
              years we have earned the repo as a ‘tech savvy’, ‘quality
              trendsetter’ developers of industry, our work and technical
              breadth has helped us earn recognition from prestigious
              organisations such as NASSCOM, GoodFirms etc. Yai Softwares is a
              team of 120+ experts across globe with great experience of their
              fields, determined to serve projects that surpass client
              imagination. The dynamic of the company is to constantly innovate,
              preserve the uniqueness of your enterprise, improve the products
              and services, and serve for customer satisfaction.
            </p>
          </div> */}
        </div>
      </section>
      {/* Mission - Vision Section */}
      <section className="about-mission-vision-sec lazyload">
        <div className="about-mission-vision-block lazyload">
          <div className="container lazyload">
            <div className="row lazyload">
              <div className="col-md-6 lazyload">
                <div className="about-mission-vision-content main-heading-box lazyload">
                  <h4 className="lazyload">OUR VISION &amp; MISSION</h4>
                  <h3 className="lazyload">We help to achieve mutual goals</h3>
                  <p className="lazyload">
                    We started with one goal in mind—helping businesses grow
                    with technology. Yai Softwares is a full-service IT
                    solutions company dedicated to providing modern web and app
                    development. We support startups, small and medium-sized
                    businesses (SMEs), and large corporations in their journey
                    to success.
                  </p>
                </div>
              </div>
              <div className="col-md-5 ml-auto lazyload">
                <div className="about-mission-vision-img lazyload">
                  <figure className="lazyload">
                    <img
                      alt="Yai Softwares"
                      className="lazyload w-80"
                      src={missionvisionimg}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Incomparable section */}
      <section className="section-padding incomparable-sec lazyload">
        <div className="container lazyload">
          <div className="main-heading-box main-heading-box-inner lazyload">
            <h2 className="lazyload">
              We Are Incomparable, Given Our Knowledge Expertise And Solutions
            </h2>
          </div>
          <div className="row lazyload">
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={52}
                    alt="Yai Softwares"
                    className="lazyload"
                    src={inc1}
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">In-house Team</h3>
                  <p className="lazyload">
                    Excellent team of intelligent and experienced developers and
                    designers at your disposal, trained to meet challenges with
                    out-of-the box solutions.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={51}
                    alt="Yai Softwares"
                    className="lazyload"
                    src={inc2}
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">Technology Stack</h3>
                  <p className="lazyload">
                    We are well aligned team with extensive knowledge of
                    technology and latest development trends, technology is
                    vital for us to thrive.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={49}
                    alt="Yai Softwares"
                    className="lazyload"
                    src={inc3}
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">User-focused Process</h3>
                  <p className="lazyload">
                    Agility is all about bringing ease to our clients, we have
                    formulated our development process to make things as easy
                    for our clients as they can be.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={49}
                    alt="Yai Softwares"
                    className="lazyload"
                    src={inc4}
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">Smooth Communication</h3>
                  <p className="lazyload">
                    Now connect anytime with our project managers, and get a
                    detailed information on your projects progress, we are
                    prepared for last minute changes.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={49}
                    alt="Yai Softwares"
                    className="lazyload"
                    src={inc5}
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">High-quality Code</h3>
                  <p className="lazyload">
                    Strong command over latest development platforms and
                    frameworks, now unleash high-end security, agility and high
                    functionality.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={49}
                    alt="Yai Softwares"
                    className="lazyload"
                    src={inc6}
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">Transparency</h3>
                  <p className="lazyload">
                    Quality, Time, Cost and Value – our 4 pillars that help us
                    ensure transparency in our development work and maintain
                    long term relations with our esteemed clients.
                  </p>
                </figcaption>
              </article>
            </div>
            {/* <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={50}
                    alt="Yai Softwares"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/inc-7.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">Full-flexibility</h3>
                  <p className="lazyload">
                    Our development process is uniquely made to serve and fit
                    the requirements of Startups, SME’s and big corporates, that
                    help us flexibly revitalise your apps and websites.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={55}
                    alt="Yai Softwares"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/inc-8.svg"
                  />
                </figure>
                <figcaption className="lazyload">
                  <h3 className="lazyload">Can-do Attitude </h3>
                  <p className="lazyload">
                    We look challenges as opportunities, we retaliate with
                    robust solutions and extensive knowledge of development and
                    attain victory.
                  </p>
                </figcaption>
              </article>
            </div>
            <div className="col-md-4 box-style-1 lazyload">
              <article className="lazyload">
                <figure className="lazyload">
                  <img
                    width={50}
                    height={50}
                    alt="Yai Softwares"
                    className="lazyload"
                    data-src="https://devtechnosys.com/images/2021-new/about/inc-9.svg"
                  />
                </figure>
                <figcaption>
                  <h3 className="lazyload">12+ years of experience</h3>
                  <p className="lazyload">
                    Impeccable work record of 12+ years and a legacy of world
                    class development, our portfolio tells the tale of your
                    wonderful journey.
                  </p>
                </figcaption>
              </article>
            </div> */}
          </div>
        </div>
      </section>
      {/* Work section */}
      <section className="our-work-sec paddBot20 lazyload">
        <div className="container lazyload">
          <div className="main-heading-box main-heading-box-inner lazyload">
            <h2>What Yai Softwares does for you</h2>
            <p>
              We design, create, and build. We code, innovate, and support you
              on your path to success. With our expertise in developing
              websites, apps, portals, and digital solutions, we help bring your
              business vision to life.
            </p>
          </div>
          <div className="row box-style-block lazyload">
            <div className="col-md-5 box-style-left lazyload">
              <article className="lazyload">
                <h4 className="lazyload">WHAT YOU NEED</h4>
                <ul className="lazyload">
                  <li className="lazyload">Expert Project Consultation</li>
                  <li className="lazyload">Efficient Workload Management</li>
                  <li className="lazyload">Idea Refinement & Strategy</li>
                  <li className="lazyload">Skilled Development Team</li>
                  <li className="lazyload">Continuous Innovation</li>
                </ul>
              </article>
            </div>
            <div className="col-md-2 box-style-center lazyload">
              <article className="lazyload">
                <ul className="lazyload">
                  <li className="lazyload">Product development</li>
                  <li className="lazyload">Strategic Business Partnerships </li>
                  <li className="lazyload">Cutting-Edge & Seamless Design</li>
                  <li className="lazyload">Committed Development Team </li>
                  <li className="lazyload">Advanced & Scalable Solutions</li>
                </ul>
              </article>
            </div>
            <div className="col-md-5 box-style-right ml-auto lazyload">
              <article className="lazyload">
                <h4 className="lazyload">WHAT YAI Softwares Does </h4>
                <ul className="lazyload">
                  <li className="lazyload">Provide Technical Expertise</li>
                  <li className="lazyload">Drive Progress</li>
                  <li className="lazyload">Innovate Through Brainstorming</li>
                  <li className="lazyload">
                    Develop High-Quality Apps & Websites
                  </li>
                  <li className="lazyload">Fuel Inspiration & Growth</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* <Blogs /> */}
      {/* <GetFreeQuote /> */}
      {/* <Honour /> */}
      {/* <OurOffices /> */}
    </div>
  );
}

export default About;
