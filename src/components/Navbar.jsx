import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
    
      <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
        Home
      </Link>
      <Link to="/about" style={{ textDecoration: "none", color: "#333" }}>
        About Me
      </Link>
      <Link to="/contact" style={{ textDecoration: "none", color: "#333" }}>
        Contact Us
      </Link>
    </nav>
  );
}

export default Navbar;
