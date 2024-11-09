import React from "react";
import checkin from "./../assets/svg/checkin.svg";
import checkout from "./../assets/svg/checkout.svg";
import { useTranslation } from "react-i18next";

const ChekcInAndOut = () => {
  const { t } = useTranslation();
  const { checkin0, checkin1, checkout0 } = t("checkinandout");

  return (
    <div className="container px-5 xl:px-36 mx-auto flex flex-col items-start justify-center m-10">
      <div className="border-t border-slate-300 w-full pt-10"></div>
      <div className="text-2xl font-bold mb-10">Check in / Check out</div>
      <div className="flex flex-col gap-6  border px-7 sm:px-10 py-8 shadow-md w-full">
        <div className="flex gap-48 border-b pb-5">
          <div className="font-bold flex items-center justify-center gap-2">
            {" "}
            <img src={checkin} alt="Check in" className="w-5" /> Check in
          </div>
          <div>
            <div>{checkin0}</div>
            <div className="text-sm opacity-60">{checkin1}</div>
          </div>
        </div>

        <div className="flex gap-44">
          <div className="font-bold flex items-center justify-center gap-2">
            <img src={checkout} alt="Check in" className="w-5" />
            Check out
          </div>
          <div>
            <div>{checkout0}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChekcInAndOut;
