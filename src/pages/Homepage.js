import React from "react";
import { Projects } from "../container/index";
import { GrInstagram } from "react-icons/gr";
import Skills from "../pages/Skills";
import Footer from "../pages/Footer";
import IntroSection from "./introSection";
import About from "./About";
import ProjectForm from "./projectForm";
import FooterCopyright from "./footercopyright";

import "../style/mackup.css";

const Homepage = () => {
  return (
    <div class="dark-mood">
      <div class="section">
        <IntroSection />
        {/*  About Section */}
        <About />
      </div>
      {/* Poject Section */}
      <Projects />

      {/* Skill Section */}
      <Skills />
      {/*  Footer Section */}
      <Footer />
      <FooterCopyright />
      <div className="demo">
        {/* <img src="http://unsplash.it/1000/1000?image=564" alt="" /> */}
      </div>
    </div>
  );
};

export default Homepage;
