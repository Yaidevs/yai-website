import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MyHero from "./components/MyHero";
import "./assets/js/lazysizes.min.js";
import "./assets/css/animation-2023.css";
import "./assets/css/common-head-foot-2023.css";
import "./assets/css/faq.css";
import "./assets/css/home.css";
import "./assets/css/hire-modal.css";
import "./assets/css/intlTelInput.css";
import "./assets/css/owl.carousel.min.css";
import PartnerSections from "./components/PartnerSections";
import VisionSection from "./components/VisionSection";
import BoostBusiness from "./components/BoostBusiness";
import ServiceSection from "./components/ServiceSection";
import FeatureSection from "./components/FeatureSection";
import GainUpperEdge from "./components/GainUpperEdge";
import ServingAll from "./components/ServingAll";
import Industries from "./components/Industries";
import OurApp1 from "./components/OurApp1";
import OurApp2 from "./components/OurApp2";
import OurApp3 from "./components/OurApp3";
import OurApp4 from "./components/OurApp4";
import DiscussYourProject from "./components/DiscussYourProject";
import Testimonials from "./components/Testimonials";
import CaseStudies from "./components/CaseStudies";
import Faq from "./components/Faq";
import Blogs from "./components/Blogs";
import GetFreeQuote from "./components/GetFreeQuote";
import Honour from "./components/Honour";
import OurOffices from "./components/OurOffices";
import NewsLetter from "./components/NewsLetter";
import ServingFooter from "./components/ServingFooter";
import FooterMenu from "./components/FooterMenu";
import FooterSocial from "./components/FooterSocial";
import FooterCopyright from "./components/FooterCopyright";
function App() {
  return (
    <div className="site_content lazyload" id="">
      <canvas class="snow" id="snow" width="1848" height="515"></canvas>
      <div className="page-warper">
        <Navbar />
        <main>
          <MyHero />
          <PartnerSections />
          <VisionSection />
          <BoostBusiness />
          <ServiceSection />
          <FeatureSection />
          <GainUpperEdge />
          <ServingAll />
          <Industries />
          <OurApp1 />
          <OurApp2 />
          <OurApp3 />
          <OurApp4 />
          <DiscussYourProject />
          <Testimonials />
          <CaseStudies />
          <Faq />
          <div>
            <Blogs />
            <GetFreeQuote />
            <Honour />
            <OurOffices />
          </div>
          <footer className="lazyload">
            <NewsLetter />
            <ServingFooter />
            <FooterMenu />
            <FooterSocial />
            <FooterCopyright />
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
