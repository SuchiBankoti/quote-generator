import React, { useEffect } from "react";
import "./Bookmarks.css";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import SingleQuote from "./SingleQuote";
import axios from "axios";

const Bookmarks = () => {
  const allBookmarks = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();
  const ids = Object.keys({ ...localStorage });
  useEffect(() => {
    const requests = ids.map((id) =>
      axios.get(`https://api.quotable.io/quotes/${id}`)
    );
    axios
      .all(requests)
      .then((responses) => {
        const bookmarks = {};
        responses.forEach(({ data }) => {
          const bookmark = {
            id: data._id,
            author: data.author,
            content: data.content,
            tags: data.tags,
          };
          bookmarks[data._id] = bookmark;
        });
        dispatch({ type: "UPDATE_BOOKMARK", payload: bookmarks });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bookmarks-container">
        {Object.values(allBookmarks).map((ele, i) => (
          <SingleQuote key={i} quote={ele} />
        ))}
      </div>
    </div>
  );
};
export default Bookmarks;
