import React, { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const ScrollToTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrollToTop && (
        <div
          className="fixed bottom-5 right-5 z-[9999] grid h-9 w-9 place-items-center rounded-full bg-white outline outline-1 outline-white xl:outline-none"
          onClick={scrollUp}
        >
          <ChevronUpIcon className="h-6 w-6 text-black" strokeWidth={3} />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
