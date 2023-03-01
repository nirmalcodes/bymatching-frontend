import React from "react";
import { images } from "../../constants";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const OurProduct = () => {
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
              Our Product
            </h2>
          </div>
        </div>
        <div className="px-5 py-7 xl:mx-auto xl:w-[70%]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-row flex-wrap gap-5 lg:even:flex-row-reverse">
              <div className="">
                <img
                  src="https://api.lorem.space/image/book?w=450&h=620"
                  alt="book cover"
                  className="h-[360px] w-[256px] rounded-lg object-cover drop-shadow-md xl:h-[460px] xl:w-[320px]"
                />
              </div>
              <div className="flex-1 xl:px-2 xl:py-4">
                <div className="mb-8">
                  <h3 className="mb-2 text-4xl font-semibold">
                    Complete your thesis
                  </h3>
                  <p className="mb-5 text-lg">– a hybrid digital book</p>

                  <p className="mb-2 font-semibold">
                    A book for students writing theses.
                  </p>

                  <p className="mb-5">
                    The book's target group is students working on bachelor's,
                    master's theses or doctoral theses" written by professor
                    Henrik Hansson.
                  </p>

                  <p className="font-light">
                    The e-book will soon be available through Amazon in English,
                    French, Arabic, Ukrainian and Spanish. It will also be
                    available as an audiobook in English.
                  </p>
                </div>
                <div className="flex flex-wrap gap-y-4 gap-x-3">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 rounded-full bg-[#3341a9] py-3 px-6 text-[#f1f1f1]"
                  >
                    <ShoppingCartIcon className="h-6 w-6" />
                    Buy the book
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 rounded-full bg-[#3341a9] py-3 px-6 text-[#f1f1f1]"
                  >
                    Audiobook
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-5 lg:even:flex-row-reverse">
              <div className="">
                <img
                  src="https://api.lorem.space/image/book?w=450&h=620"
                  alt="book cover"
                  className="h-[360px] w-[256px] rounded-lg object-cover drop-shadow-md xl:h-[460px] xl:w-[320px]"
                />
              </div>
              <div className="flex-1 xl:px-2 xl:py-4">
                <div className="mb-8">
                  <h3 className="mb-2 text-4xl font-semibold">
                    Complete your thesis
                  </h3>
                  <p className="mb-5 text-lg">– a hybrid digital book</p>

                  <p className="mb-2 font-semibold">
                    A book for students writing theses.
                  </p>

                  <p className="mb-5">
                    The book's target group is students working on bachelor's,
                    master's theses or doctoral theses" written by professor
                    Henrik Hansson.
                  </p>

                  <p className="font-light">
                    The e-book will soon be available through Amazon in English,
                    French, Arabic, Ukrainian and Spanish. It will also be
                    available as an audiobook in English.
                  </p>
                </div>
                <div className="flex flex-wrap gap-y-4 gap-x-3">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 rounded-full bg-[#3341a9] py-3 px-6 text-[#f1f1f1]"
                  >
                    <ShoppingCartIcon className="h-6 w-6" />
                    Buy the book
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 rounded-full bg-[#3341a9] py-3 px-6 text-[#f1f1f1]"
                  >
                    Audiobook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProduct;
