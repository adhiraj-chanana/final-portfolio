import React from "react";
import "./Navbar.css";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar sleek-navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li>
          <a href="mailto:adhirajmohanchanana@gmail.com" aria-label="Email Adhiraj">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href="https://github.com/adhiraj-chanana" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/u/73czutWcnN/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <FaCode />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/adhiraj-chanana" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;