import React from "react";
import LanguageSelector from "./LanguageSelector";
import homeOwner from "./../assets/img/homeOwner/homeOwner.webp";
import location from "./../assets/svg/starRating/location.svg";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();
  const { address, gewrgia } = t("navbar");
  //bg-[#003B95]
  //bg-[#00958d]
  //bg-[#95007a]
  return (
    <div className="w-screen h-40 bg-[#00958d] flex items-center justify-center">
      <div className="container mx-auto px-3 xl:px-20 flex items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-1 mt-2">
          <img
            src={homeOwner}
            alt="Home Owner"
            className="w-12 bg-white bg-opacity-30 p-1 sm:p-[7px] sm:w-16 lg:w-20 rounded-full shadow-lg cursor-pointer hover:scale-105 transform duration-300 ease-in-out"
          />
          <div className="text-white mt-2 text-xs sm:text-sm lg:text-md font-bold uppercase">
            {gewrgia}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center max-w-[60%]">
          <div className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold drop-shadow-lg">
            Living Life Apartment Komotini
          </div>
          <div className="text-white font-semibold mt-2 text-sm sm:text-md lg:text-lg flex items-center justify-center">
            <div>
              <img
                src={location}
                alt="location"
                className="w-5 lg:w-6 inline-flex mr-1 invert"
              />
              {address}
            </div>
          </div>
        </div>

        <div>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
