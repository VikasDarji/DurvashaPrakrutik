import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "10px 20px",
        backgroundColor: "#f2f2f2",
        borderBottom: "2px solid #ccc",
      }}
    >
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
