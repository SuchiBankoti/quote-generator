import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleQuote from "./SingleQuote";
import "./Mainpage.css";
import Tags from "./Tags";
import axios from "axios";

const Mainpage = () => {
  const [quote, setQuote] = useState({});
  const tag = useSelector((state) => state.selectedTag);
  async function getQuote(api) {
    const res = await axios.get(api);
    const data = res.data;
    setQuote({
      id: data._id,
      author: data.author,
      content: data.content,
      tags: data.tags,
    });
  }
  useEffect(() => {
    getQuote("https://api.quotable.io/random");
  }, []);
  useEffect(() => {
    getQuote(`https://api.quotable.io/random?${tag}`);
  }, [tag]);
  return (
    <div className="Mainpage">
      <SingleQuote quote={quote} />
      <Tags />
      <button onClick={() => getQuote("https://api.quotable.io/random")}>
        Next Quote
      </button>
    </div>
  );
};
export default Mainpage;
