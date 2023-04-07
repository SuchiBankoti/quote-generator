import React, { useEffect, useRef, useState } from "react";
import "./Tags.css";
import { useDispatch } from "react-redux";
const Tags = () => {
  const [tags, setTags] = useState([]);
  const myTag = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getTags(api) {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setTags(Array.from(data));
      } catch (error) {
        console.log(error);
      }
    }
    getTags("https://api.quotable.io/tags");
  }, []);

  function updateTag() {
    if (myTag.current.value) {
      console.log(myTag.current.value);
      dispatch({ type: "UPDATE_TAG", payload: myTag.current.value });
    }
  }

  return (
    <div className="Tags-container">
      <select onChange={updateTag} ref={myTag}>
        <option value="">Select Tag</option>
        {tags.map((tag, i) => (
          <option key={i} value={tag.name}>
            {tag.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Tags;
