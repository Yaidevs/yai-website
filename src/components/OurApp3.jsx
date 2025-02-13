import React, { useState } from "react";
import Sheet from "./Sheet"; // Import the Sheet component
import betaleImage from "../assets/images/Betale home page - Afaan Oromo.png"
import betalePcImage from "../assets/images/betale_web.png"
function OurApp3() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const sheetData = {
    title: "ቤት Ale Details",
    description:
      "App designed to make finding your dream home or house effortless.",
  image: betaleImage,
       pcImage: betalePcImage,
  };

  return (
    <section className="blog-box ">
     <div className="blog-img-box flex gap-1">
        {/* Wrap both images in a flex container */}
        <div className=" flex gap-8 justify-center ml-4  w-full h-auto p-4">
          <div className="w-[290px]">
            <img
              className="   object-contain  "
              alt="Mobile App"
              src={sheetData.image}
            />
          </div>
          <div className="hidden md:flex">
            <img
              className="  lazyload h-8 "
              alt="Web App"
              src={sheetData.pcImage}
            />
          </div>
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
       isOpen={isSheetOpen}
       onClose={() => setSheetOpen(false)}
     />
      )}
    </section>
  );
}

export default OurApp3;