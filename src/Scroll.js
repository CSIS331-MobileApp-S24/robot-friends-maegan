import React from "react";
import "./Scroll.css";

const Scroll = (props) => {
  return (
    <div className="scrollBar overflow-y-scroll  ba bw2 bc-black">
      {props.children}
    </div>
  );
};

export default Scroll;
