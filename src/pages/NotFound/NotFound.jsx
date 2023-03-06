import React from "react";
import { images } from "../../constants";

const NotFound = () => {
  return (
    <>
      <div
        className="grid min-h-screen place-items-center"
        style={{
          backgroundImage: `url(${images.background_shapes})`,
        }}
      >
        <div className="text-center text-6xl text-white xl:text-9xl">
          <p className="text-center font-bold text-8xl xl:text-9xl">404</p>
          Page Not Found
        </div>
      </div>
    </>
  );
};

export default NotFound;
