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
        </main>
      </div>
    </div>
  );
}

export default App;
