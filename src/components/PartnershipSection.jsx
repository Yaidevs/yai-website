"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const testimonials = [
  {
    id: 1,
    name: "Karl Kukner",
    text: "I am pleased with the quality DevTechnosys and its team has produced on my project and your Project Management capability. This team has excellent communication skills and quick response with fast turnaround time has really impressed me.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Outstanding service and professional team. They delivered our project ahead of schedule and exceeded our expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike Johnson",
    text: "Great experience working with the team. Their technical expertise and attention to detail is remarkable.",
    rating: 5,
  },
];

export default function PartnershipSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
    <div className="container mx-auto px-4 py-12 md:py-16">
      <ToastContainer />
      <div className="grid px-4 md:grid-cols-2 gap-8 items-start">
        {/* Left Column - Form */}
        <div className="space-y-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Partner For Your Next Amazing Project
            </h2>
            <p className="text-gray-600 mb-8">
              Allow us to be your technical aid in another of your successful
              business venture. Mail, Chat, Call or better meet us over a cup of
              coffee and share with us your development plan.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className="flex">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 border border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

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
              className="w-full bg-[#1c6aa3] text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors"
            >
              SEND YOUR INQUIRY
            </button>
          </form>
        </div>

        {/* Right Column - Testimonials & Awards */}
        {/* Right Column - Testimonials & Awards */}
        <div className="bg-[#fdfbf4] p-8 rounded-xl flex flex-col justify-between min-h-[320px]">
          {/* Testimonial */}
          <div className="space-y-4 min-h-[180px]">
            <div className="flex justify-between items-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentTestimonial].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="font-semibold mb-1">Client's</p>
                  <h3 className="text-xl font-bold">
                    {testimonials[currentTestimonial].name}
                  </h3>
                </motion.div>
              </AnimatePresence>
              <div className="flex gap-1">
                <h2 className="font-bold mr-2">Reviews</h2>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-orange-400 text-orange-400"
                  />
                ))}
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={testimonials[currentTestimonial].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-gray-600"
              >
                {testimonials[currentTestimonial].text}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Awards Section */}
          <div>
            <h3 className="font-bold mb-4">Awards and Recognition</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
              <img
                src="/path-to-logo1.png"
                alt="Award 1"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
              <img
                src="/path-to-logo2.png"
                alt="Award 2"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
              <img
                src="/path-to-logo3.png"
                alt="Award 3"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
              <img
                src="/path-to-logo4.png"
                alt="Award 4"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
              <img
                src="/path-to-logo5.png"
                alt="Award 5"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
              <img
                src="/path-to-logo6.png"
                alt="Award 6"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
