import React from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import TechnicalExperience from "./components/TechnicalExperience";
import CampusInvolvement from "./components/CampusInvolvement";
import Projects from "./components/Projects";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import "./App.css";

const App = () => {
  useSmoothScroll();

  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        <Navbar />
        <main>
          <Home />
          <About />
          <Education />
          <TechnicalExperience />
          <CampusInvolvement />
          <Projects />
        </main>
      </div>
    </MotionConfig>
  );
};

export default App;
