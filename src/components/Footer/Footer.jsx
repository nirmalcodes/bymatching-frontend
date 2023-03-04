import React from "react";
import { images } from "../../constants";
import FooterLinks from "../FooterLinks/FooterLinks";
import SocialMediaBtn from "../SocialMediaBtn/SocialMediaBtn";

const footerLinks = [
  {
    heading: "ByMatching",
    links: [
      {
        title: "About us",
        linkUrl: "#",
      },
      {
        title: "The team",
        linkUrl: "#",
      },
    ],
  },
  {
    heading: "Our product",
    links: [
      {
        title: "For students",
        linkUrl: "#",
      },
      {
        title: "For companies",
        linkUrl: "#",
      },
      {
        title: "For course managers",
        linkUrl: "#",
      },
    ],
  },
  {
    heading: "Important",
    links: [
      {
        title: "Privacy policy",
        linkUrl: "#",
      },
      {
        title: "Terms and Conditions",
        linkUrl: "#",
      },
    ],
  },
];

const Footer = (props) => {
  return (
    <>
      <div className="border-t border-white/20 bg-[#001193] px-5 pt-12 lg:px-20 lg:pt-16">
        <div className="flex flex-row flex-wrap gap-x-4">
          <div className="mb-6 h-full w-1/3">
            <img
              src={images.brandLogo}
              alt="ByMatching"
              className="h-auto w-full max-w-[220px]"
            />
          </div>

          {footerLinks?.map((linkSet, index) => (
            <div className="mb-4 w-full md:flex-1" key={index}>
              <FooterLinks
                heading={linkSet?.heading}
                linksGroup={linkSet?.links}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap-reverse gap-4">
          <div className="place w-full md:flex-1">
            <div className="flex items-center gap-4">
              <SocialMediaBtn name="facebook" url="https://www.facebook.com" />
              <SocialMediaBtn
                name="instagram"
                url="https://www.instagram.com"
              />
              <SocialMediaBtn name="linkedin" url="https://www.linkedin.com" />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between text-[#F8FAFC]">
          <div className="py-4 text-xs">
            ©{new Date().getFullYear()}{" "}
            <span className="font-semibold">ByMatching AB</span> . All Rights
            Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
