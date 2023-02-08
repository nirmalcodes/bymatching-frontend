import React from "react";

const Products = () => {
  return (
    <>
      <div className="min-h-screen bg-[#001193] py-28">
        <h3 className="mb-20 pl-20 text-6xl font-extrabold text-[#F8FAFC]">
          Our Products
        </h3>
        <div className="flex flex-row flex-wrap gap-x-[60px]">
          <div className="flex aspect-video w-full overflow-hidden xl:mb-[68px] xl:flex-1 xl:rounded-tr-full xl:rounded-br-full">
            <img
              src="https://api.lorem.space/image/furniture?w=1280&h=720"
              alt=""
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col pr-[188px] text-[#F8FAFC] xl:flex-1">
            <h5 className="max-w-[650px] text-[32px] font-bold">
              A matching platform between companies, students and course
              managers.
            </h5>
            <div className="my-3 h-[2px] max-w-[316px] bg-[#FFCD05]"></div>
            <p className="mb-12 h-fit max-w-[480px] text-justify text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur cursus leo cursus sed id. Sed aliquam turpis lacus ut
              amet, in purus ut. Nec adipiscing vestibulum egestas libero
              tristique tempus ut in tristique. Nisl neque, elementum at egestas
              auctor vehicula pharetra est ullamcorper. Vitae tortor suspendisse
              nulla consequat commodo ipsum phasellus elit. Ac, pharetra netus
              dui parturient amet amet volutpat. Velit, velit consequat commodo
              amet.
              <br />
              <br />
              Dui fermentum vivamus tempus consectetur. Eu ipsum lorem
              quisque lectus cursus faucibus sit. Cursus amet, tellus leo orci
              tincidunt proin porttitor donec. Nulla facilisis non suscipit
              nunc, a, congue.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-full border-2 px-16 py-5"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="mt-[188px] mb-36 flex flex-row items-center xl:justify-around">
          <div className="flex aspect-square w-[200px] flex-col items-center justify-center rounded-full bg-[#9FA2E7] p-8 text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-14 w-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <div className="flex aspect-square w-[200px] flex-col items-center justify-center rounded-full bg-[#9FA2E7] p-8 text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-14 w-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <div className="flex aspect-square w-[200px] flex-col items-center justify-center rounded-full bg-[#9FA2E7] p-8 text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-14 w-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <div className="flex aspect-square w-[200px] flex-col items-center justify-center rounded-full bg-[#9FA2E7] p-8 text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
