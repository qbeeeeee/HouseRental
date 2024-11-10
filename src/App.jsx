import React from "react";
import HousesImages from "./Components/HousesImages";
import NavBar from "./Components/NavBar";
import HouseAttributes from "./Components/HouseAttributes";
import HouseInfo from "./Components/HouseInfo";
import HouseBenefits from "./Components/HouseBenefits";
import ChekcInAndOut from "./Components/ChekcInAndOut";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  const { info, tel, msg } = t("homepage");
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
        <div className="container px-5 xl:px-36 mx-auto mt-10 mb-12">
          <div className="border border-gray-200 shadow-lg w-full flex flex-col sm:flex-row gap-10 px-10 py-8 items-center justify-around rounded-lg bg-white">
            {/* Contact Information */}
            <div className="text-md w-full sm:w-[45%] text-gray-700">
              <div className="text-lg font-bold mb-3">{info}</div>
              <div className="mb-1">
                {tel}:{" "}
                <a
                  href="tel:6986984143"
                  className="font-semibold text-gray-900 hover:underline"
                >
                  6986984143
                </a>
              </div>
              <div>
                Email:{" "}
                <a
                  href="mailto:llakomotini@hotmail.com"
                  className="font-semibold text-gray-900 hover:underline"
                >
                  llakomotini@hotmail.com
                </a>
              </div>
            </div>

            {/* Apartment Information */}
            <div className="w-full sm:w-[45%] text-gray-700">
              <div className="sm:text-lg font-bold text-gray-800 mb-3">
                Living Life Apartment Komotini - ΑΜΑ 2348319
              </div>
              <div className="text-sm leading-6">{msg}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
