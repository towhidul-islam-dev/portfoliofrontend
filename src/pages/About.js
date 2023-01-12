import React from "react";
import Towhid from "../assets/towhid-small.jpg";
import "../style/about.css";
import "../style/container.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div class="intro_container1 about_section">
          <div class="intro_child intro_child-2">
            <img src={Towhid} alt="intro image" class="intro_img about_img" />
          </div>
          <div class="intro_child intro_child-1 about_content">
            <h1 class="intro_title about_title">Towhidul Islam</h1>
            <span class="intro_skill">Frontend Developer</span>
            <p class="about_des">
              so, this is <strong>Towhidul Islam</strong>. I'm a
              <strong> CSE Graduate</strong>. And by profession i'm a web
              developer to be more precise a frontend developer. I'm the oldest
              child of my parents and i have a younger sister. So in short ewe
              have a four members family. So, Now if we talk about the hobbies
              then i have to confess taht i'm really fascinated about sports and
              as well as learnning english language and i'm slightly into the
              fitness things.And that is all about me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
