import React from "react";

const SectionWrapper = (Component, idName, className) =>
  function HOC() {
    return (
      <div id={idName} className={className}>
        <Component />
      </div>
    );
  };

export default SectionWrapper;
