import React from "react";
import LanguageSelector from "./LanguageSelector";
import homeOwner from "./../assets/img/homeOwner/homeOwner.jpg";
import location from "./../assets/svg/starRating/location.svg";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center relative w-screen h-40 bg-[#003B95]">
      <div className="absolute left-0 ml-64 flex flex-col items-center justify-center gap-1">
        <div className="text-white text-md font-semibold">Οικοδεσπότης</div>
        <img
          src={homeOwner}
          alt="Home Owner"
          className="w-20 rounded-full shadow-xl cursor-pointer hover:scale-105 transform duration-300 ease-in-out"
        />
        <div className="text-white text-md font-bold">ΓΕΩΡΓΙΑ</div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="text-white text-3xl font-bold">
          Living Life Apartment Komotini
        </div>
        <div className="text-white font-semibold mt-2 text-lg flex gap-1">
          <img src={location} alt="location" className="w-5" />5 Κάρπου
          Παπαδόπουλου, Κομοτηνή, 69100, Ελλάδα
        </div>
      </div>

      <div className="absolute right-[14%]">
        <LanguageSelector />
      </div>
    </div>
  );
};

export default NavBar;
