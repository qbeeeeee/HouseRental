import React from "react";
import house from "./../assets/svg/houseIcons/house.svg";
import houseSize from "./../assets/svg/houseIcons/houseSize.svg";
import ac from "./../assets/svg/houseIcons/ac.svg";
import balcony from "./../assets/svg/houseIcons/balcony.svg";
import family from "./../assets/svg/houseIcons/family.svg";
import parking from "./../assets/svg/houseIcons/parking.svg";
import oven from "./../assets/svg/houseIcons/oven.svg";
import wifi from "./../assets/svg/houseIcons/wifi.svg";
import wc from "./../assets/svg/houseIcons/wc.svg";

const items = [
  { img: house, text: "Όλο το κατάλυμα στη διάθεσή σας" },
  { img: houseSize, text: "116 τ.μ. μέγεθος" },
  { img: parking, text: "Δωρεάν χώρος στάθμευσης" },
  { img: wifi, text: "Δωρεάν Wi-Fi" },
  { img: family, text: "Οικογενειακά δωμάτια" },
  { img: balcony, text: "Μπαλκόνι" },
  { img: oven, text: "Κουζίνα" },
  { img: ac, text: "Κλιματισμός" },
  { img: wc, text: "Ιδιωτικό μπάνιο" },
];

const HouseAttributes = () => {
  return (
    <div className="flex flex-wrap items-center justify-center w-[71%] mx-auto gap-3 p-1">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white text-black flex flex-auto items-center justify-center gap-3 p-4 border border-slate-300 
          rounded-lg hover:bg-slate-100 cursor-pointer transform duration-150 ease-in hover:-translate-y-1"
        >
          <img src={item.img} alt="house" className="w-5" />
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default HouseAttributes;
