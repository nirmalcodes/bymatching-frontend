import React from "react";

const LanguageOptions = (props) => {
  return (
    <>
      <select onChange={props.onChange}>
        <option>Select Language</option>
        <option value={"en-GB"}>English</option>
        <option value={"sv"}>Swedish</option>
      </select>
    </>
  );
};

export default LanguageOptions;
