import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import img1 from '../assets/images/hero-img1-women.jpg'
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-tag">
              Transforming Ideas into Interactive Business Experiences!
            </div>
            <h1 className="hero-title">
              Web & <br />
              Mobile App <br />
              Development <br />
              Company
            </h1>
            <p className="hero-description">
              Hire dedicated developers to develop revenue-driven mobile apps and websites
            </p>
            <Link
              to="/send-inquiry"
              className="rounded-lg bg-[#1c6aa3] px-3 text-lg py-2 justify-center items-center text-white lazyload flex gap-3"
              
            >
              <span>LET'S CONNECT</span>
            </Link>
            {/* <button className="hero-cta">LET'S CONNECT</button> */}
          </div>
          <div className="hero-images p-5">
            <div className="hero-award">
              <FaTrophy />
              Award Winning Company
            </div>
            <div className="hero-grid p-4">
              <div className="hero-image-wrapper">
                <img src={img1} alt="Person with laptop" className="hero-image" />
              </div>
              <div className="hero-image-wrapper">
                <img src="/placeholder.jpg" alt="Person with phone" className="hero-image" />
              </div>
              <div className="hero-image-wrapper">
                <img src="/placeholder.jpg" alt="Person with tablet" className="hero-image" />
              </div>
              <div className="hero-image-wrapper">
                <img src="/placeholder.jpg" alt="Person with VR headset" className="hero-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="client-logos">
          <img src="/placeholder-logo.png" alt="Nike" className="client-logo" />
          <img src="/placeholder-logo.png" alt="Hondy" className="client-logo" />
          <img src="/placeholder-logo.png" alt="Whirlpool" className="client-logo" />
          <img src="/placeholder-logo.png" alt="RAK Ceramics" className="client-logo" />
          <img src="/placeholder-logo.png" alt="Pfizer" className="client-logo" />
          <img src="/placeholder-logo.png" alt="Other Brand" className="client-logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

