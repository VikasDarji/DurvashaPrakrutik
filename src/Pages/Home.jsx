import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Welcome to MyBusiness</h1>
        <p>We help you grow with innovation, trust, and technology.</p>
        <button className="btn-primary">Get Started</button>
      </div>
    </section>
  );
}

export default Home;