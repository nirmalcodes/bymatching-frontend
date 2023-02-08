import React from "react";

import bgPoster from "../../assets/images/bgPoster.png";
import bgVideo from "../../assets/videos/Bymatching.mp4";
import partnerAlmi from "../../assets/svg/almi_black.svg";
import partnerMDU from "../../assets/svg/MDU_logotype_english.svg";

const Home = () => {
  return (
    <>
      <div className="min-h-screen pt-32">
        {/* header section*/}
        <div className="flex flex-row">
          <div className="left flex flex-1 flex-col justify-center p-4 lg:w-1/2 lg:pl-7 xl:pl-20">
            <div className="mb-4 w-full max-w-[620px] text-3xl font-extrabold text-[#0F172A] lg:text-6xl">
              The fast way to find companies for student projects, and vice
              versa.
            </div>
            <div className="mb-12 w-full max-w-[430px] text-lg text-[#0F172A]">
              We streamline contact between students and companies, to find the
              right match at the right time.
            </div>
            <div className="flex flex-row flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#3341a9] py-5 px-12 text-white"
              >
                Create Account
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-2 text-[#3341a9]"
              >
                Subscribe to our newsletter
              </a>
            </div>
          </div>
          <div className="right hidden w-1/2 lg:flex">
            <div className="relative aspect-video w-full overflow-hidden rounded-tl-full rounded-bl-full">
              <video
                poster={bgPoster}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none absolute top-0 left-0 h-full w-full object-cover"
              >
                <source src={bgVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* partners section*/}

        <section className="partners_section py-16 px-0">
          <div className="section_title mb-8 pl-20">
            <h3 className="text-[34px] font-extrabold text-[#334155]">
              Partners.
            </h3>
          </div>

          <div className=" overflow-x-hidden">
            <div className="flex overflow-hidden overflow-x-auto py-2 px-4 scrollbar-hide">
              <div className="flex justify-around">
                <div className="ml-4 grid aspect-[30/9] place-items-center p-4">
                  <img
                    src={partnerAlmi}
                    alt="partner"
                    className="mx-8 h-6 w-28"
                  />
                </div>
                <div className="ml-4 grid aspect-[30/9] place-items-center p-4">
                  <img
                    src={partnerMDU}
                    alt="partner"
                    className="mx-8 h-6 w-28"
                  />
                </div>
                <div className="ml-4 grid aspect-[30/9] place-items-center p-4">
                  <img
                    src={partnerAlmi}
                    alt="partner"
                    className="mx-8 h-6 w-28"
                  />
                </div>
                <div className="ml-4 grid aspect-[30/9] place-items-center p-4">
                  <img
                    src={partnerMDU}
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

export default Home;
