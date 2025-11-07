import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="container">
    <h1 className="logi">Welcome to our Website    </h1>
    <li className="link">
      <Link to="/" >Home</Link>
      <Link to="/about" >About Me</Link>
      <Link to="/contact" >Contact Us</Link>
      </li>
    </nav>
  );
}

export default Navbar;