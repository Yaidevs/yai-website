import React, { useState } from "react";
import Sheet from "./Sheet";
import dawaaFinderImage from "../assets/images/dawafinder home page.png";
import dawaaFinderPcImage from "../assets/images/dawa-web.png";

function OurApp1() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const sheetData = {
    title: "DawaaFinder Details",
    description:
      "App that simplifies finding affordable medicines and ensures adherence through timely reminders. We also provide an ERP for health organizations to enhance efficiency and safety.",
    image: dawaaFinderImage,
    pcImage: dawaaFinderPcImage,
  };

  return (
    <section className="blog-box">
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

      <div className="blog-img-content">
        <h2 className="text-black text-3xl font-bold">DawaaFinder</h2>
        <p className="text-black text-lg mt-2">{sheetData.description}</p>
        <button
          onClick={() => setSheetOpen(true)}
          className="common-btn mt-3"
        >
          Discover More
        </button>
      </div>

      <Sheet
        title={sheetData.title}
        description={sheetData.description}
        image={sheetData.image}
        isOpen={isSheetOpen}
        onClose={() => setSheetOpen(false)}
      />
    </section>
  );
}

export default OurApp1;