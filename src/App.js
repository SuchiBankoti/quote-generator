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
