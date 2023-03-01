import React from "react";
import { useTranslation } from "react-i18next";

import { images, videos } from "../../constants";

const Header = () => {
  let { t } = useTranslation();

  return (
    <>
      <div className="relative min-h-screen py-24 xl:py-28">
        <div className="flex flex-row xl:mt-9">
          <div className="absolute z-20 w-full xl:relative xl:w-1/2">
            <div className="px-5 xl:pl-20">
              <h3 className="mb-4 w-full max-w-[620px] text-3xl font-extrabold text-[#F8FAFC] lg:text-6xl xl:mb-6 xl:text-[#0F172A]">
                The fast way to find companies for student projects, and vice
                versa.
              </h3>
              <p className="mb-10 w-full max-w-[430px] text-lg font-medium text-[#F8FAFC] xl:mb-16 xl:text-[#0F172A]">
                We streamline contact between students and companies, to find
                the right match at the right time.
              </p>
              <div className="flex flex-row flex-wrap items-center gap-x-8 gap-y-2 xl:mt-12">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#3341a9] py-3 px-12 text-white  transition-all duration-300"
                >
                  {t("Create Account")}
                </a>
                <a
                  hidden
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#F8FAFC] opacity-90 transition-all duration-300 hover:opacity-100"
                >
                  Subscribe to our newsletter
                </a>
              </div>
            </div>
          </div>
          <div className="ml-auto h-[480px] overflow-hidden xl:relative xl:w-1/2 xl:rounded-tl-full xl:rounded-bl-full">
            <div className="absolute top-0 left-0 z-10 h-full w-full bg-slate-600/40 backdrop-blur-sm xl:hidden" />
            <video
              poster={images.bgVideoPoster}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="pointer-events-none absolute top-0 left-0 h-full w-full object-cover"
            >
              <source src={videos.byMatchingBgVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="absolute top-[68%] z-30 w-full px-5 xl:relative xl:mt-14 xl:px-20">
          <h3 className="mb-3 text-[34px] font-extrabold text-[#F8FAFC] xl:mb-8 xl:text-[#334155]">
            Partners.
          </h3>
          <div className="my-slider">
            <div className="my-slider-slide">
              <img
                src={images.almiLogo}
                alt="partner"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
            <div className="my-slider-slide">
              <img
                src={images.mduLogo}
                alt="partner"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
            <div className="my-slider-slide">
              <img
                src={images.almiLogo}
                alt="partner"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
            <div className="my-slider-slide">
              <img
                src={images.mduLogo}
                alt="partner"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
