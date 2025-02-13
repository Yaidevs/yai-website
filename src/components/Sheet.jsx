import React, { useEffect, useRef } from "react";

function Sheet({ title, description, image, isOpen, onClose }) {
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
        className="relative w-[60%] max-w-[700px] h-full bg-white shadow-lg p-6 overflow-y-auto"
      >
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>
        <div className="mt-4">
          <img
            src={image}
            alt={title}
            className="w-44 h-72 object-contain  rounded-md mb-4"
          />
          <p>{description}</p>
          <p className="mt-4">
            Additional content here to test scrolling. Add more details to see
            how scrolling behaves inside the sheet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sheet;
