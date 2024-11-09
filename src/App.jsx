import React from "react";
import HousesImages from "./Components/HousesImages";
import NavBar from "./Components/NavBar";
import HouseAttributes from "./Components/HouseAttributes";
import HouseInfo from "./Components/HouseInfo";
import HouseBenefits from "./Components/HouseBenefits";
import ChekcInAndOut from "./Components/ChekcInAndOut";

const App = () => {
  return (
    <div className="min-h-screen bg-white mb-5 overflow-x-hidden">
      <NavBar />
      <div>
        <div className="container px-5 xl:px-36 mx-auto mt-8">
          <div className="border shadow-md w-full flex flex-col py-4 gap-2 items-center justify-center">
            <div className="text-lg font-semibold">Book Now on Booking.com</div>
            <div className="flex gap-2">
              <a
                href="https://www.booking.com/hotel/gr/like-your-home-komotene2.el.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book on Booking.com"
              >
                <button className="bg-[#003B95] text-lg text-white hover:bg-[#2c5a9f] cursor-pointer px-4 py-1.5 rounded-md transition duration-200">
                  Book Me
                </button>
              </a>
            </div>
          </div>
        </div>
        <HousesImages />
        <div className="mt-5">
          <HouseAttributes />
        </div>
        <HouseInfo />
        <HouseBenefits />
        <ChekcInAndOut />
      </div>
    </div>
  );
};

export default App;
