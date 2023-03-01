import React from "react";
import { TeamMember } from "../../components";
import { images } from "../../constants";

const AboutUs = () => {
  return (
    <>
      <div className="min-h-screen bg-[#3341a9] text-[#f1f1f1]">
        <div
          className={`relative h-[50vh] w-full bg-[url('https://lirp.cdn-website.com/a75d8971/dms3rep/multi/opt/Teamet-ByMatching--2880w.jpg')] bg-cover bg-center after:absolute after:top-0 after:left-0 after:block after:h-full after:w-full lg:h-[50vh] xl:h-[70vh]`}
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0 100%)",
          }}
        >
          <div className="absolute top-0 left-0 z-30 grid h-full w-full place-items-center bg-black/30" />
          <div className="absolute top-0 left-0 z-30 grid h-full w-full place-items-center">
            <h2 className="mb-6 text-center text-6xl font-bold text-white drop-shadow-2xl xl:text-8xl">
              About Us
            </h2>
          </div>
        </div>
        <div className="px-5 py-2 xl:mx-auto xl:w-[70%]">
          <p className="mb-8 text-center text-xl xl:mx-auto xl:max-w-[760px] xl:text-4xl">
            We create cooperation between{" "}
            <span className="font-bold">Academia</span> and{" "}
            <span className="font-bold">Society</span> with the help of{" "}
            <span className="font-bold">Creative Solutions</span>. We are
            convinced that there is a place in the market waiting to be filled.
          </p>
          <div className="mb-16">
            <div className="mx-auto xl:w-[70%]">
              <h3 className="mb-6 text-4xl font-semibold">About ByMatching</h3>
              <p className="text-lg">
                ByMatching gives{" "}
                <span className="font-bold">Students, Companies</span> and{" "}
                <span className="font-bold">Educational Actors</span> a platform
                to gather on and then be matched and start collaborating with
                each other. We make the match within 48 hours.
                <br />
                <br />
                ByMatching was founded with the vision of simplifying
                collaboration between business and higher education providers.
                <br />
                We think it should be easy to establish contact with students if
                you want to collaborate as a company, but also to take part in
                the latest in research, gain new perspectives that can be put to
                practical use and meet future talents early in their studies. It
                should also be easy for students to get in touch with companies.
                Regardless of industry, size of company or geographical
                location.
                <br />
                <br />
                Our platform digitizes and streamlines the contact between
                student and company or organization. With Bymatching, users can
                resource-efficiently find the right match at the right time.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="min-h-screen xl:py-9">
        <div className="mx-auto p-5 xl:w-[70%]">
          <div className="mb-8 xl:mb-16">
            <h3 className="mb-6 text-4xl font-semibold">The team</h3>
            <p className="text-lg">
              We are a team with{" "}
              <span className="font-bold"> many years of experience</span> in
              <span className="font-bold">
                innovation, sales, research
              </span> and <span className="font-bold">development</span>. We
              have developed a solution that makes it easy for companies and
              organizations to find collaboration with students of higher
              education. We also want students to have a larger selection of
              companies to collaborate with.
              <br />
              <br />
              We are fully aware of the difficulties that both society and
              academics face. We are also conscious of the advantages that
              collaboration may bring to both parties.
              <br />
              We want to make it easier for students to collaborate with
              companies - to work together, develop, share and acquire new
              experiences.
              <br />
              <br />
              We at ByMatching strive to provide{" "}
              <span className="font-bold">long-term</span> and{" "}
              <span className="font-bold">
                sustainable competitive advantages
              </span>{" "}
              and <span className="font-bold">value for our customers</span>.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <TeamMember
              imgURL="https://api.lorem.space/image/face?w=380&h=380"
              name="Paola Diaz"
              designation="CEO, Founder"
            />
            <TeamMember
              imgURL="https://api.lorem.space/image/face?w=380&h=380"
              name="Peter Söderstrom"
              designation="Sales Manager, Partner"
            />
            <TeamMember
              imgURL="https://api.lorem.space/image/face?w=380&h=380"
              name="Henrik Hansson"
              designation="Innovation Manager, Partner"
            />
            <TeamMember
              imgURL="https://api.lorem.space/image/face?w=380&h=380"
              name="Nathalie Kuemmerling"
              designation="Marketing Manager, Partner"
            />
            <TeamMember
              imgURL="https://api.lorem.space/image/face?w=380&h=380"
              name="Madhawa Manamperi"
              designation="Technology Manager"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
