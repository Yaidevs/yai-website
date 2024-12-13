import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-white to-pink-100">
      <div className="container mx-auto px-4 lg:px-8 py-16 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h5 className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Transforming Ideas into Interactive Business Experiences!
          </h5>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
            Web & Mobile App Development Company
          </h1>
          <p className="text-gray-600 text-lg">
            Hire dedicated developers to develop revenue-driven mobile apps and
            websites.
          </p>
          <div>
            <a
              href="#connect"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-full shadow-lg hover:bg-orange-600"
            >
              LET'S CONNECT →
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end relative">
          {/* Award Badge */}
          <div className="absolute -top-8 left-12 lg:left-0 flex items-center space-x-2 bg-yellow-300 text-gray-800 rounded-full px-4 py-2 shadow-lg">
            <img
              src="https://via.placeholder.com/40"
              alt="Award Icon"
              className="w-6 h-6"
            />
            <span className="text-sm font-medium">Award Winning Company</span>
          </div>
          {/* Overlapping Images */}
          <div className="flex space-x-4">
            <img
              src="https://via.placeholder.com/100x180"
              alt="Person 1"
              className="rounded-3xl shadow-lg transform translate-y-6"
            />
            <img
              src="https://via.placeholder.com/100x180"
              alt="Person 2"
              className="rounded-3xl shadow-lg"
            />
            <img
              src="https://via.placeholder.com/100x180"
              alt="Person 3"
              className="rounded-3xl shadow-lg transform translate-y-6"
            />
          </div>
        </div>
      </div>

      {/* Sale Badge */}
      <div className="absolute top-20 right-5 bg-red-600 text-white text-center rounded-xl py-2 px-4 shadow-lg">
        <p className="text-xs font-bold uppercase">Special Offers</p>
        <p className="text-sm font-medium">CHRISTMAS SALE</p>
        <p className="text-lg font-bold">Flat 10% OFF</p>
        <p className="text-xs">Get it Now</p>
      </div>
    </section>
  );
};

export default Hero;
