import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { useDispatch } from "react-redux";
import "./SingleQuote.css";

const SingleQuote = (props) => {
  const { quote } = props;
  const dispatch = useDispatch();
  const [isBookmarked, setIsBookmarked] = useState(() =>
    JSON.parse(localStorage.getItem(`${quote.id}`)) ? true : false
  );
  function addBookmark() {
    dispatch({
      type: "UPDATE_BOOKMARK",
      payload: {
        [quote.id]: quote,
      },
    });
    localStorage.setItem(`${quote.id}`, JSON.stringify(quote.id));
    setIsBookmarked(true);
  }
  function removeBookmark() {
    dispatch({
      type: "UPDATE_BOOKMARK",
      payload: { [quote.id]: null },
    });
    localStorage.removeItem(`${quote.id}`);
    setIsBookmarked(false);
  }
  return (
    <div className="Quote-box">
      <div>{quote.content}</div>
      <div>{quote.author}</div>
      <div>
        {isBookmarked ? (
          <FaBookmark
            onClick={() => {
              removeBookmark();
            }}
            className="bookmark-icon"
            style={{ color: "yellow" }}
          />
        ) : (
          <FaBookmark
            onClick={() => {
              addBookmark();
            }}
            className="bookmark-icon"
            style={{ color: "white" }}
          />
        )}
      </div>
    </div>
  );
};
export default SingleQuote;
