import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "./i18n/translationEN.json";
import translationGR from "./i18n/translationGR.json";
import translationTR from "./i18n/translationTR.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: translationEN,
      },
      el: {
        translation: translationGR,
      },
      tr: {
        translation: translationTR,
      },
    },
  });
