import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
//import Skills from "./components/Skills";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Experience />
      <Projects />
    </div>
  );
};

export default App;
