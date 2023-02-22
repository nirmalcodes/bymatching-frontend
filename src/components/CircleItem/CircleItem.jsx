import React from "react";

const CircleItem = (props) => {
  return (
    <>
      <div className="flex w-full flex-col items-center sm:w-auto">
        <div className="flex flex-row-reverse items-center justify-center gap-4 sm:flex-col">
          <div className="circle-item">
            {props.content
              ? props.content
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </div>
          <h3 className="text-3xl text-[#F8FAFC] xl:text-6xl">
            {props.caption ? props.caption : "Caption"}
          </h3>
        </div>
      </div>
    </>
  );
};

export default CircleItem;
