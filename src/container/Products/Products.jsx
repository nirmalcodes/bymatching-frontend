import React from "react";
import { CircleItem, Divider } from "../../components";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import MakeItEasy from "../MakeItEasy/MakeItEasy";

const Products = () => {
  return (
    <>
      <div className="min-h-screen bg-[#001193] py-24 xl:py-28">
        <h3 className="header-text px-5 text-[#F8FAFC] xl:pl-20">
          Our Product.
        </h3>

        <div className="mt-7 flex flex-row flex-wrap gap-x-10 gap-y-4 xl:mt-20">
          <div className="flex w-full overflow-hidden  xl:flex-1 xl:rounded-tr-full xl:rounded-br-full">
            <img
              src="https://api.lorem.space/image/furniture?w=1280&h=720"
              alt=""
              loading="lazy"
              className="h-auto max-h-[600px] min-h-[260px] w-full object-cover xl:aspect-video"
            />
          </div>
          <div className="flex w-full flex-col px-5 text-[#F8FAFC] sm:pl-10 xl:flex-1 xl:pl-5">
            <h5 className="subheader-text">
              A matching platform between companies, students and course
              managers.
            </h5>
            <Divider className={"my-3 h-[2px] max-w-[316px] bg-[#FFCD05]"} />
            <p className="mb-6 mt-4 h-fit max-w-[480px] text-justify text-lg line-clamp-[10] lg:mb-8 xl:mt-0">
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
              className="w-fit rounded-full border-2 px-16 py-5 transition-all duration-300 hover:bg-[#F8FAFC] hover:text-[#3341a9] xl:mt-auto"
            >
              Read more
            </a>
          </div>
        </div>

        <div className="mt-10 mb-8 flex flex-row flex-wrap items-center justify-center gap-y-4 px-5 sm:justify-around sm:px-10 xl:mt-28">
          <CircleItem caption="1" />
          <ArrowLongRightIcon className="flow-indicator" />
          <CircleItem caption="2" />
          <ArrowLongRightIcon className="flow-indicator" />
          <CircleItem caption="3" />
          <ArrowLongRightIcon className="flow-indicator" />
          <CircleItem caption="4" />
        </div>
      </div>
      <MakeItEasy />
    </>
  );
};

export default Products;
