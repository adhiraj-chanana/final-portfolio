import React from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "./App.css";

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        <Navbar />
        <Home />
        <Experience />
        <Projects />
      </div>
    </MotionConfig>
  );
};

export default App;
