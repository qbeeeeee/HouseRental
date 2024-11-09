import React from "react";
import check from "./../assets/svg/check.svg";
import oven from "./../assets/svg/houseIcons/oven.svg";
import wifi from "./../assets/svg/houseIcons/wifi.svg";
import parking from "./../assets/svg/houseIcons/parking.svg";
import grass from "./../assets/svg/houseIcons/grass.svg";
import bed from "./../assets/svg/houseIcons/bed.svg";
import sofa from "./../assets/svg/houseIcons/sofa.svg";
import tv from "./../assets/svg/houseIcons/tv.svg";
import safe from "./../assets/svg/houseIcons/safe.svg";
import fun from "./../assets/svg/houseIcons/fun.svg";
import bathtab from "./../assets/svg/houseIcons/bathtab.svg";
import lngs from "./../assets/svg/houseIcons/lngs.svg";
import reception from "./../assets/svg/houseIcons/reception.svg";
import more from "./../assets/svg/houseIcons/more.svg";
import wheelchair from "./../assets/svg/houseIcons/wheelchair.svg";
import { useTranslation } from "react-i18next";

function HouseBenefits() {
  const { t } = useTranslation();
  const {
    header,
    rating,
    parking0,
    parking1,
    internet,
    internet1,
    kitchen,
    kitchen1,
    kitchen2,
    kitchen3,
    kitchen4,
    kitchen5,
    kitchen6,
    kitchen7,
    kitchen8,
    kitchen9,
    outside,
    outside1,
    outside2,
    outside3,
    reception0,
    reception1,
    reception2,
    bed0,
    bed1,
    bed2,
    bath0,
    bath1,
    bath2,
    bath3,
    bath4,
    bath5,
    bath6,
    bath7,
    bath8,
    livingroom,
    livingroom1,
    livingroom2,
    livingroom3,
    entertainment,
    entertainment1,
    entertainment2,
    entertainment3,
    safety,
    safety1,
    safety2,
    tech,
    tech1,
    tech2,
    room,
    room1,
    room2,
    room3,
    room4,
    room5,
    room6,
    room7,
    accessibility,
    accessibility1,
    other,
    other1,
    other2,
    other3,
    other4,
    lngs0,
    lngs1,
    lngs2,
    lngs3,
  } = t("houseBenefits");

  return (
    <div className="container px-5 xl:px-36 mx-auto flex flex-col items-start justify-center m-10">
      <div>
        <div className="text-2xl font-bold">{header}</div>
        <div className="text-md opacity-70 mt-2">{rating}</div>
      </div>

      <div className="mt-10 flex flex-wrap justify-between w-full gap-2 sm:gap-4">
        {/* first col */}
        <div className="flex gap-2 sm:gap-4 flex-col w-[100%] sm:w-[48%] lg:w-[31%]">
          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              {" "}
              <img src={parking} alt="parking" className="w-5" />
              {parking0}
            </div>
            <div>
              <div className="flex gap-3">
                {" "}
                <img src={check} alt="check" className="w-3" />
                {parking1}
              </div>
            </div>
          </div>

          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              {" "}
              <img src={wifi} alt="wifi" className="w-5" />
              {internet}
            </div>
            <div>{internet1}</div>
          </div>

          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              <img src={oven} alt="check" className="w-5" />
              {kitchen}
            </div>
            <div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {kitchen1}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {kitchen2}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {kitchen3}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {kitchen4}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {kitchen5}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {kitchen6}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {kitchen7}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {kitchen8}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {kitchen9}
              </div>
            </div>
          </div>

          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              <img src={grass} alt="check" className="w-5" />
              {outside}
            </div>
            <div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {outside1}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {outside2}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {outside3}
              </div>
            </div>
          </div>

          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              <img src={reception} alt="check" className="w-5" />
              {reception0}
            </div>
            <div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {reception1}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {reception2}
              </div>
            </div>
          </div>
        </div>

        {/* second col */}
        <div className="flex gap-2 sm:gap-4 flex-col w-[100%] sm:w-[48%] lg:w-[31%]">
          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              <img src={bed} alt="check" className="w-5" />
              {bed0}
            </div>
            <div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {bed1}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {bed2}
              </div>
            </div>
          </div>

          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              <img src={bathtab} alt="check" className="w-5" />
              {bath0}
            </div>
            <div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {bath1}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {bath2}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {bath3}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {bath4}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {bath5}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {bath6}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {bath7}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {bath8}
              </div>
            </div>
          </div>

          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              <img src={sofa} alt="check" className="w-5" />
              {livingroom}
            </div>
            <div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {livingroom1}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {livingroom2}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {livingroom3}
              </div>
            </div>
          </div>

          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              <img src={fun} alt="fun" className="w-5" />
              {entertainment}
            </div>
            <div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {entertainment1}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {entertainment2}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {entertainment3}
              </div>
            </div>
          </div>

          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              <img src={safe} alt="check" className="w-5" />
              {safety}
            </div>
            <div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {safety1}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {safety2}
              </div>
            </div>
          </div>
        </div>

        {/* third col */}
        <div className="flex gap-2 sm:gap-4 flex-col w-[100%] sm:w-[48%] lg:w-[31%]">
          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              <img src={tv} alt="check" className="w-5" />
              {tech}
            </div>
            <div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {tech1}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {tech2}
              </div>
            </div>
          </div>

          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              <img src={bed} alt="check" className="w-5" />
              {room}
            </div>
            <div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {room1}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {room2}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {room3}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {room4}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {room5}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {room6}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {room7}
              </div>
            </div>
          </div>

          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              <img src={wheelchair} alt="wheelchair" className="w-5" />
              {accessibility}
            </div>
            <div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {accessibility1}
              </div>
            </div>
          </div>

          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              <img src={more} alt="check" className="w-4" />
              {other}
            </div>
            <div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {other1}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {other2}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {other3}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {other4}
              </div>
            </div>
          </div>

          <div className="border shadow-sm px-10 py-7 rounded-md">
            <div className="text-lg font-semibold flex gap-3 mb-2">
              <img src={lngs} alt="check" className="w-5" />
              {lngs0}
            </div>
            <div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {lngs1}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {lngs2}
              </div>
              <div className="flex gap-3">
                <img src={check} alt="check" className="w-3" />
                {lngs3}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseBenefits;
