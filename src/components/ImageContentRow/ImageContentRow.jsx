import React from "react";
import { images } from "../../constants";

const ImageContentRow = (props) => {
  const printableText = props.content.replace(/(?:\r\n|\r|\n)/g, "<br />");
  const dangerousText = { __html: printableText };
  return (
    <>
      {props.inverted === true ? (
        <div className="flex flex-row-reverse flex-wrap gap-x-10 gap-y-4 text-[#0F172A]">
          <div className="flex w-full xl:flex-1">
            <div className="flex w-full overflow-hidden  xl:flex-1 xl:rounded-tl-full xl:rounded-bl-full">
              <img
                src={props.imgURL ? props.imgURL : images.imgPlaceholder}
                alt={props.title ? props.title : "image_placeholder"}
                className="h-auto max-h-[600px] min-h-[260px] w-full object-cover xl:aspect-video"
              />
            </div>
          </div>
          <div className="flex w-full flex-col px-5 xl:flex-1 xl:py-9 xl:pl-20">
            <h3 className="mb-[6px] text-2xl font-bold">
              {props.title ? props.title : "Undefined Title"}
            </h3>
            <div className="mb-3 h-[2px] w-[104px] bg-[#FF00FF]" />
            <p
              className=" font-medium pr-20"
              dangerouslySetInnerHTML={dangerousText}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-row flex-wrap gap-x-10 gap-y-4 text-[#0F172A]">
          <div className="flex w-full xl:flex-1">
            <div className="flex w-full overflow-hidden  xl:flex-1 xl:rounded-tr-full xl:rounded-br-full">
              <img
                src={props.imgURL ? props.imgURL : images.imgPlaceholder}
                alt={props.title ? props.title : "image_placeholder"}
                className="h-auto max-h-[600px] min-h-[260px] w-full object-cover xl:aspect-video"
              />
            </div>
          </div>
          <div className="flex w-full flex-col px-5 xl:flex-1 xl:py-9">
            <h3 className="mb-[6px] text-2xl font-bold">
              {props.title ? props.title : "Undefined Title"}
            </h3>
            <div className="mb-3 h-[2px] w-[104px] bg-[#FF00FF]" />
            <p
              className=" font-medium pr-20"
              dangerouslySetInnerHTML={dangerousText}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageContentRow;
