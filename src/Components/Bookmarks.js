import React, { useEffect, useState } from "react";
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

  console.log(Object.values(allBookmarks));

  return (
    <div>
      <Navbar />
      <div>Bookmarks</div>
    </div>
  );
};
export default Bookmarks;
