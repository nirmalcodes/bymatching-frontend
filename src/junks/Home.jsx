import React from "react";

import { SectionWrapper } from "../../components";
import { images, videos } from "../../constants";

const Home = () => {
  return (
    <>
      <div className="min-h-screen pt-[75px] xl:pt-[90px]">
        {/* header section*/}
        <div className="flex flex-row xl:pt-16">
          <div className="left flex flex-1 flex-col justify-center p-4 lg:w-1/2 lg:pl-7 xl:pl-20">
            <div className="mb-4 w-full max-w-[620px] text-3xl font-extrabold text-[#0F172A] lg:text-6xl">
              The fast way to find companies for student projects, and vice
              versa.
            </div>
            <div className="w-full max-w-[430px] text-lg text-[#0F172A]">
              We streamline contact between students and companies, to find the
              right match at the right time.
            </div>
            <div className="mt-6 flex flex-row flex-wrap items-center gap-x-8 gap-y-2 xl:mt-12">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#3341a9] py-3 px-12 text-white opacity-90 transition-all duration-300 hover:opacity-100"
              >
                Create Account
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#3341a9] opacity-90 transition-all duration-300 hover:opacity-100"
              >
                Subscribe to our newsletter
              </a>
            </div>
          </div>
          <div className="right hidden w-1/2 lg:flex">
            <div className="relative aspect-video w-full overflow-hidden rounded-tl-full rounded-bl-full">
              <video
                poster={images.bgVideoPoster}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none absolute top-0 left-0 h-full w-full object-cover"
              >
                <source src={videos.bgVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* partners section*/}

        <section className="px-0 pb-16">
          <div className="mb-6 px-5 xl:mb-8 xl:px-20">
            <h3 className="text-[34px] font-extrabold text-[#334155]">
              Partners.
            </h3>
          </div>

          <div className="overflow-x-hidden">
            <div className="flex overflow-hidden overflow-x-auto py-2 px-5 scrollbar-hide">
              <div className="flex justify-around">
                <div className="grid aspect-[30/9] place-items-center p-4">
                  <img
                    src={images.almiLogo}
                    alt="partner"
                    className="mx-8 h-6 w-28"
                  />
                </div>
                <div className="grid aspect-[30/9] place-items-center p-4">
                  <img
                    src={images.mduLogo}
                    alt="partner"
                    className="mx-8 h-6 w-28"
                  />
                </div>
                <div className="grid aspect-[30/9] place-items-center p-4">
                  <img
                    src={images.almiLogo}
                    alt="partner"
                    className="mx-8 h-6 w-28"
                  />
                </div>
                <div className="grid aspect-[30/9] place-items-center p-4">
                  <img
                    src={images.mduLogo}
                    alt="partner"
                    className="mx-8 h-6 w-28"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionWrapper(Home, "home");
