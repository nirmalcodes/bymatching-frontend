import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaShareAlt,
} from "react-icons/fa";

const SocialMediaBtn1 = (props) => {
  return (
    <>
      <a
        href={props?.url ? props?.url : "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative inline-block h-8 w-8 rounded-full text-center leading-8 text-white 
        ${
          props?.name == "facebook"
            ? "bg-[#3b5998]"
            : props.name == "instagram"
            ? "bg-[#d62976]"
            : props.name == "linkedin"
            ? "bg-[#0072b1]"
            : props.name == "twitter"
            ? "bg-[#00acee]"
            : props.name == "youtube"
            ? "bg-[#FF0000]"
            : "bg-gray-700"
        }`}
      >
        {props?.name == "facebook" ? (
          <FaFacebookF className="inline-block align-baseline" />
        ) : props.name == "instagram" ? (
          <FaInstagram className="inline-block align-baseline" />
        ) : props.name == "linkedin" ? (
          <FaLinkedinIn className="inline-block align-baseline" />
        ) : props.name == "twitter" ? (
          <FaTwitter className="inline-block align-baseline" />
        ) : props.name == "youtube" ? (
          <FaYoutube className="inline-block align-baseline" />
        ) : (
          <FaShareAlt className="inline-block align-baseline" />
        )}
      </a>
    </>
  );
};

export default SocialMediaBtn1;
