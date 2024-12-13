import React from "react";
import { FaWhatsapp, FaComment, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/150x50.png?text=DEV+TECHNOSYS"
            alt="Company Logo"
            className="h-10"
          />
          <div className="text-xs font-semibold leading-tight">
            <span className="block text-gray-800">CMMI</span>
            <span className="block text-red-600">Level 3</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-6 text-gray-800 font-medium">
          <a href="#about" className="hover:text-gray-900">
            About
          </a>
          <a href="#pricing" className="hover:text-gray-900">
            Pricing
          </a>
          <a href="#resources" className="hover:text-gray-900">
            Resources
          </a>
          <a href="#portfolio" className="hover:text-gray-900">
            Portfolio
          </a>
          <a href="#demo-video" className="hover:text-gray-900">
            Demo Video
          </a>
          <a href="#video-consulting" className="hover:text-gray-900">
            Video Consulting
          </a>
        </nav>

        {/* Right Icons and CTA */}
        <div className="flex items-center space-x-4">
          {/* Chat Icons */}
          <a
            href="#chat"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white"
          >
            <FaComment size={16} />
          </a>
          <a
            href="#whatsapp"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white"
          >
            <FaWhatsapp size={16} />
          </a>
          {/* Hamburger Menu */}
          <button className="lg:hidden w-8 h-8 flex items-center justify-center rounded-full bg-gray-300">
            <FaBars size={18} className="text-gray-700" />
          </button>
          {/* Get a Quote Button */}
          <a
            href="#quote"
            className="hidden lg:inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold shadow-md"
          >
            GET A QUOTE →
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
