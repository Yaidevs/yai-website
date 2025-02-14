import React from "react";
import './menu.css'

function Menu() {
  return (
    <div>
      <header className="full-header">
        <a href="https://devtechnosys.com/" className="logo">
          <img alt="YAI Software Technologies" src="images/logo-cm.png" />
        </a>
        <a href="#" onclick="goBack()" className="menu-btn">
          Close <img alt="YAI Software Technologies" src="images/close.svg" />
        </a>
      </header>
      <div className="menu-container">
        <div className="menu-container-in">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="company-tab"
                data-toggle="tab"
                href="#company"
                role="tab"
                aria-controls="company"
                aria-selected="true"
              >
                Company
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="services-tab"
                data-toggle="tab"
                href="#services"
                role="tab"
                aria-controls="services"
                aria-selected="false"
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="industries-tab"
                data-toggle="tab"
                href="#industries"
                role="tab"
                aria-controls="industries"
                aria-selected="false"
              >
                Industries
              </a>
            </li>
            {/* <li class="nav-item">
          <a class="nav-link" href="//www.google.com">Portfolio</a>
         </li> */}
            <li className="nav-item">
              <a
                className="nav-link"
                id="solutions-tab"
                data-toggle="tab"
                href="#solutions"
                role="tab"
                aria-controls="solutions"
                aria-selected="false"
              >
                Trending Solutions
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="hire-developers-tab"
                data-toggle="tab"
                href="#hire-developers"
                role="tab"
                aria-controls="hire-developers"
                aria-selected="false"
              >
                Hire Developers
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="hire-resource-tab"
                data-toggle="tab"
                href="#hire-resource"
                role="tab"
                aria-controls="hire-resource"
                aria-selected="false"
              >
                Resource
              </a>
            </li>
            {/* <li class="nav-item">
          <a class="nav-link" href="//www.google.com">Contact Us</a>
         </li> */}
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="company"
              role="tabpanel"
              aria-labelledby="company-tab"
            >
              <div className="menu-compnay">
                <div className="row">
                  <div className="col-md-3">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/about.php">
                          Company Profile
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/infrastructure.php">
                          Infrastructure
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/our-team.php">
                          Our Team
                        </a>
                      </li>
                      {/* <li><a href="blog.php">Our Blog</a></li> */}
                      <li>
                        <a href="https://devtechnosys.com/insights/">
                          Insights
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/contact.php">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/our-partners.php">
                          Our Partners
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/testimonials.php">
                          Testimonials
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/process.php">
                          Our Process
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/quality-assurance.php">
                          Quality Assurance
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/portfolio.php">
                          Portfolio
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/awards.php">
                          Our Awards
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/become-partner.php">
                          Become A Partner
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/engagement-model.php">
                          Engagement Model
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/podcast.php">
                          Podcast
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/app-of-the-week.php">
                          App Of the week
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/quality-management.php">
                          Quality Management
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/security-ipprotection.php">
                          Security IP Protection
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/referral-program.php">
                          Referral Program
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/resources.php">
                          Resources
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="services"
              role="tabpanel"
              aria-labelledby="services-tab"
            >
              <div className="menu-services">
                <div className="menu-head-blk">
                  <h1>
                    <a href="https://devtechnosys.com/mobile-app-development.php">
                      Mobile Application Development
                    </a>
                  </h1>
                </div>
                <div className="row mb-30">
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/android-app-development.php">
                          Android App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/iphone-app-development.php">
                          iPhone App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/hybrid-mobile-app-development.php">
                          Hybrid App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/progressive-web-apps-development.php">
                          Progressive Web Apps Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/ipad-application-development.php">
                          iPad App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/mobile-app-design-services.php">
                          Mobile App Design Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/react-native-development.php">
                          React Native Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/wearable-mobile-app-development.php">
                          Wearable App Development{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/mobile-app-prototyping.php">
                          Mobile App Prototyping
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/application-maintenance-and-support-services.php">
                          Application Maintenance and Support
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/low-code-development.php">
                          Low Code Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/iot-development.php">
                          IoT Application Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/enterprise-mobility-solutions.php">
                          Enterprise Mobility Solution
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/xamarin-app-development.php">
                          Xamarin App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/business-intelligence-development.php">
                          Business Intelligence Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/native-mobile-app-development.php">
                          Native Mobile App Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-head-blk">
                  <h2>
                    <a href="https://devtechnosys.com/artificial-intelligence-development.php">
                      AI Development
                    </a>
                  </h2>
                </div>
                <div className="row mb-30">
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/generative-ai-development.php">
                          Generative AI Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/predictive-analytics-services.php">
                          Predictive Analytics Services
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/natural-language-processing-services.php">
                          Natural Language Processing Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/machine-learning-development.php">
                          Machine Learning Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/chatgpt-integration-services.php">
                          Chatgpt Integration Services
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/neural-network-development.php">
                          Neural Network Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/ai-consulting-services.php">
                          AI Consulting Services
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/deep-learning-development-company.php">
                          Deep Learning Development Company
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-head-blk">
                  <h2>
                    <a href="https://devtechnosys.com/software-product-development.php">
                      Software Product Development
                    </a>
                  </h2>
                </div>
                <div className="row mb-30">
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/custom-software-development.php">
                          Custom Software Development{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/saas-application-development.php">
                          SAAS Application Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/pos-software-development.php">
                          POS Development Solution
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/startup-solutions.php">
                          Startup Solutions
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/cti-software-development.php">
                          Cti Software Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/supermarket-billing-software-development.php">
                          Supermarket Billing Software Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/enterprise-product-development.php">
                          Enterprise Product Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/product-customisation-solutions.php">
                          Product Customization/builder/DIY/DYO Solution
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/crm-development-solution.php">
                          CRM Development Solution
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/medical-device-software-development.php">
                          Medical Device Software Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/software-testing-services.php">
                          Software Testing Services
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/servicenow-development-company.php">
                          Servicenow Development Company
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/cms-web-development.php">
                          CMS Development{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/chatbot-development.php">
                          Chatbot Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/payment-software-solutions.php">
                          Payment Software Solutions
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/financial-fraud-detection-software-development.php">
                          Financial Fraud Detection Software Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-head-blk">
                  <h2>
                    <a href="https://devtechnosys.com/it-consulting-services.php">
                      IT Consulting Services
                    </a>
                  </h2>
                </div>
                <div className="row mb-30">
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/healthcare-it-solutions.php">
                          Healthcare IT Solutions
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/logistics-it-solutions.php">
                          Logistics IT Solutions
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/banking-it-solutions.php">
                          Banking IT Solutions
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/web-development-consulting.php">
                          Web Development Consulting
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/education-it-solutions.php">
                          Education IT Solutions
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/construction-it-solutions.php">
                          Construction IT Solutions
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/government-it-solutions.php">
                          Government IT Solutions
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/real-estate-it-solutions.php">
                          Real Estate IT Solutions
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/manufacturing-it-solutions.php">
                          Manufacturing IT Solutions
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/mobile-app-development-consulting.php">
                          Mobile App Development Consulting
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-head-blk">
                  <h2>
                    <a href="https://devtechnosys.com/fullstack-development.php">
                      Full Stack Development
                    </a>
                  </h2>
                </div>
                <div className="row mb-30">
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/custom-web-development.php">
                          Custom Web Development{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/web-portal-development.php">
                          Web Portal Development{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/meanstack-development.php">
                          Meanstack Development{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/python-development.php">
                          Python Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/django-development-company.php">
                          Django Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/php-development.php">
                          PHP Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/laravel-development.php">
                          Laravel Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/cake-php-development.php">
                          CakePHP Development{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/codeigniter-development.php">
                          Codeigniter Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/vuejs-development-company.php">
                          Vuejs Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/node-js-development-company.php">
                          NodeJS Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/angular-js-development.php">
                          AngularJS Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/magento-development.php">
                          Magento Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/golang-development-services.php">
                          Golang Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/web-design-company.php">
                          Web Design Company
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-head-blk">
                  <h2>
                    <a href="https://devtechnosys.com/blockchain-development-company.php">
                      Blockchain Development
                    </a>
                  </h2>
                </div>
                <div className="row mb-30">
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/nft-marketplace-development.php">
                          Nft Marketplace Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/ethereum-development-company.php">
                          Ethereum Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/ico-development-company.php">
                          Ico Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/hyperledger-blockchain-development.php">
                          Hyperledger Blockchain Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/binance-smart-chain-development.php">
                          Binance Smart Chain Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/ai-token-development.php">
                          AI Token Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/metaverse-development-company.php">
                          Metaverse Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/cryptocurrency-development-company.php">
                          Cryptocurrency Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/web3-development.php">
                          Web3 Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/polygon-blockchain-development.php">
                          Polygon Blockchain Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/sto-development-company.php">
                          STO Development Company
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/cardano-blockchain-development.php">
                          Cardano Blockchain Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/stellar-blockchain-development.php">
                          Stellar Blockchain Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/solana-blockchain-development.php">
                          Solana Blockchain Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/algorand-blockchain-development.php">
                          Algorand Blockchain Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/otc-crypto-exchange-development.php">
                          OTC Crypto Exchange Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-head-blk">
                  <h2>
                    <a href="https://devtechnosys.com/servicenow-development-company.php">
                      Servicenow Development Company
                    </a>
                  </h2>
                </div>
                <div className="row mb-30">
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/servicenow-consulting-services.php">
                          Servicenow Consulting Services
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/servicenow-support-services.php">
                          Servicenow Support Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/servicenow-implementation-services.php">
                          Servicenow Implementation Services
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/servicenow-managed-services.php">
                          Servicenow Managed Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/servicenow-migration-services.php">
                          Servicenow Migration Services
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/hire-servicenow-developers.php">
                          Hire Servicenow Developers
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-head-blk">
                  <h2>
                    <a href="https://devtechnosys.com/microsoft-technology-solutions.php">
                      Microsoft Technologies
                    </a>
                  </h2>
                </div>
                <div className="row mb-30">
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/dot-net-development.php">
                          .Net Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/c-sharp-development-company.php">
                          C# Development Company
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/asp-net-mvc-development.php">
                          Asp Net Mvc Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-head-blk">
                  <h2>
                    <a href="https://devtechnosys.com/digital-marketing-agency.php">
                      Digital Marketing Services
                    </a>
                  </h2>
                </div>
                <div className="row mb-30">
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/seo-services-company.php">
                          Seo Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/ppc-management-services.php">
                          PPC Management Services
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="industries"
              role="tabpanel"
              aria-labelledby="industries-tab"
            >
              <div className="menu-industries">
                <div className="menu-industries-inner">
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/industry.php">
                        Industry
                      </a>
                    </h2>
                  </div>
                  <div className="row mb-30">
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/real-estate-app-development.php">
                            Real Estate &amp; Property
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/education-app-development.php">
                            Education
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/industry-on-demand.php">
                            On-Demand
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/marketplace-development.php">
                            Service Marketplace
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/manufacturing-software-development.php">
                            Manufacturing Software
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/fintech-software-development.php">
                            Fintech Software Development
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/auction-app-development.php">
                            Auction App Development
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/supply-chain-management-software-development.php">
                            Supply Chain Management Software Development
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/asset-tracking-software-development.php">
                            Asset Tracking Software Development
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/healthcare-app-development.php">
                            Healthcare
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/industry-automotives-solutions.php">
                            Automotives
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/mobile-banking-app-development.php">
                            Banking, Finance &amp; Insurance
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/industry-game.php">
                            Gaming &amp; Leisure
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/cloud-computing-solutions.php">
                            Cloud Computing Solutions
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/entertainment-app-development.php">
                            Entertainment App Development
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hr-management-software-development.php">
                            HR Management Software Development
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/massage-app-development.php">
                            Massage App Development
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/rental-website-development.php">
                            Rental Website Development
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/event-management-app-development.php">
                            Event &amp; Tickets
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/travel-app-development.php">
                            Travel &amp; Tours
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/food-delivery-app-development.php">
                            Food &amp; Restaurant
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/ecommerce-development-company.php">
                            Ecommerce, Retail &amp; B2B
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/gps-tracking-software-development.php">
                            Gps Tracking Solutions
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/warehouse-management-software-development.php">
                            Warehouse Management Software Development
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/clothing-design-software-development.php">
                            Clothing Design Software Development
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/energy-management-software-development.php">
                            Energy Management Software Development
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="solutions"
              role="tabpanel"
              aria-labelledby="solutions-tab"
            >
              <div className="menu-trending">
                <div className="row">
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/industry-on-demand.php">
                          On Demand Solution
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/doctor-on-demand-app-development.php">
                          Doctor Appointment App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/on-demand-fitness-trainer-app-development.php">
                          Fitness App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/medicine-delivery-app-development.php">
                          Medicine Delivery App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/music-app-development.php">
                          Music Streaming App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/video-streaming-app-development.php">
                          Video Streaming App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/social-media-app-development.php">
                          Social Media App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/dating-app-development.php">
                          Dating App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/fleet-management-app-development.php">
                          Fleet Management App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/ewallet-app-development.php">
                          eWallet development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/messaging-app-development.php">
                          Messaging App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/news-app-development.php">
                          News App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/ev-charging-station-finder-app-development.php">
                          EV Charging Station Finder App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/trading-software-development.php">
                          Trading Software Development Company
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/video-editing-app-development.php">
                          Video Editing App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/party-planner-app-development.php">
                          Party Planner App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/cricket-score-app-development.php">
                          Live Cricket Score App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/influencer-marketing-app-development.php">
                          Influencer Marketing App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/fantasy-golf-app-development.php">
                          Fantasy Golf App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/baby-tracking-app-development.php">
                          Baby Tracking App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/business-app-development.php">
                          Business App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/podcast-app-development.php">
                          Podcast App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/call-recording-app-development.php">
                          Call Recording App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/legal-software-development.php">
                          Legal Software Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/fashion-ecommerce-website-development.php">
                          Fashion Ecommerce Website Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/car-service-app-development.php">
                          Car Service App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/food-donation-app-development.php">
                          Food Donation App Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/sports-betting-app-development.php">
                          Sports Betting App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/fantasy-app-development.php">
                          Fantasy App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/grocery-app-development.php">
                          Grocery App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/home-services-app-development.php">
                          Home Services App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/laundry-app-development.php">
                          Laundry App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/loyalty-app-development.php">
                          Loyalty App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/taxi-booking-app-development.php">
                          Taxi Booking App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/driver-app-development.php">
                          Driver App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/courier-delivery-app-development.php">
                          Courier Delivery App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/dog-walking-app-development.php">
                          Dog Walking App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/e-scooter-app-development-company.php">
                          E-scooter App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/utility-app-development-company.php">
                          Utility App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/fintech-software-development.php">
                          Fintech Software Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/hotel-booking-app-development.php">
                          Hotel Booking App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/astrology-app-development-company.php">
                          Astrology App Development Company
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/crowdfunding-app-development.php">
                          Crowdfunding App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/piano-trainer-booking-app-development.php">
                          Piano Trainer Booking App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/pest-control-app-development.php">
                          Pest Control App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/fantasy-hockey-app-development.php">
                          Fantasy Hockey App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/shopping-app-development.php">
                          Shopping App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/expense-management-app-development.php">
                          Expense Management App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/railway-tracking-app-development.php">
                          Railway Tracking App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/lifestyle-app-development.php">
                          Lifestyle App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/drive-thru-restaurant-pos-system-development.php">
                          Drive Thru Restaurant Pos System Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/webcomic-website-development-company.php">
                          Webcomic Website Development Company
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/art-design-app-development.php">
                          Art Design App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/childcare-management-software-development.php">
                          Childcare Management Software Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu-full-li">
                      <li>
                        <a href="https://devtechnosys.com/flower-app-development.php">
                          Flower App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/tutor-app-development.php">
                          Tutor App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/lawyer-app-development-solutions.php">
                          Lawyer App Development Solutions
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/car-wash-app-development.php">
                          Car Wash App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/car-rental-app-development.php">
                          Car Rental Software Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/classified-app-development.php">
                          Classified App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/franchise-management-software-development.php">
                          Franchise Management Software Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/job-portal-and-app-development.php">
                          Job Portal And App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/school-management-software-development.php">
                          School Management Software Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/fuel-delivery-app-development.php">
                          Fuel Delivery App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/salon-app-development.php">
                          Salon App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/agtech-solutions.php">
                          Agtech Solutions
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/yoga-app-development.php">
                          Yoga App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/aviation-software-development.php">
                          Aviation Software Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/matrimonial-app-development.php">
                          Matrimonial App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/photographer-booking-app-development.php">
                          Photographer Booking App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/online-bookkeeping-app-development.php">
                          Online Bookkeeping App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/packers-movers-app-development.php">
                          Packers Movers App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/food-truck-website-development.php">
                          Food Truck Website Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/fantasy-basketball-app-development.php">
                          Fantasy Basketball App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/kids-learning-app-development.php">
                          Kids Learning App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/fantasy-football-app-development.php">
                          Fantasy Football App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/invoice-software-development.php">
                          Invoice Software Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/cloud-kitchen-management-software-development.php">
                          Cloud Kitchen Management Software Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/startup-app-development.php">
                          Startup App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://devtechnosys.com/tax-calculator-app-development.php">
                          Tax Calculator App Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="hire-developers"
              role="tabpanel"
              aria-labelledby="hire-developers-tab"
            >
              <div className="menu-hire">
                <div className="menu-hire-inner">
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/hire-developers.php">
                        Hire Developers
                      </a>
                    </h2>
                  </div>
                  <div className="row mb-30">
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-iphone-app-developers.php">
                            Hire iPhone App Developer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-android-app-developer.php">
                            Hire Android App Developer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-phone-gap-developers.php">
                            Hire Phone Gap Developer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-ionic-developers.php">
                            Hire Ionic Developer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-blockchain-developers.php">
                            Hire Blockchain Developers
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-offshore-developers.php">
                            Hire Offshore Developers
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-saas-developers.php">
                            Hire Saas Developers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-cakephp-developers.php">
                            Hire CakePHP Developer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-hybrid-developers.php">
                            Hire Hybrid Developer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-django-developers.php">
                            Hire Django Developer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-software-developers.php">
                            Hire Software Developer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-xamarin-developers.php">
                            Hire Xamarin Developer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-indian-programmers.php">
                            Hire Indian Programmers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-web-designers.php">
                            Hire Web Designer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-graphic-designers.php">
                            Hire Graphic Designer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-flutter-developers.php">
                            Hire Flutter Developer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-mobile-app-developers.php">
                            Hire Mobile App Developer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-opencv-developers.php">
                            Hire Opencv Developers
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-servicenow-developers.php">
                            Hire Servicenow Developers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/hire-front-end-developers.php">
                        Hire Front-End Developers
                      </a>
                    </h2>
                  </div>
                  <div className="row mb-30">
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-angularjs-developers.php">
                            Hire Angular JS Developer
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-react-native-developer.php">
                            Hire React Native Developer
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/it-staff-augmentation.php">
                            Hire Staffing Solutions{" "}
                            <sup className="newTag">
                              <img src="images/new.gif" alt="New" />{" "}
                            </sup>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/hire-backend-developers.php">
                        Hire Backend Developers
                      </a>
                    </h2>
                  </div>
                  <div className="row mb-30">
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-node-developer.php">
                            Hire Node JS Developer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-laravel-developers.php">
                            Hire Laravel Developer
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-golang-developers.php">
                            Hire Golang Developer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-python-developers.php">
                            Hire python developers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-php-developers.php">
                            Hire PHP Developer
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/hire-web-developers.php">
                        Hire Web Developer
                      </a>
                    </h2>
                  </div>
                  <div className="row mb-30">
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-codeigniter-developers.php">
                            Hire Codeingniter Developer
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-mern-stack-developer.php">
                            Hire Mern Stack Developers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/hire-open-source-developers.php">
                        Hire Open Source Developers
                      </a>
                    </h2>
                  </div>
                  <div className="row mb-30">
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-magento-developer.php">
                            Hire Magento Developer
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-wordpress-developers.php">
                            Hire WordPress Developer
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/hire-developers-in-usa.php">
                        Hire Devlopers in USA
                      </a>
                    </h2>
                  </div>
                  <div className="row mb-30">
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-california.php">
                            Hire Developers In California
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-chicago.php">
                            Hire Developers In Chicago
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-new-york.php">
                            Hire Developers In New York
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-los-angeles.php">
                            Hire Developers In Los Angeles
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-san-francisco.php">
                            Hire Developers In San Francisco
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/hire-developers-in-uk.php">
                        Hire Devlopers in UK
                      </a>
                    </h2>
                  </div>
                  <div className="row mb-30">
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-london.php">
                            Hire Developers In London
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-liverpool.php">
                            Hire Developers In Liverpool
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-manchester.php">
                            Hire Developers In Manchester
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/hire-microsoft-developers.php">
                        Hire Microsoft Devlopers
                      </a>
                    </h2>
                  </div>
                  <div className="row mb-30">
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-c-sharp-developers.php">
                            Hire C Sharp Developers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-asp-dot-net-developers.php">
                            Hire Asp Dot Net Developers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-dot-net-developers.php">
                            Hire Dot Net Developers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/hire-developers-in-australia.php">
                        Hire Developers In Australia
                      </a>
                    </h2>
                  </div>
                  <div className="row mb-30">
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-sydney.php">
                            Hire Developers In Sydney
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-brisbane.php">
                            Hire Developers In Brisbane
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-melbourne.php">
                            Hire Developers In Melbourne
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-perth.php">
                            Hire Developers In Perth
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/hire-developers-in-ireland.php">
                        Hire Developers In Ireland
                      </a>
                    </h2>
                  </div>
                  <div className="row mb-30">
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-dublin.php">
                            Hire Developers In Dublin
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-galway.php">
                            Hire Developers In Galway
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/hire-developers-in-new-zealand.php">
                        Hire Developers In New-Zealand
                      </a>
                    </h2>
                  </div>
                  <div className="row mb-30">
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-auckland.php">
                            Hire Developers In Auckland
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/hire-developers-in-christchurch.php">
                            Hire Developers In Christchurch
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="hire-resource"
              role="tabpanel"
              aria-labelledby="hire-resource-tab"
            >
              <div className="menu-hire foreth-line-menu">
                <div className="menu-hire-inner">
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/videos.php">Video</a>
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/videos.php?tag=testimonial">
                            Testimonial Video
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/videos.php?tag=white-board">
                            WhiteBoard Animated
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/videos.php?tag=company-profile">
                            Company Profile
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/videos.php?tag=informative">
                            Informative
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/insights/">
                        Maintenance Blog
                      </a>
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/insights/maintenance-cost-of-mobile-app/">
                            Application Maintenance
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-maintain-a-website/">
                            Website Maintenance
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/software-maintenance-costs/">
                            Software Maintenance
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/app-maintenance-services-for-travel-industry/">
                            Travel App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/online-marketplace-app-maintenance/">
                            Marketplace App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/real-estate-app-maintenance-services/">
                            Real Estate App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/food-delivery-app-maintenance-services/">
                            Food Delivery App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/e-wallet-app-maintenance-services/">
                            E Wallet App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/education-app-maintenance-services/">
                            Education App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/healthcare-app-maintenance-services/">
                            Healthcare App
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a>Cost &amp; Features</a>
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/insights/time-cost-to-develop-mobile-app/">
                            Mobile App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/website-development-cost/">
                            Website
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-hire-a-software-developer/">
                            Software Developer
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-hire-hybrid-app-developers/">
                            Hybrid App Developers
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-hire-android-app-developer/">
                            Android App Developers
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/things-to-consider-while-hiring-a-web-developer/">
                            Website Developers
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-hire-angularjs-developers/">
                            Angularjs Developers
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-hire-a-node-js-developer/">
                            Nodejs Developers
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-of-developing-a-progressive-web-application/">
                            PWA Application
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-develop-a-python-application/">
                            Python Application
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-build-a-react-native-app/">
                            React Native App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/saas-software-development-cost/">
                            SaaS App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-make-an-e-commerce-website/">
                            E-commerce Website
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/what-is-the-average-cost-of-developing-a-custom-cms/">
                            CMS Software
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-and-features-to-develop-crm-software/">
                            CRM Software
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-build-an-ewallet-app/">
                            Ewallet App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/develop-a-chatbot-from-scratch/">
                            Chatbot Development
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/web-portal-development-cost/">
                            Portal Development
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/develop-a-healthcare-app/">
                            Healthcare Application
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-create-e-scooter-sharing-app/">
                            E-Scooter Sharing App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/create-a-social-media-app/">
                            Social Media App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/grocery-delivery-app-development-cost/">
                            Grocery Delivery App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-build-an-online-marketplace-website/">
                            Marketplace App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/educational-apps-for-preschoolers-and-toddlers/">
                            Education App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/laundry-app-development-cost/">
                            Laundry App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-build-a-music-streaming-app/">
                            Music App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-and-features-to-develop-tutor-app-development/">
                            Tutor App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/build-a-video-conferencing-app/">
                            Video Conference App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/car-wash-app-development-cost/">
                            Car Wash App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/fitness-tracking-app-cost-and-features/">
                            Fitness Tracking App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/driver-app-development-cost/">
                            Driver App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-create-a-streaming-service-mobile-app/">
                            OTT App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-and-features-to-develop-an-app-like-miumeet/">
                            App Like Miumeet
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-develop-dating-app-like-tinder/">
                            App Like Tinder
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-develop-an-app-like-tiktok/">
                            App Like Tik Tok
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/develop-an-app-like-careem/">
                            App Like Careem
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-develop-fantasy-mobile-app-like-dream11/">
                            App Like Dream11
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-build-a-food-delivery-app/">
                            App Like Uber Eats
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/voice-chat-app-like-clubhouse/">
                            App Like Clubhouse
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-develop-an-app-like-corner-shop/">
                            App Like DoorStep
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/develop-a-classified-app-like-craigslist/">
                            App Like Craigslist
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-build-a-medicine-delivery-app-like-1mg/">
                            App Like 1mg
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/build-an-app-like-instagram/">
                            App Like Instagram
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/how-much-does-it-cost-to-develop-a-job-portal-app-like-dice/">
                            App Like Dice
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/how-much-does-it-cost-to-build-an-app-like-starbucks/">
                            App Like Starbucks
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-build-truck-rental-app-like-bungii/">
                            App Like Bungii
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/cost-to-develop-app-like-freeletics/">
                            App Like Freeletics
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/resources.php?tag=infographics">
                        Infograph
                      </a>
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/insights/8-tips-to-run-an-flower-delivery-business/">
                            Flower Delivery{" "}
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/doctor-appointment-app-like-zocdoc/">
                            Doctor App Like ZocDoc
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/doctor-on-demand-app-work/">
                            Doctor On Demand App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/create-a-marketplace-like-airbnb/">
                            Marketplace Like AirBnB
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/benefits-of-mobile-apps-in-education-industry/">
                            Benefit of Education Industry
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/starting-a-new-e-commerce-portal/">
                            Starting E-commerce Portal
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/benefits-of-on-demand-taxi-booking-app/">
                            Benefit of Taxi Booking App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/on-demand-service-apps/">
                            On Demand Service App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/make-a-taxi-booking-app/">
                            Make a Taxi App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/service-marketplace-industry/">
                            Service Marketplace
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/insights/create-a-video-streaming-website/">
                            Video Streaming Website
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/case-study.php">
                        Case Study
                      </a>
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/case-study/healthcare-application-allevia.php">
                            Allevia- Healthcare
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/case-study/music-application-giggle.php">
                            GiggleMusic- Music App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/case-study/classified-application-yallacash.php">
                            YallCash- Classified App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/case-study/ecommerce-app-shoppers-supermarket.php">
                            Shoppers Supermarket- Grocery App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/case-study/education-application-birlingo.php">
                            Birlingo- Education App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/case-study/healthcare-app-symphony-of-the-cells.php">
                            Symphony of The Cells- Ecommerce App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/case-study/home-service-app-ogaworkman.php">
                            Ogaworkman- Home Service App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/case-study/on-demand-news-aggregator.php">
                            News Aggregator- On - Demand App
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/case-study/parking-booking-app-multipark-valet.php">
                            Multipark Valet- Hospitality
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/case-study/pharmacy-app-pharma-go.php">
                            Pharma Go- Pharmacy
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/case-study/restaurant-discount-application-come-save.php">
                            Come &amp; Save- Restaurant
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/case-study/tours-and-travel-ugrovel.php">
                            Ugrovel- Tour &amp; Travel
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a>Others</a>
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/press-release.php">
                            Press Release
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/resources.php?tag=whitepapers">
                            White Paper
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/resources.php?tag=technology-blogs">
                            Technology Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-head-blk">
                    <h2>
                      <a href="https://devtechnosys.com/top-platforms.php">
                        Top Platforms
                      </a>
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="menu-full-li">
                        <li>
                          <a href="https://devtechnosys.com/top-platforms/best-calorie-counting-apps.php">
                            Best Calorie Counting Apps
                          </a>
                        </li>
                        <li>
                          <a href="https://devtechnosys.com/top-platforms/top-photosharing-apps.php">
                            Top Photosharing Apps
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last-menu">
        <ul className="last-menu-in">
          <li>
            <img alt="YAI Software Technologies" src="images/menu1.svg" /> 14+ YEAR'S
          </li>
          <li>
            <img alt="YAI Software Technologies" src="images/menu2.svg" /> 150+ EMPLOYEES
          </li>
          <li>
            <img alt="YAI Software Technologies" src="images/menu3.svg" /> 1000+ PROJECTS
          </li>
          <li>
            <img alt="YAI Software Technologies" src="images/menu4.svg" /> 700+ CLIENTS{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
