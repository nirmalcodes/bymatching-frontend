import React from "react";
import { Divider } from "../../components";

const AboutUs = () => {
  return (
    <>
      <div className="min-h-screen bg-[#001193] py-24 xl:py-28">
        <h3 className="header-text px-5 text-[#F8FAFC] xl:pl-20">
          The team behind ByMatching.
        </h3>

        <div className="mt-7 flex flex-row flex-wrap gap-x-10 gap-y-4 xl:mt-20">
          <div className="flex w-full overflow-hidden  xl:flex-1 xl:rounded-tr-full xl:rounded-br-full">
            <img
              src="https://lirp.cdn-website.com/a75d8971/dms3rep/multi/opt/Teamet-ByMatching--2880w.jpg"
              alt=""
              loading="lazy"
              className="h-auto max-h-[600px] min-h-[260px] w-full object-cover xl:aspect-video"
            />
          </div>

          <div className="flex w-full flex-col px-5 text-[#F8FAFC] sm:pl-10 xl:flex-1 xl:pl-5">
            <h5 className="subheader-text">
              Cooperation, curiosity and commitment.
            </h5>
            <Divider className={"my-3 h-[2px] max-w-[316px] bg-[#FFCD05]"} />
            <p className="mb-6 mt-4 h-fit max-w-[480px] text-justify text-lg line-clamp-[10] lg:mb-8 xl:mt-0">
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
              className="w-fit rounded-full border-2 px-16 py-5 transition-all duration-300 hover:bg-[#F8FAFC] hover:text-[#3341a9] xl:mt-auto"
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
