import React from "react";

const Title = (props) => {
  return (
    <div className="section-title">
      <h2>
        {props.frontText} <span>{props.backText}</span>
      </h2>
    </div>
  );
};

export default Title;
