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
    link:"https://gibiinfo.dawaafinder.com/"

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
      <div className="flex flex-wrap justify-center bg-green-100 rounded-xl items-center gap-8 p-4">
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

export default OurApp2;
