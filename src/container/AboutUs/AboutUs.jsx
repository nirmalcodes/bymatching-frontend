import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="min-h-screen bg-[#001193] py-28">
        <h3 className="mb-20 pl-20 text-6xl font-extrabold text-[#F8FAFC]">
          The team behind ByMatching.
        </h3>
        <div className="flex flex-row flex-wrap gap-x-[60px]">
          <div className="flex aspect-video w-full overflow-hidden xl:flex-1 xl:rounded-tr-full xl:rounded-br-full">
            <img
              src="https://lirp.cdn-website.com/a75d8971/dms3rep/multi/opt/Teamet-ByMatching--2880w.jpg"
              alt=""
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col pr-[188px] text-[#F8FAFC] xl:flex-1">
            <h5 className="max-w-[650px] text-[32px] font-bold">
              Cooperation, curiosity and commitment.
            </h5>
            <div className="my-3 h-[2px] max-w-[316px] bg-[#FFCD05]"></div>
            <p className="mb-auto h-fit max-w-[480px] text-justify text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur cursus leo cursus sed id. Sed aliquam turpis lacus ut
              amet, in purus ut. Nec adipiscing vestibulum egestas libero
              tristique tempus ut in.
              <br />
              <br />
              Eu ipsum lorem quisque lectus cursus faucibus sit. Cursus amet,
              tellus leo orci tincidunt proin porttitor donec. Nulla facilisis
              non suscipit nunc, a, congue. congue.
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
      </div>
    </>
  );
};

export default AboutUs;
