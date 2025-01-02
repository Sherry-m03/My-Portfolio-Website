import React, { useEffect, useState } from "react";

function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    portfolioSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home">
      <div class="menu">
        <div class="circle"></div>
      </div>

      <div className="navbar">
        <button className="menu-icon" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navlinks ${isMenuOpen ? "active" : ""}`}>
          <button onClick={scrollToContact}>Contact</button>
          <button onClick={scrollToPortfolio}>Portfolio</button>
          <button onClick={scrollToAbout}>About</button>
          <button>Home</button>
        </ul>
        <div className="logo">
          <h2>Shreya Masta</h2>
        </div>
      </div>

      <div className="heading">
        <h1>"Turning Code into Reality"</h1>
      </div>
    </div>
  );
}

export default Home;
