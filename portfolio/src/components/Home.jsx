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
        <p className="hero-subhead fade-in">
          Full-stack engineer building AI/LLM products — CS @ Michigan State, Fall 2027
        </p>
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
        <div className="hero-cta-row fade-in-delay">
          <a
            className="hero-cta hero-cta-primary"
            href="mailto:adhirajmohanchanana@gmail.com"
          >
            Email Me
          </a>
          <a className="hero-cta hero-cta-secondary" href="#projects">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
