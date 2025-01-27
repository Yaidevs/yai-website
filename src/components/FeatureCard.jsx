import React from "react";

function FeatureCard({ Icon, title, description, iconColor }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div
        className={`w-16 h-16 rounded-full ${iconColor} flex items-center justify-center mb-4`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-bold text-[#1a237e] mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default FeatureCard;
