import React from "react";
import { images } from "../../constants";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="grid min-h-screen place-items-center"
        style={{
          backgroundImage: `url(${images.background_shapes})`,
        }}
      >
        <div className="text-center text-white">
          <p className="text-center text-8xl font-bold xl:text-9xl">404</p>
          <p className="text-6xl font-medium xl:text-9xl">Page Not Found</p>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="my-16 rounded-full border-2 border-white bg-white/10 py-3 px-12 text-lg font-medium text-white backdrop-blur-2xl transition-all duration-300"
          >
            Go back to previous page
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
