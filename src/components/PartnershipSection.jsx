"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PartnershipSection() {
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);


  // Auto-scroll testimonials
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentTestimonial((prev) =>
  //       prev === testimonials.length - 1 ? 0 : prev + 1
  //     );
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.description
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Prepare the data for submission
    const submissionData = {
      ...formData,
    };

    try {
      const response = await axios.post(
        "https://yai-backend.onrender.com/api/v1/quotes/",
        submissionData
      );
      console.log("Response from server:", response.data);

      // Clear the form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        description: "",
      });

      toast.success(
        "Successfully submitted! We will contact you soon by your email or phone!!"
      );
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Failed to submit your inquiry. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col items-center text-center">
      <ToastContainer />
      <div className="max-w-xl space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Let's Partner For Your Next Amazing Project
        </h2>
        <p className="text-gray-600">
          Allow us to be your technical aid in another of your successful
          business venture. Mail, Call or better meet us over a cup of
          coffee and share with us your development plan.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mt-4 max-w-lg w-full text-center"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />

        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />

        <textarea
          name="description"
          placeholder="What's your project all about?"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#1c6aa3] text-white py-3 px-6 rounded-md transition-colors"
        >
          {loading ? "sending ...":"SEND YOUR INQUIRY"}
        </button>
      </form>
    </div>
  );
}
