import React from "react";
import netflix from "./../assets/svg/houseIcons/netflix.svg";
import houseSize1 from "./../assets/svg/houseIcons/houseSize.svg";
import ac1 from "./../assets/svg/houseIcons/ac.svg";
import balcony1 from "./../assets/svg/houseIcons/balcony.svg";
import family1 from "./../assets/svg/houseIcons/family.svg";
import parking1 from "./../assets/svg/houseIcons/parking.svg";
import oven1 from "./../assets/svg/houseIcons/oven.svg";
import wifi1 from "./../assets/svg/houseIcons/wifi.svg";
import wc1 from "./../assets/svg/houseIcons/wc.svg";
import sofa1 from "./../assets/svg/houseIcons/sofa.svg";
import bed1 from "./../assets/svg/houseIcons/bed.svg";
import grass1 from "./../assets/svg/houseIcons/grass.svg";

import { useTranslation } from "react-i18next";

const HouseAttributes = () => {
  const { t } = useTranslation();
  const {
    houseSize,
    parking,
    wifi,
    family,
    balcony,
    oven,
    ac,
    wc,
    grass,
    bed,
    sofa,
  } = t("houseAttributes");

  const items = [
    { img: houseSize1, text: houseSize },
    { img: parking1, text: parking },
    { img: wifi1, text: wifi },
    { img: family1, text: family },
    { img: balcony1, text: balcony },
    { img: oven1, text: oven },
    { img: ac1, text: ac },
    { img: wc1, text: wc },
    { img: grass1, text: grass },
    { img: bed1, text: bed },
    { img: sofa1, text: sofa },
    { img: netflix, text: "Netflix" },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center container px-4 xl:px-32 mx-auto gap-3 p-1">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white text-black text-xs sm:text-sm lg:text-md flex flex-auto items-center justify-center gap-3 p-3 sm:p-4 border border-slate-300 
          rounded-lg hover:bg-slate-100 cursor-pointer transform duration-150 ease-in hover:-translate-y-1"
        >
          <img src={item.img} alt="house" className="w-4 sm:w-5" />
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default HouseAttributes;
