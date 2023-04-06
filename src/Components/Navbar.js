import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/Bookmarks" className="link">
        Bookmarks
      </Link>
    </div>
  );
};
export default Navbar;
