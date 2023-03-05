import React from "react";
import { images } from "../../constants";
import { ProductRowView } from "../../components";
import { useTranslation } from "react-i18next";

const OurProduct = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="min-h-screen">
        <div
          className={`relative h-[50vh] w-full bg-cover bg-center after:absolute after:top-0 after:left-0 after:block after:h-full after:w-full lg:h-[50vh] xl:h-[70vh]`}
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0 100%)",
            backgroundImage: `url(${images.background_shapes})`,
          }}
        >
          {/* <div className="absolute top-0 left-0 z-30 grid h-full w-full place-items-center bg-black/30" /> */}
          <div className="absolute top-0 left-0 z-30 grid h-full w-full place-items-center">
            <h2 className="mb-6 text-center text-6xl font-bold text-white drop-shadow-2xl xl:text-8xl">
              {t("Our Product")}
            </h2>
          </div>
        </div>
        <div className="px-5 pt-8 pb-28 xl:mx-auto xl:w-[70%]">
          <div className="flex flex-col gap-8">
            <ProductRowView />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProduct;
