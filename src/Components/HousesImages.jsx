import React, { useEffect, useRef, useState } from "react";
import { houseImages } from "../assets/img/img";
import starRating from "../assets/svg/starRating/starRating.svg";

const HousesImages = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const thumbnailsRef = useRef(null);

  useEffect(() => {
    setSelectedImg(0);
  }, []);

  const nextImage = () => {
    setSelectedImg((prevIndex) =>
      prevIndex === houseImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setSelectedImg((prevIndex) =>
      prevIndex === 0 ? houseImages.length - 1 : prevIndex - 1
    );
  };

  const scrollToSelected = () => {
    if (thumbnailsRef.current) {
      const selectedThumbnail = thumbnailsRef.current.children[selectedImg];
      selectedThumbnail?.scrollIntoView({
        behavior: "smooth",
        block: "center", // Centers the thumbnail
      });
    }
  };

  useEffect(() => {
    scrollToSelected();
  }, [selectedImg]);

  return (
    <div className="flex flex-col lg:flex-row justify-center w-[83%] lg:w-[100%] mx-auto lg:mx-0 mt-[50px]">
      {/* Main image section with sticky positioning and styled container */}
      <div className="sticky top-0 bg-transparent rounded-lg mx-auto lg:mx-0">
        {houseImages[selectedImg] && (
          <div className="text-center">
            <img
              src={houseImages[selectedImg].image}
              alt="Selected"
              className="w-[700px] h-[470px] shadow-xl object-contain bg-neutral-700 rounded-lg"
            />
            <div className="mt-5 text-gray-300 font-semibold flex items-center justify-center gap-10">
              <button
                className="bg-[#003B95] text-white hover:bg-[#2c5a9f] cursor-pointer px-4 py-1 rounded-lg transition duration-200"
                onClick={previousImage}
              >
                Prev
              </button>
              <div className="text-black">
                {selectedImg + 1} / {houseImages.length}
              </div>
              <button
                className="bg-[#003B95] text-white hover:bg-[#2c5a9f] cursor-pointer px-4 py-1 rounded-lg transition duration-200"
                onClick={nextImage}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Thumbnails list - scrollable and styled */}
      <div
        className="flex flex-row lg:flex-col gap-1 lg:gap-4 mx-auto lg:mx-0 w-[100%] lg:w-[16%] lg:ml-4 overflow-auto lg:max-h-[400px] lg:min-h-[468px] px-0 lg:px-2"
        ref={thumbnailsRef}
      >
        {houseImages.map((img, index) => (
          <div
            key={img.id}
            className="relative group flex items-center justify-center min-w-[200px]"
          >
            {/* Overlay with index on the selected thumbnail */}
            {selectedImg === index && (
              <div className="absolute inset-0 w-[94%] mx-auto flex items-center justify-center bg-black text-white text-2xl font-bold rounded-lg">
                {index + 1}
              </div>
            )}

            {/* Thumbnail image with hover and selected state styling */}
            <img
              src={img.image}
              alt="img"
              className={`w-[200px] h-[100px] lg:w-64 lg:h-40 object-cover rounded-lg transition duration-300 ease-in-out cursor-pointer ${
                selectedImg === index ? "opacity-40" : "hover:scale-105"
              }`}
              onClick={() => setSelectedImg(index)} // Set the clicked image as the selected image
            />
          </div>
        ))}
      </div>

      <div className="ml-5 flex flex-col">
        <div className="flex bg-white rounded-t-[5px] border border-slate-200 p-4 justify-between">
          <img src={starRating} alt="Star Rating" className="w-32" />

          <div className="flex items-center justify-center">
            <div>
              <div className="font-bold">Άριστο</div>
              <div className="text-xs">29 Αξιολογήσεις</div>
            </div>
            <div className="bg-blue-700 text-white p-1 ml-2 h-8 rounded-r-lg rounded-t-lg">
              9,9
            </div>
          </div>
        </div>

        <div>
          <iframe
            className="w-[300px] h-[395px] border-0 m-0 "
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5%20%CE%9A%CE%AC%CF%81%CF%80%CE%BF%CF%85%20%CE%A0%CE%B1%CF%80%CE%B1%CE%B4%CF%8C%CF%80%CE%BF%CF%85%CE%BB%CE%BF%CF%85,%20%CE%9A%CE%BF%CE%BC%CE%BF%CF%84%CE%B7%CE%BD%CE%AE,%2069100,%20%CE%95%CE%BB%CE%BB%CE%AC%CE%B4%CE%B1+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps systems</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default HousesImages;
