import React from "react";
import "./Home.css";
import TextType from "./TextType";
import Threads from "./Threads";

const Home = () => {
  return (
    <section className="home" id="home">
      {/* Background Canvas */}
      <div className="threads-bg">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      {/* Foreground Text */}
      <div className="home-content">
        <h1 className="hero-name fade-in">
          Adhiraj Chanana
        </h1>
        <TextType
          text={[
            "I'm an Aspiring SWE",
            "Currently developing in AI, ML, and Backend",
            "Always exploring new ideas",
            "Feel free to connect"
          ]}
          typingSpeed={65}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-large enhanced-text fade-in-delay"
        />
      </div>
    </section>
  );
};

export default Home;
