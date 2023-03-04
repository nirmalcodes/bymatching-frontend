import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const availableLanguages = ["en-GB", "sv"];

const detectionOptions = {
  order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
  checkWhitelist: true,
  caches: ["localStorage"],
};

i18n
  .use(Backend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("lang") || "en-GB",
    fallbackLng: "en-GB",
    debug: false,
    whitelist: availableLanguages,
    detection: detectionOptions,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
