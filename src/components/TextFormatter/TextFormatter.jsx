import React from "react";

const TextFormatter = ({ className, content }) => {
  const rawText = content.replace(/(?:\r\n|\r|\n)/g, "<br />");
  const formattedText = { __html: rawText };
  return (
    <>
      <p className={className} dangerouslySetInnerHTML={formattedText} />
    </>
  );
};

export default TextFormatter;
