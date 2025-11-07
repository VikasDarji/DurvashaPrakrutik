import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Welcome to MyBusiness</h1>
        <p>We help you grow with innovation, trust, and technology.</p>
     {/* <a class="inline-block rounded-2xl bg-blue-600 px-8 py-4 text-white text-base font-medium shadow-md transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600" href="/contact">Get In Touch</a> */}
      </div>
    </section>
  );
}

export default Home;