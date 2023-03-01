import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

const Products = () => {
  return (
    <>
      <div className="min-h-screen bg-[#001193] py-28">
        <h3 className="mb-20 pl-20 text-6xl font-extrabold text-[#F8FAFC]">
          Our Products
        </h3>
        <div className="flex flex-row flex-wrap gap-x-[60px]">
          <div className="flex aspect-video w-full overflow-hidden xl:mb-[68px] xl:flex-1 xl:rounded-tr-full xl:rounded-br-full">
            <img
              src="https://api.lorem.space/image/furniture?w=1280&h=720"
              alt=""
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col pr-[188px] text-[#F8FAFC] xl:flex-1">
            <h5 className="subheader-text">
              A matching platform between companies, students and course
              managers.
            </h5>
            <div className="my-3 h-[2px] max-w-[316px] bg-[#FFCD05]"></div>
            <p className="mb-12 h-fit max-w-[480px] text-justify text-lg">
              ByMatching gives students, companies and educational actors a
              platform to gather on and then be matched and start collaborating
              with each other.
              <br />
              <br />
              It was founded with the vision of simplifying collaboration
              between business and higher education stakeholders. We think it
              should be easy to establish contact with students if you want to
              collaborate, but also to take part in the latest research, gain
              new perspectives that can be put to practical use and meet future
              talents early in their studies. It should also be easy for
              students to get in touch with companies. Regardless of industry,
              company size or geographic location.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-full border-2 px-16 py-5"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="mt-[188px] mb-36 flex flex-row flex-wrap items-center xl:justify-around">
          <div className="flex aspect-square w-[200px] flex-col items-center justify-center rounded-full bg-[#9FA2E7] p-8 text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-14 w-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <div className="flex aspect-square w-[200px] flex-col items-center justify-center rounded-full bg-[#9FA2E7] p-8 text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-14 w-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <div className="flex aspect-square w-[200px] flex-col items-center justify-center rounded-full bg-[#9FA2E7] p-8 text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-14 w-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <div className="flex aspect-square w-[200px] flex-col items-center justify-center rounded-full bg-[#9FA2E7] p-8 text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Products, "product");
