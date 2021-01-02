import React from "react";
import { Container } from "react-bootstrap";
import imageHeader from "../images/illustration-intro.png";
function Header() {
  return (
    <main className="main">
      <div className="hero-img" data-aos="fade-up">
        <img src={imageHeader} alt={imageHeader} />
      </div>
      <div className="hero-txt container">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <a href="#" className="main-btn">
          Get Started
        </a>
      </div>
    </main>
  );
}
export default Header;
