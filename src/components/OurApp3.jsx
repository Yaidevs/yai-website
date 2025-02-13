import React, { useState } from "react";
import Sheet from "./Sheet"; // Import the Sheet component
import betaleImage from "../assets/images/Betale home page - Afaan Oromo.png";
import betalePcImage from "../assets/images/betale_web.png";
function OurApp3() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const sheetData = {
    title: "ቤት Ale Details",
    description:
      "ቤትAle is an easy-to-use app that helps people find homes for rent or sale. It allows property owners to post their listings and connect with potential buyers or renters. Whether you're looking to rent or buy, BetAle makes it simple to find the right home and connect with the right people. It's a convenient way for both home seekers and owners to find what they need.",
    image: betaleImage,
    pcImage: betalePcImage,
    link:"https://betale.et/"

  };

  return (
    <section className="blog-box ">
         <div className="flex flex-nowrap justify-center bg-slate-400 rounded-xl items-center gap-8 p-4">
  <div className="w-full max-w-[290px]">
    <img
      className="w-full h-auto object-contain"
      alt="Mobile App"
      src={sheetData.image}
    />
  </div>
  <div className="hidden xl:flex w-full max-w-[400px]">
    <img
      className="lazyload h-auto max-h-[400px] object-contain"
      alt="Web App"
      src={sheetData.pcImage}
    />
  </div>
</div>
      <div className="blog-img-content ">
        <div className="title-head text-left">
          <h2 className="text-black text-3xl font-bold">ቤት Ale</h2>
          <p className="text-black text-lg mt-2">{sheetData.description}</p>
          <div className="btn-group-box">
            <button
              onClick={() => setSheetOpen(true)}
              className="common-btn mt-3"
            >
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Conditionally render the Sheet */}
      {isSheetOpen && (
        <Sheet
          title={sheetData.title}
          description={sheetData.description}
          image={sheetData.image}
          pcImage={sheetData.pcImage}
          link={sheetData.link}

          isOpen={isSheetOpen}
          onClose={() => setSheetOpen(false)}
        />
      )}
    </section>
  );
}

export default OurApp3;
