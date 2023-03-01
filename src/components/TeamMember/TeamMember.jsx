import React from "react";

const TeamMember = (props) => {
  return (
    <>
      <div
        className={`flex w-[346px] shrink-0 flex-col items-center justify-center gap-2 ${props.className}`}
      >
        <img
          src={props.imgURL}
          alt={`${props.name} - ${props.position}`}
          className="h-48 w-48 rounded-full object-cover drop-shadow-sm"
        />
        <div className="text-center">
          <p className="text-2xl font-semibold">{props.name}</p>
          <span className="font-medium text-[#7b7a7c]">
            {props.designation}
          </span>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
