import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookmarks from "./Components/Bookmarks";
import Home from "./Components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Bookmarks" element={<Bookmarks />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;

// async function GetQuote(api) {
//   try {
//     const response = await fetch(api);
//     const data = await response.json();
//     print(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// // GetQuote("https://api.quotable.io/random");
// // function print(data) {
// //   console.log(data);
// // }
// async function GetQuotebyTag(api, tag) {
//   try {
//     const response = await fetch(`${api}?tags=${tag}`);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// // 'https://api.quotable.io/random?tags=history'
// GetQuotebyTag("https://api.quotable.io/random", "history");
