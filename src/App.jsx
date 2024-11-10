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
        <div className="container px-5 xl:px-36 mx-auto mt-8">
          <div className="w-full mx-auto bg-white border border-gray-200 shadow-lg rounded-lg flex flex-col p-6 gap-4 items-center">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 text-center">
              {contactme}
            </h2>
            <p className="text-gray-600 text-center">{contactme1}</p>

            {/* Contact options (example) */}
            <div className="flex gap-4 flex-wrap max-w-[300px] sm:max-w-full items-center justify-center mt-2">
              <a
                href="tel:6986984143"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
              >
                <img src={phone} alt="Phone" className="w-5 h-5" />
                Phone
              </a>

              <a
                href="https://wa.me/306986984143"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition"
              >
                <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />
                WhatsApp
              </a>

              <a
                href="viber://chat?number=6986984143"
                className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition"
              >
                <img src={viber} alt="Viber" className="w-5 h-5" />
                Viber
              </a>

              <a
                href="mailto:llakomotini@hotmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
              >
                <img src={email} alt="Email" className="w-5 h-5" />
                Email
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
