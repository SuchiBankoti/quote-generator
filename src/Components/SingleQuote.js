import React from "react";
import { FaBookmark } from "react-icons/fa";
import "./SingleQuote.css";

const SingleQuote = () => {
  return (
    <div className="Quote-box">
      <div>Quote</div>
      <div>autor</div>
      <FaBookmark className="bookmark-icon" />
    </div>
  );
};
export default SingleQuote;
