import React from "react";
import "./Home.css";
import TextType from "./TextType";
import SplashCursor from './SplashCursor'


const Home = () => {
  return (
    <section className="home" id="home">
        <SplashCursor />

      <div className="home-content" style={{ zIndex: 1, position: 'relative' }}>
        <h1 className="hero-name">Adhiraj Chanana</h1>
        <TextType
          text={[
            "I'm a full-stack developer",
            "I love building things with React, Python, and AI",
            "Always exploring new ideas"
          ]}
          typingSpeed={65}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-large enhanced-text"
        />
      </div>
    </section>
  );
};

export default Home;