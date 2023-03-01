import React, { useEffect, useState } from "react";
import { images } from "../../constants";

const LanguageChanger = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en-gb"
  );
  const [languageDropdown, setLanguageDropdown] = useState(false);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <>
      <div className="fixed bottom-14 left-5 z-[9999] xl:right-14 xl:left-auto xl:top-[26px]">
        <div className="relative">
          <div
            className="absolute left-0 top-0 z-[8888] h-9 w-9"
            onClick={() => setLanguageDropdown(!languageDropdown)}
          >
            {language === "en-gb" && (
              <img
                src={images.ukFlagSvg}
                alt="UK_Flag"
                className="language-dropdown-item"
              />
            )}
            {language === "sv" && (
              <img
                src={images.swedenFlagSvg}
                alt="Sweden_Flag"
                className="language-dropdown-item"
              />
            )}
          </div>
          <div
            className={`absolute left-0 ${
              languageDropdown ? "-top-11 xl:top-11" : "top-0"
            } h-9 w-9 transition-all duration-150`}
          >
            {language === "sv" && (
              <img
                src={images.ukFlagSvg}
                alt="UK_Flag"
                className="language-dropdown-item"
                onClick={() => {
                  setLanguage("en-gb");
                  setLanguageDropdown(!languageDropdown);
                }}
              />
            )}
            {language === "en-gb" && (
              <img
                src={images.swedenFlagSvg}
                alt="Sweden_Flag"
                className="language-dropdown-item"
                onClick={() => {
                  setLanguage("sv");
                  setLanguageDropdown(!languageDropdown);
                }}
              />
            )}
          </div>
        </div>
      </div>
      {languageDropdown && (
        <div
          className="language-dropdown-backdrop"
          onClick={() => setLanguageDropdown(!languageDropdown)}
        />
      )}
    </>
  );
};

export default LanguageChanger;
