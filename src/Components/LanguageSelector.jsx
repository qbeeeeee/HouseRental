import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import languageIcon from "./../assets/svg/language.svg";
import greekFlag from "./../assets/svg/Flag_of_Greece.svg";
import engFlag from "./../assets/svg/Flag_of_the_UK.svg";
import turkeyFlag from "./../assets/svg/Flag_of_Turkey.svg";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const { greek, english, turkish } = t("language");

  const languages = [
    { code: "en", lang: english, icon: engFlag },
    { code: "el", lang: greek, icon: greekFlag },
    { code: "tr", lang: turkish, icon: turkeyFlag },
  ];

  useEffect(() => {
    if (!i18n.language) {
      return;
    }
    const langCode = i18n.language.split("-")[0];
    setCurrentLanguage(langCode);
  }, [i18n.language]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentLangObj = languages.find(
    (lang) => lang.code === currentLanguage
  );

  const currentLangName = currentLangObj
    ? currentLangObj.lang
    : currentLanguage;

  const currentLangIcon = currentLangObj ? currentLangObj.icon : "";
  return (
    <div className="relative inline-block gap-2.5 mt-0 sm:mr-[40px] bg-white bg-opacity-30 rounded-md cursor-pointer z-30">
      <div
        onClick={toggleDropdown}
        className="flex items-center py-1 px-1 sm:py-2 sm:px-2 lg:py-0.5 lg:px-2"
      >
        <img
          className={"w-8 min-w-8 lg:min-w-6 lg:w-6"}
          src={currentLangIcon}
          alt="languanges"
        />
        <div>
          {/* <div className="lng-language-text">{language}</div> */}
          <div className="ml-2 text-white font-inter font-medium text-md lg:text-lg text-start hidden lg:flex">
            {currentLangName}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="rounded-md
      absolute flex flex-col items-center justify-center text-[16px] -ml-2 sm:-ml-2 mt-2 lg:mt-0
      bg-white z-10 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
        >
          {languages.map((lng) => (
            <div
              className="w-full px-3 lg:px-5 py-1 lg:py-2 m-0.5 flex items-center justify-center lg:justify-between gap-3 rounded-[10%] hover:text-black hover:bg-[rgba(214,214,214,0.364)]"
              key={lng.code}
              onClick={() => handleLanguageChange(lng.code)}
            >
              <div className="flex items-center justify-center h-6 w-6">
                <img className="w-full h-full" src={lng.icon} alt="language" />
              </div>
              <div className="hidden lg:flex">{lng.lang}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
