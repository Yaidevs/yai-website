import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function Sheet({ title, description, image,pcImage, link,isOpen, onClose }) {
  const sheetRef = useRef(null);
 console.log(image);
  useEffect(() => {
    // Disable background scrolling when sheet is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sheetRef.current && !sheetRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-end sheet bg-black/50">
      <div
        ref={sheetRef}
        className="relative lg:w-[60%] w-[80%] max-w-[700px] h-full bg-white shadow-lg p-6 overflow-y-auto"
      >
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>
        <div className="mt-4">
          <div className="flex">

          <img
            src={image}
            alt={title}
            className="w-44 h-72 object-contain  rounded-md mb-4"
          />
          <img
            src={pcImage}
            alt={title}
            className="w-80 hidden md:flex object-contain  rounded-md mb-4"
          />
          </div>
          <p className="text-xl font-semibold text-gray-800">{description}</p>
          {/* <p className="mt-4">
            Additional content here to test scrolling. Add more details to see
            how scrolling behaves inside the sheet.
          </p> */}
        
          <Link
                  to={link}
                  target="_blank"
                  rel="nofollow"
                >
                   <button  className="common-btn mt-4">
                    View Now
                   </button>
                </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Sheet;
