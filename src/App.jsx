import React from "react";
import HousesImages from "./Components/HousesImages";
import NavBar from "./Components/NavBar";
import HouseAttributes from "./Components/HouseAttributes";
import HouseInfo from "./Components/HouseInfo";
import HouseBenefits from "./Components/HouseBenefits";
import ChekcInAndOut from "./Components/ChekcInAndOut";
import { useTranslation } from "react-i18next";
import viber from "./assets/svg/viber.svg";
import whatsapp from "./assets/svg/whatsapp.svg";
import email from "./assets/svg/email.svg";
import phone from "./assets/svg/phone.svg";

const App = () => {
  const { t } = useTranslation();
  const { info, tel, msg } = t("homepage");
  const { contactme, contactme1 } = t("contact");
  return (
    <div className="min-h-screen bg-white mb-5 overflow-x-hidden">
      <NavBar />
      <div>
        <div className="container px-5 xl:px-36 mx-auto mt-5 sm:mt-8">
          <div className="w-full mx-auto bg-white border border-gray-200 shadow-lg rounded-lg flex flex-col p-3 sm:p-6 gap-2 sm:gap-4 items-center">
            <h2 className="text-md sm:text-lg md:text-xl font-bold text-gray-800 text-center">
              {contactme}
            </h2>
            <p className="text-gray-600 text-sm sm:text-md text-center">
              {contactme1}
            </p>

            {/* Contact options (example) */}
            <div className="flex gap-2 sm:gap-4 flex-wrap max-w-[260px] sm:max-w-full items-center justify-center sm:mt-2">
              <a
                href="tel:6986984143"
                className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
              >
                <img
                  src={phone}
                  alt="Phone"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <div className="text-sm sm:text-md">Phone</div>
              </a>

              <a
                href="https://wa.me/306986984143"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition"
              >
                <img
                  src={whatsapp}
                  alt="WhatsApp"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <div className="text-sm sm:text-md">WhatsApp</div>
              </a>

              <a
                href="viber://chat?number=6986984143"
                className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition"
              >
                <img
                  src={viber}
                  alt="Viber"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <div className="text-sm sm:text-md">Viber</div>
              </a>

              <a
                href="mailto:llakomotini@hotmail.com"
                className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
              >
                <img
                  src={email}
                  alt="Email"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <div className="text-sm sm:text-md">Email</div>
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
        <div className="container px-5 xl:px-36 mx-auto mb-12">
          <div className="border border-gray-200 shadow-lg w-full flex flex-col sm:flex-row gap-6 sm:gap-10 px-10 py-5 sm:py-8 items-center justify-around rounded-lg bg-white">
            {/* Contact Information */}
            <div className="text-md w-full sm:w-[45%] text-gray-700">
              <div className="sm:text-lg font-bold mb-3">{info}</div>
              <div className="mb-1 text-sm sm:text-base">
                {tel}:{" "}
                <a
                  href="tel:6986984143"
                  className="font-semibold text-gray-900 hover:underline"
                >
                  6986984143
                </a>
              </div>
              <div className="text-sm sm:text-base">
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
              <div className="text-[13px] sm:text-sm leading-6">{msg}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
