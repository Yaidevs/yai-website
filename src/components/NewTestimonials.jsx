"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    image:
      "https://img.freepik.com/free-photo/medium-shot-smiley-man-with-photo-camera_23-2149415760.jpg?uid=R120137908&ga=GA1.1.552436040.1735197856&semt=ais_hybrid",
    text: "Have used DevTechnosys on multiple occasions and I will continue to do so as they provide fantastic support, service and high quality producers. I would recommend anyone wanting to get your ideas into reality to use this freelancer.",
  },
  {
    id: 2,
    name: "Jill Brown",
    image:
      "https://img.freepik.com/free-photo/african-american-woman-smiling-portrait_1303-12374.jpg?uid=R120137908&ga=GA1.1.552436040.1735197856&semt=ais_hybrid",
    text: "Have used DevTechnosys on multiple occasions and I will continue to do so as they provide fantastic support, service and high quality producers. I would recommend anyone wanting to get your ideas into reality to use this freelancer.",
  },

  // Add more testimonials as needed
];

export default function NewTestimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(1);

  const currentTestimonial = testimonials.find(
    (t) => t.id === selectedTestimonial
  );

  return (
    <div className="relative w-full px-4 py-16 overflow-hidden">
      {/* Decorative Elements */}
      <span className="shape-l">
        <img
          className="lazyload"
          alt="client"
          data-src="https://devtechnosys.com/images-2023/home/testimonial-shape-l.webp"
        />
      </span>
      <span className="shape-r">
        <img
          className="lazyload"
          alt="client"
          data-src="https://devtechnosys.com/images-2023/home/testimonial-shape-r.webp"
        />
      </span>
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-4">OUR TESTIMONIAL</p>
          <h2 className="text-4xl font-bold text-[#1a237e] mb-6">
            Our clients simply love our work
          </h2>
          <button className="inline-flex items-center px-6 py-2.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
            VIEW ALL
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {testimonials.map((testimonial) => (
            <button
              key={testimonial.id}
              onClick={() => setSelectedTestimonial(testimonial.id)}
              className={`relative transition-transform hover:scale-110 ${
                selectedTestimonial === testimonial.id
                  ? "border-red-400"
                  : ""
              }`}
            >
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={`${testimonial.name}'s testimonial`}
                className="w-16 h-16 rounded-full object-cover"
              />
            </button>
          ))}
        </div>

        {currentTestimonial && (
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-6xl text-orange-500 mb-4">"</div>
            <h3 className="text-2xl font-bold text-[#1a237e] mb-4">
              {currentTestimonial.name}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {currentTestimonial.text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
