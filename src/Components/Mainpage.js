import React from "react";
import SingleQuote from "./SingleQuote";
import "./Mainpage.css";
import Tags from "./Tags";

const Mainpage = () => {
  return (
    <div className="Mainpage">
      <SingleQuote />
      <Tags />
      <button>Next Quote</button>
    </div>
  );
};
export default Mainpage;
