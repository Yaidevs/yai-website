import React, { useState } from "react";
import "./price.css";
import "./cta.css";
import "../assets/css/common.css";
import "react-toastify/dist/ReactToastify.css";
import icon1 from "../assets/images/project-icon-1.png";
import icon2 from "../assets/images/client-icon.png";
import img1 from "../assets/images/portrait-happy.png";
import img2 from "../assets/images/man-with-dolar.png";
import shape2 from "../assets/images/shape-2.png";
import shape1 from "../assets/images/shape-1.png";
import WarningModal from "./WarningModal";
import LookingFor from "./LookingFor";
import CostEstimation from "./CostEstimation";
import LookingFor2 from "./LookingFor2";
import Testinomials from "./Testimonials";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Pricing() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const [formData, setFormData] = useState({
    tech_stack: [],
    app_stack: [],
    ui_stack: [],
    screen_stack: [],
    urgency_stack: [],
  });

  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    description: "",
  });

  const validateStep = (step) => {
    switch (step) {
      case 1:
        if (formData.tech_stack.length === 0) {
          setWarningMessage(
            "Please select at-least one technology stack for further steps."
          );
          setShowWarning(true);
          return false;
        }
        break;
      case 2:
        if (formData.app_stack.length === 0) {
          setWarningMessage(
            "Please select at-least one app type for further steps."
          );
          setShowWarning(true);
          return false;
        }
        break;
      case 3:
        if (formData.ui_stack.length === 0) {
          setWarningMessage(
            "Please select at-least one UI type for further steps."
          );
          setShowWarning(true);
          return false;
        }
        break;
      case 4:
        if (formData.screen_stack.length === 0) {
          setWarningMessage(
            "Please select number of screens for further steps."
          );
          setShowWarning(true);
          return false;
        }
        break;
      case 5:
        if (formData.urgency_stack.length === 0) {
          setWarningMessage(
            "Please select your development urgency for further steps."
          );
          setShowWarning(true);
          return false;
        }
        break;
    }
    return true;
  };

  const handleInputChange = (e, category) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [category]: checked
        ? [...prevState[category], value]
        : prevState[category].filter((item) => item !== value),
    }));
  };

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      if (validateStep(currentStep)) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleFinish = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(6);
    }
  };

  const handleStepClick = (step) => {
    // Can only navigate to completed steps or next step
    if (
      step < currentStep ||
      (step === currentStep + 1 && validateStep(currentStep))
    ) {
      setCurrentStep(step);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate contact form
    if (
      !contactForm.fullName ||
      !contactForm.email ||
      !contactForm.phone ||
      !contactForm.description
    ) {
      setWarningMessage("Please fill in all required fields.");
      setShowWarning(true);
      return;
    }

    const submissionData = {
      data: {
        type: formData.tech_stack.join(", "),
        app_type: formData.app_stack.join(", "),
        ui_type: formData.ui_stack.join(", "),
        screen_count: formData.screen_stack.join(", "),
        urgency: formData.urgency_stack.join(", "),
        contact: contactForm,
      },
    };

    try {
      await axios.post(
        "https://yai-backend.onrender.com/api/v1/quotes/manage/client-request/",
        submissionData
      );
      setContactForm({
        fullName: "",
        email: "",
        phone: "",
        description: "",
      });
      setCurrentStep(1);
      toast.success(
        "Successfully submitted! We will send the calculated price to your email. Check yor Email!"
      );
    } catch (error) {
      console.error("Error submitting data:", error);
      setWarningMessage("Failed to submit your inquiry. Please try again.");
      setShowWarning(true);
    }
  };

  const renderProgressSteps = () => {
    return (
      <ul className="nav nav-tabs" role="tablist">
        {[1, 2, 3, 4, 5, 6].map((step) => (
          <li
            key={step}
            role="presentation"
            className={
              currentStep === step
                ? "active"
                : step < currentStep
                ? "completed"
                : "disabled"
            }
            onClick={() => handleStepClick(step)}
            style={{
              cursor: step <= currentStep + 1 ? "pointer" : "not-allowed",
            }}
          >
            <a
              href={`#step${step}`}
              data-toggle="tab"
              aria-controls={`step${step}`}
              role="tab"
              aria-expanded={currentStep === step}
              onClick={(e) => e.preventDefault()}
            >
              <span className="round-tab">{step}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="inner-warper">
      <WarningModal
        isOpen={showWarning}
        onClose={() => setShowWarning(false)}
        message={warningMessage}
      />

      <section className="banner-top">
        <span className="shape-1">
          <img className="lazyload" src={shape1} alt="YAI Software Technologies" />
        </span>
        <span className="shape-2">
          <img className="lazyload" src={shape2} alt="YAI Software Technologies" />
        </span>
        <div className="container">
          <div className="row">
            <div className="col-md-6 banner-top-left">
              <h1>Get Accurate Cost Estimation for Your Project!</h1>
              <p>
                Do you want to know how much it cost to develop an app or
                business website? Our calculator will help you estimate the cost
                in just a few minutes. Contact our top mobile app and web
                development company to avail reasonable development assistance.
              </p>
            </div>
            <div className="col-md-6 banner-top-right">
              <div className="bg-rec">
                <div className="banner-info">
                  <figure>
                    <img className="lazyload" src={icon1} alt="YAI Software Technologies" />
                  </figure>
                  <figcaption>
                    <h3>10+ Projects</h3>
                  </figcaption>
                </div>
                <figure>
                  <img className="lazyload" src={img2} alt="YAI Software Technologies" />
                </figure>
                <div className="banner-info client-info">
                  <figure>
                    <img className="lazyload" src={icon2} alt="YAI Software Technologies" />
                  </figure>
                  <figcaption>
                    <h3>8+ Clients</h3>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="signup-step-container section-padding">
        <ToastContainer />
        <div className="container">
          <div className="main-heading-box main-heading-box-inner">
            <h2>App and Web Cost Calculator</h2>
            <p>
              Get a cost estimation for your mobile app or website by answering
              the following questions
            </p>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="wizard">
                <div className="wizard-inner">{renderProgressSteps()}</div>
                <div className="tab-content" id="main_form">
                  <div
                    className={`tab-pane ${currentStep === 1 ? "active" : ""}`}
                    role="tabpanel"
                    id="step1"
                  >
                    <div className="questions-box">
                      <div className="questions-box-head text-center">
                        <h3>What Type of App You Want to Develop?</h3>
                        <span>(Select Atleast One Option)</span>
                      </div>
                      <ul className="questions-list">
                        {[
                          {
                            value: "Android",
                            icon: "s1-icon1.svg",
                            label: "Android",
                          },
                          { value: "IOS", icon: "s1-icon2.svg", label: "iOS" },
                          {
                            value: "Web App",
                            icon: "s1-icon3.svg",
                            label: "Web App",
                          },
                          {
                            value: "Hybrid (Android+IOS)",
                            icon: "s1-icon4.svg",
                            label: "Hybrid (Android+iOS)",
                          },
                        ].map((item, index) => (
                          <li key={index}>
                            <label className="radio-coustom-design mr-5">
                              <input
                                type="checkbox"
                                name="tech_stack[]"
                                value={item.value}
                                checked={formData.tech_stack.includes(
                                  item.value
                                )}
                                onChange={(e) =>
                                  handleInputChange(e, "tech_stack")
                                }
                              />
                              <span className="checkmark" />
                              <div className="option-content">
                                <figure>
                                  <img
                                    className="lazyload"
                                    data-src={`https://devtechnosys.com/images/2023/calculate-it-project-cost/${item.icon}`}
                                    alt="Hire Dedicated Team"
                                  />
                                </figure>
                                <h5>{item.label}</h5>
                              </div>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ul className="list-inline">
                      <li>
                        <button
                          type="button"
                          className="btn btn-orange next-step"
                          onClick={handleNext}
                        >
                          Continue to next step
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane ${currentStep === 2 ? "active" : ""}`}
                    role="tabpanel"
                    id="step2"
                  >
                    <div className="questions-box">
                      <div className="questions-box-head text-center">
                        <h3>What is Your App About?</h3>
                        <span>(Select Atleast One Option)</span>
                      </div>
                      <ul className="questions-list">
                        {[
                          { value: "Dating App", icon: "s2-icon1.svg" },
                          { value: "Video Streaming", icon: "s2-icon2.svg" },
                          { value: "Taxi App", icon: "s2-icon3.svg" },
                          { value: "Tours & Travel App", icon: "s2-icon4.svg" },
                          { value: "Fitness App", icon: "s2-icon5.svg" },
                          { value: "E-commerce App", icon: "s2-icon6.svg" },
                          { value: "POS App", icon: "s2-icon7.svg" },
                          { value: "E-learning App", icon: "s2-icon8.svg" },
                          { value: "Others", icon: "s2-icon9.svg" },
                        ].map((item, index) => (
                          <li key={index}>
                            <label className="radio-coustom-design mr-5">
                              <input
                                type="checkbox"
                                name="app_stack[]"
                                value={item.value}
                                checked={formData.app_stack.includes(
                                  item.value
                                )}
                                onChange={(e) =>
                                  handleInputChange(e, "app_stack")
                                }
                              />
                              <span className="checkmark" />
                              <div className="option-content">
                                <figure>
                                  <img
                                    className="lazyload"
                                    data-src={`https://devtechnosys.com/images/2023/calculate-it-project-cost/${item.icon}`}
                                    alt="Hire Dedicated Team"
                                  />
                                </figure>
                                <h5>{item.value}</h5>
                              </div>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ul className="list-inline pull-right">
                      <li>
                        <button
                          type="button"
                          className="btn btn btn-purple prev-step"
                          onClick={handlePrev}
                        >
                          Back
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="btn btn-pink next-step skip-btn margin-left-15"
                          onClick={handleSkip}
                        >
                          Skip
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="btn btn-orange next-step margin-left-15"
                          onClick={handleNext}
                        >
                          Continue
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane ${currentStep === 3 ? "active" : ""}`}
                    role="tabpanel"
                    id="step3"
                  >
                    <div className="questions-box">
                      <div className="questions-box-head text-center">
                        <h3>What Type of UI Do You Prefer?</h3>
                        <span>(Select Atleast One Option)</span>
                      </div>
                      <ul className="questions-list">
                        {[
                          { value: "Basic UX/UI", icon: "s3-icon1.svg" },
                          { value: "Custom UI", icon: "s3-icon2.svg" },
                          { value: "Animated UI", icon: "s3-icon3.svg" },
                        ].map((item, index) => (
                          <li key={index}>
                            <label className="radio-coustom-design mr-5">
                              <input
                                type="checkbox"
                                name="ui_stack[]"
                                value={item.value}
                                checked={formData.ui_stack.includes(item.value)}
                                onChange={(e) =>
                                  handleInputChange(e, "ui_stack")
                                }
                              />
                              <span className="checkmark" />
                              <div className="option-content">
                                <figure>
                                  <img
                                    className="lazyload"
                                    data-src={`https://devtechnosys.com/images/2023/calculate-it-project-cost/${item.icon}`}
                                    alt="Hire Dedicated Team"
                                  />
                                </figure>
                                <h5>{item.value}</h5>
                              </div>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ul className="list-inline pull-right">
                      <li>
                        <button
                          type="button"
                          className="btn btn-purple prev-step"
                          onClick={handlePrev}
                        >
                          Back
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="btn btn-pink next-step skip-btn margin-left-15"
                          onClick={handleSkip}
                        >
                          Skip
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="btn btn-orange next-step margin-left-15"
                          onClick={handleNext}
                        >
                          Continue
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane ${currentStep === 4 ? "active" : ""}`}
                    role="tabpanel"
                    id="step4"
                  >
                    <div className="questions-box">
                      <div className="questions-box-head text-center">
                        <h3>
                          How Many Screens Your App or Website Will Contain?
                        </h3>
                        <span>(Select Atleast One Option)</span>
                      </div>
                      <ul className="questions-list">
                        {[
                          { value: "5 Screens", icon: "s4-icon1.svg" },
                          { value: "5-10 Screens", icon: "s4-icon2.svg" },
                          { value: "10-15 Screens", icon: "s4-icon3.svg" },
                          { value: "Above 15 Screens", icon: "s4-icon4.svg" },
                        ].map((item, index) => (
                          <li key={index}>
                            <label className="radio-coustom-design mr-5">
                              <input
                                type="checkbox"
                                name="screen_stack[]"
                                value={item.value}
                                checked={formData.screen_stack.includes(
                                  item.value
                                )}
                                onChange={(e) =>
                                  handleInputChange(e, "screen_stack")
                                }
                              />
                              <span className="checkmark" />
                              <div className="option-content">
                                <figure>
                                  <img
                                    className="lazyload"
                                    data-src={`https://devtechnosys.com/images/2023/calculate-it-project-cost/${item.icon}`}
                                    alt="Hire Dedicated Team"
                                  />
                                </figure>
                                <h5>{item.value}</h5>
                              </div>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ul className="list-inline pull-right">
                      <li>
                        <button
                          type="button"
                          className="btn btn-purple prev-step"
                          onClick={handlePrev}
                        >
                          Back
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="btn btn-pink next-step skip-btn margin-left-15"
                          onClick={handleSkip}
                        >
                          Skip
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="btn btn-orange next-step margin-left-15"
                          onClick={handleNext}
                        >
                          Continue
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane ${currentStep === 5 ? "active" : ""}`}
                    role="tabpanel"
                    id="step5"
                  >
                    <div className="questions-box">
                      <div className="questions-box-head text-center">
                        <h3>What is Your App/Web Development Urgency?</h3>
                        <span>(Select Atleast One Option)</span>
                      </div>
                      <ul className="questions-list">
                        {[
                          { value: "Low", icon: "s5-icon1.svg" },
                          { value: "Medium", icon: "s5-icon2.svg" },
                          { value: "High", icon: "s5-icon3.svg" },
                        ].map((item, index) => (
                          <li key={index}>
                            <label className="radio-coustom-design mr-5">
                              <input
                                type="checkbox"
                                name="urgency_stack[]"
                                value={item.value}
                                checked={formData.urgency_stack.includes(
                                  item.value
                                )}
                                onChange={(e) =>
                                  handleInputChange(e, "urgency_stack")
                                }
                              />
                              <span className="checkmark" />
                              <div className="option-content">
                                <figure>
                                  <img
                                    className="lazyload"
                                    data-src={`https://devtechnosys.com/images/2023/calculate-it-project-cost/${item.icon}`}
                                    alt="Hire Dedicated Team"
                                  />
                                </figure>
                                <h5>{item.value}</h5>
                              </div>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ul className="list-inline pull-right">
                      <li>
                        <button
                          type="button"
                          className="btn btn-purple prev-step"
                          onClick={handlePrev}
                        >
                          Back
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="btn btn-green next-step margin-left-15"
                          id="finish"
                          onClick={handleFinish}
                        >
                          Finish
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane ${currentStep === 6 ? "active" : ""}`}
                    role="tabpanel"
                    id="step6"
                  >
                    <div className="form-box">
                      <div className="questions-box-head text-center">
                        <h3>Almost Done!</h3>
                        <span>
                          Let Us Know Where We Should Send Your Final Estimation
                        </span>
                      </div>
                      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                        <div className="form-group">
                          <input
                            type="text"
                            name="fullName"
                            className="form-control"
                            placeholder="Full Name"
                            value={contactForm.fullName}
                            onChange={handleContactFormChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            value={contactForm.email}
                            onChange={handleContactFormChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Phone Number"
                            value={contactForm.phone}
                            onChange={handleContactFormChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            name="description"
                            className="form-control"
                            placeholder="What's your project all about?"
                            value={contactForm.description}
                            onChange={handleContactFormChange}
                            rows={4}
                            required
                          />
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn text-white bg-[#1c6aa3]"
                          >
                            SEND YOUR INQUIRY
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LookingFor />
      <CostEstimation />
      <LookingFor2 />
      <Testinomials />
    </div>
  );
}

export default Pricing;
