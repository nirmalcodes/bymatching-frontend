import React from "react";

import { SectionWrapper } from "../../components";
import { images, videos } from "../../constants";

const Home1 = () => {
  return (
    <>
      <div className="relative flex min-h-screen flex-row bg-indigo-300 py-24 xl:py-28">
        <div className="absolute inset-0 z-20 flex w-full flex-col px-5 py-28 xl:flex-1">
          <h3 className="mb-4 w-full max-w-[620px] text-3xl font-extrabold text-[#F8FAFC] lg:text-6xl xl:text-[#0F172A]">
            The fast way to find companies for student projects, and vice versa.
          </h3>
          <p className="w-full max-w-[430px] text-lg font-medium text-[#F8FAFC] xl:text-[#0F172A]">
            We streamline contact between students and companies, to find the
            right match at the right time.
          </p>
          <div className="mt-6 flex flex-row flex-wrap items-center gap-x-8 gap-y-2 xl:mt-12">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#3341a9] py-3 px-12 text-white  transition-all duration-300"
            >
              Create Account
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

        {/* video */}
        <div className="absolute inset-0 flex w-full bg-teal-400 xl:relative xl:inset-auto">
          <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-sm xl:hidden" />
          <div className="aspect-video w-full overflow-hidden xl:rounded-tl-full xl:rounded-bl-full">
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
    </>
  );
};

export default SectionWrapper(Home1, "home");
