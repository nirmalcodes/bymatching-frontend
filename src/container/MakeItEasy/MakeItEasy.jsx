import React from "react";
import { ImageContentRow } from "../../components";
import { images } from "../../constants";

const MakeItEasy = () => {
  return (
    <>
      <div className="min-h-screen py-24 xl:py-28">
        <div className="mb-28 px-5 text-[#0F172A] sm:px-10 xl:px-20">
          <h3 className="header-text mb-6">
            We make it easier for all parties.
          </h3>
          <p className="w-full max-w-[450px] text-justify text-lg font-medium">
            A collaboration between students and companies has advantages in
            both directions. Finding a good collaboration can be complicated and
            take time, let us take care of that instead.
          </p>
        </div>

        <div className="grid gap-y-12 xl:gap-y-28">
          <ImageContentRow
            imgURL={images.studentsFree}
            title="For students."
            content="Are you studying a course where a part requires collaboration with a company? Then you have to have good foresight and planning, not to mention a good network. It often ends with you stressing out a collaboration or you have to do the work ABOUT a company and without their participation.
            
            We at Bymatching make sure that you get a match within 48 hours. Simple and stress-free."
          />

          <ImageContentRow
            inverted={true}
            title="For companies."
            imgURL={images.companiesFree}
            content="The advantages of student cooperation are many. It gives you the opportunity to increase awareness of your company and also find new employees and develop with the latest research. But it is not simple. Which university or college has courses in the specific subject? Are there private actors that I can turn to? Who should I contact? ByMatching solves this, we help you all the way."
          />

          <ImageContentRow
            title="For course managers."
            imgURL={images.course_managersFree}
            content={`
            The service streamlines your work so that you can concentrate on things that are important. Most of the work is done by the student. They are the ones to look for companies and match.
            
            For you as the course manager, it is "business as usual", but without all the frustration of finding collaboration partners for your students.
            `}
          />
        </div>
      </div>
    </>
  );
};

export default MakeItEasy;
