import React from "react";
import { useTranslation } from "react-i18next";
import { ImageContentRow } from "../../components";
import { images } from "../../constants";

const MakeItEasy = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen py-24 xl:py-28">
        <div className="mb-28 px-5 text-[#0F172A] sm:px-10 xl:px-20">
          <h3 className="header-text mb-6">{t("We make it easier")}</h3>
          <p className="w-full max-w-[450px] text-justify text-lg font-medium">
            {t("A collaboration between students and companies")}
          </p>
        </div>

        <div className="grid gap-y-12 xl:gap-y-28">
          <ImageContentRow
            imgURL={images.students}
            title={t("For students")}
            content={t("Are you studying a course where a")}
          />

          <ImageContentRow
            inverted={true}
            imgURL={images.companies}
            title={t("For companies")}
            content={t("The advantages of student cooperation")}
          />

          <ImageContentRow
            imgURL={images.course_managers}
            title={t("For course managers")}
            content={t("The service streamlines your work")}
          />
        </div>
      </div>
    </>
  );
};

export default MakeItEasy;
