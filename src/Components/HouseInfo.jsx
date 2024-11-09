import React from "react";
import { useTranslation } from "react-i18next";

const HouseInfo = () => {
  const { t } = useTranslation();
  const { firstpart } = t("houseInfo");

  return (
    <div className="container px-5 xl:px-36 mx-auto flex flex-col items-start justify-center m-10">
      <div className="border-t border-slate-300 w-full pt-10"></div>
      <div className="flex flex-col gap-6 text-[13px] lg:text-sm border px-7 sm:px-10 py-5 sm:py-7 shadow-md">
        <div>{firstpart}</div>
      </div>
    </div>
  );
};

export default HouseInfo;
