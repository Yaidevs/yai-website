import React, { useState } from "react";
import Sheet from "./Sheet";
import dawaaFinderImage from "../assets/images/dawafinder home page.png";
import dawaaFinderPcImage from "../assets/images/dawa-web.png";

function OurApp1() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const sheetData = {
    title: "DawaaFinder Details",
    description:
      "Dawafinder is a platform that enables patients to easily find medications by easily scanning prescriptions or typing the name of medications while fighting against fake drugs by using block chain technology.  As well it enables pharmacies to sell more and manage their pharmacies.",
    image: dawaaFinderImage,
    pcImage: dawaaFinderPcImage,
    link:"https://dawaafinder.com"
  };

  return (
    <section className="blog-box">
    
        {/* Wrap both images in a flex container */}
        <div className="flex flex-nowrap justify-center bg-orange-100 rounded-xl items-center gap-8 p-4">
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

     

      <div className="blog-img-content">
        <h2 className="text-black text-3xl font-bold">DawaaFinder</h2>
        <p className="text-black text-lg mt-2">{sheetData.description}</p>
        <button onClick={() => setSheetOpen(true)} className="common-btn mt-3">
          Discover More
        </button>
      </div>

      <Sheet
        title={sheetData.title}
        description={sheetData.description}
        image={sheetData.image}
        pcImage={sheetData.pcImage}
        link={sheetData.link}
        isOpen={isSheetOpen}
        onClose={() => setSheetOpen(false)}
      />
    </section>
  );
}

export default OurApp1;
