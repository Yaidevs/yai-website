import React, { useState } from "react";
import Sheet from "./Sheet"; // Import the Sheet component
import gibiImage from "../assets/images/frame landing page.png";
import gibiPcImage from "../assets/images/gibiinfo-web.png";
function OurApp2() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const sheetData = {
    title: "GibiInfo Details",
    description:
      "Gibi Info is a platform that helps students practice with expert-analyzed questions, exchange educational materials, and access a blog to guide them in understanding universities and improving academically.",
    image: gibiImage,
    pcImage: gibiPcImage,
  };

  return (
    <section className="blog-box odd-blog">
      <div className="blog-img-content">
        <div className="title-head text-left">
          <h2 className="text-black text-3xl font-bold">GibiInfo</h2>
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
      <div className="blog-img-box flex gap-1">
        {/* Wrap both images in a flex container */}
        <div className=" flex gap-8 justify-center   w-full h-auto p-4">
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

export default OurApp2;
