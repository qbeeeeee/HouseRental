import React, { useEffect, useRef, useState } from "react";
import { houseImages } from "../assets/img/img";
import starRating from "../assets/svg/starRating/starRating.svg";
import { useTranslation } from "react-i18next";

const HousesImages = () => {
  const { t } = useTranslation();
  const { perfect, reviews } = t("googlemaps");

  const [selectedImg, setSelectedImg] = useState(null);
  const thumbnailsRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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
      const container = thumbnailsRef.current;
      const selectedThumbnail = container.children[selectedImg];

      if (selectedThumbnail) {
        // Determine if scrolling is horizontal or vertical based on container orientation
        const isVertical =
          window.getComputedStyle(container).flexDirection === "column";

        if (isVertical) {
          // Vertical scroll adjustment
          const containerHeight = container.clientHeight;
          const thumbnailOffsetTop = selectedThumbnail.offsetTop;
          const thumbnailHeight = selectedThumbnail.clientHeight;

          // Calculate the vertical scroll position to center the thumbnail within the scroll container
          const verticalScrollPosition =
            thumbnailOffsetTop - containerHeight / 0.8 + thumbnailHeight / 2;

          container.scrollTo({
            top: verticalScrollPosition,
            behavior: "smooth",
          });
        } else {
          // Horizontal scroll adjustment
          const containerWidth = container.clientWidth;
          const thumbnailOffsetLeft = selectedThumbnail.offsetLeft;
          const thumbnailWidth = selectedThumbnail.clientWidth;

          // Calculate the horizontal scroll position to center the thumbnail within the scroll container
          const horizontalScrollPosition =
            thumbnailOffsetLeft - containerWidth / 2 + thumbnailWidth / 2;

          container.scrollTo({
            left: horizontalScrollPosition,
            behavior: "smooth",
          });
        }
      }
    }
  };

  useEffect(() => {
    scrollToSelected();
  }, [selectedImg]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      // Swiped left
      nextImage();
    } else if (distance < -50) {
      // Swiped right
      previousImage();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center container mx-auto px-3 lg:px-0 mt-6 sm:mt-[40px]">
      {/* Main image section with sticky positioning and styled container */}
      <div className="sticky top-0 bg-transparent rounded-lg mx-auto lg:mx-0">
        {houseImages[selectedImg] && (
          <div
            className="text-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={houseImages[selectedImg].image}
              alt="Selected"
              className="w-[700px] h-[300px] sm:h-[400px] lg:h-[470px] shadow-md object-contain bg-neutral-700 rounded-lg"
            />
            <div className="mt-5 text-gray-300 font-semibold flex items-center justify-center gap-10">
              <button
                className="bg-[#00958d] text-white hover:bg-[#00958dd2] cursor-pointer px-4 py-1 rounded-lg transition duration-200"
                onClick={previousImage}
              >
                Prev
              </button>
              <div className="text-black">
                {selectedImg + 1} / {houseImages.length}
              </div>
              <button
                className="bg-[#00958d] text-white hover:bg-[#00958d] cursor-pointer px-4 py-1 rounded-lg transition duration-200"
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
        className="flex flex-row lg:flex-col mt-3 lg:mt-0 gap-1 lg:gap-3 mx-auto lg:mx-0 w-[100%] lg:max-w-[250px] overflow-auto lg:max-h-[400px] lg:min-h-[468px] pt-2 lg:pt-2 pb-3 lg:pb-0 px-0 lg:px-4"
        ref={thumbnailsRef}
      >
        {houseImages.map((img, index) => (
          <div
            key={img.id}
            className="relative group flex items-center justify-center min-w-[140px]"
          >
            {/* Overlay with index on the selected thumbnail */}
            {selectedImg === index && (
              <div className="absolute inset-0 w-[100%] mx-auto flex items-center justify-center bg-black text-white text-2xl font-bold rounded-lg">
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

      <div className="lg:ml-5 mt-10 lg:mt-0 flex flex-col min-w-[270px]">
        <div className="flex bg-white rounded-t-[5px] border border-slate-200 p-4 justify-between gap-3">
          <div className="max-w-[120px] flex items-center justify-center">
            <img src={starRating} alt="Star Rating" className="w-full" />
          </div>

          <div className="flex items-center justify-center whitespace-nowrap">
            <div>
              <div className="text-sm xl:text-lg font-bold">{perfect}</div>
              <div className="text-[10px] xl:text-xs">29 {reviews}</div>
            </div>
            <div className="bg-blue-700 text-white p-1 ml-2 h-8 rounded-r-lg rounded-t-lg">
              9,9
            </div>
          </div>
        </div>

        <div>
          <iframe
            className="w-full h-[285px] border-0 m-0 "
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5%20%CE%9A%CE%AC%CF%81%CF%80%CE%BF%CF%85%20%CE%A0%CE%B1%CF%80%CE%B1%CE%B4%CF%8C%CF%80%CE%BF%CF%85%CE%BB%CE%BF%CF%85,%20%CE%9A%CE%BF%CE%BC%CE%BF%CF%84%CE%B7%CE%BD%CE%AE,%2069100,%20%CE%95%CE%BB%CE%BB%CE%AC%CE%B4%CE%B1+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps systems</a>
          </iframe>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center mt-3 border p-3 rounded-md shadow-md">
          <div className="text-gray-800 font-semibold text-center">
            Visit Booking.com to read reviews
          </div>
          <div className="flex gap-2">
            <a
              href="https://www.booking.com/hotel/gr/like-your-home-komotene2.el.html#tab-reviews"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read reviews on Booking.com"
            >
              <button className="bg-[#00958d] text-white hover:bg-[#00958dd2] cursor-pointer px-3 py-1 rounded-md transition duration-200">
                Read Reviews
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousesImages;
