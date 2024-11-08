import React from "react";
import { useTranslation } from "react-i18next";
import HousesImages from "./Components/HousesImages";
import NavBar from "./Components/NavBar";
import HouseAttributes from "./Components/HouseAttributes";

const App = () => {
  const { t } = useTranslation();
  const { testin } = t("homepage");
  return (
    <div className="min-h-screen bg-white mb-40 overflow-x-hidden">
      <NavBar />
      <div>
        <HousesImages />
        <div className="mt-5">
          <HouseAttributes />
        </div>
      </div>
    </div>
  );
};

export default App;
