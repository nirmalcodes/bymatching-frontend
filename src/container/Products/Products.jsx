import React from "react";
import { CircleItem, Divider, TextFormatter } from "../../components";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import MakeItEasy from "../MakeItEasy/MakeItEasy";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen bg-[#001193] py-24 xl:py-28">
        <h3 className="header-text px-5 text-[#F8FAFC] xl:pl-20">
          {t("Our Product")}
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
            <h5 className="subheader-text">{t("A matching platform")}</h5>
            <Divider className={"my-3 h-[2px] max-w-[316px] bg-[#FFCD05]"} />
            <TextFormatter
              className="mb-6 mt-4 h-fit max-w-[480px] text-justify text-lg line-clamp-[10] lg:mb-8 xl:mt-0"
              content={t("ByMatching gives students, companies")}
            />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-full border-2 px-16 py-5 transition-all duration-300 hover:bg-[#F8FAFC] hover:text-[#3341a9] xl:mt-auto"
            >
              {t("Read more")}
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
