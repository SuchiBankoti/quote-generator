import React, { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import "./SingleQuote.css";

const SingleQuote = (props) => {
  const { quote } = props;
  const bookmarks = useSelector((state) => state.bookmarks);
  const [isBookmarked, setIsBookmarked] = useState(() =>
    JSON.parse(localStorage.getItem(`${quote.id}`)) ? true : false
  );
  const dispatch = useDispatch();
  useEffect(() => {
    setIsBookmarked(() =>
      JSON.parse(localStorage.getItem(`${quote.id}`)) ? true : false
    );
  }, [quote.id]);

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
    function deleteMark(id_val) {
      const newBookmarks = { ...bookmarks };
      delete newBookmarks[id_val];
      return newBookmarks;
    }
    dispatch({
      type: "REMOVE_BOOKMARK",
      payload: deleteMark(quote.id),
    });
    localStorage.removeItem(`${quote.id}`);
    setIsBookmarked(false);
  }
  return (
    <div className="Quote-box">
      <div>{quote.content}</div>
      <div>-{quote.author}</div>
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
