import React from "react";
import "./Hello.css";

const Hello = ({ greeting }) => {
  return (
    <div className="f1 tc">
      <h1 className="tc">Hello World</h1>
      <p>Welcome to CSIS331</p>
      <p>{greeting}</p>
    </div>
  );
};

export default Hello;
