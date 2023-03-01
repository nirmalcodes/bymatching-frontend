import React from "react";

const FooterLinks1 = (props) => {
  return (
    <>
      <h5 className="mb-2 font-bold text-[#F8FAFC]">{props?.heading}</h5>
      <ul>
        {props.linksGroup?.map((link, index) => (
          <li className="mb-2" key={index}>
            <a href={link?.linkUrl} className="text-sm text-[#f8fafc]">
              {link?.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinks1;
