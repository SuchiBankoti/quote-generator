import React from "react";
import "./Tags.css";
const Tags = () => {
  const data = ["history", "athletics", "humorous"];
  const options = data.map((tag, i) => (
    <option key={i} value={tag}>
      {tag}
    </option>
  ));
  return (
    <div className="Tags-container">
      <select>
        <option selected="selected">Select Tag</option>
        {options}
      </select>
    </div>
  );
};
export default Tags;
