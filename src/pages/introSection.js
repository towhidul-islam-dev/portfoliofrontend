import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaCopyright,
  FaPhoneAlt,
  FaMoon,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaAngleLeft,
  FaAngleRight,
  FaInstagramSquare,
} from "react-icons/fa";
import { FiArrowUp, FiMail } from "react-icons/fi";
import { BsSunFill } from "react-icons/bs";
import Towhid from "../assets/towhid-small.jpg";
import "../style/container.css";

import heroImage1 from "../assets/heroimage1.jpg";
import Time from "./time";
const IntroSection = () => {
  return (
    <>
      <header className="header">
        <Time />
        <div className="container">
          <div className="intro_container">
            <div className="intro_child intro_child-1">
              <h1 className="intro_title">
                My name is <br />
                <strong>Towhidul Islam,</strong>
                I'm a <br />
              </h1>
              <span className="intro_skill">Frontend Developer</span>
              <p className="intro_des">
                To Know about me more just go through my about section. I have
                explained everyting up there elaborately
              </p>
              <div className="intro_links">
                <button className="intro_btn ripple_btn intro_btn-1">
                  let's Talk
                </button>
                <button className="intro_btn ripple_btn intro_btn-1">
                  Portfolio
                </button>
              </div>
              <div className="intro_icons_container">
                <div className="intro_social_links">
                  <p className="intro_social_link_title">Follow me on</p>
                  <a
                    href="https://www.facebook.com/T.TECHINTIMACY"
                    className="intro_social_link_links"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="www.linkedin.com/in/imtowhidulislam"
                    className="intro_social_link_links"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/imtowhidulislam"
                    className="intro_social_link_links"
                  >
                    <FaGithubSquare />
                  </a>
                  <a
                    href="https://www.instagram.com/thisistowhid/"
                    className="intro_social_link_links"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="intro_child intro_child-2">
              <img src={Towhid} alt="intro image" className="intro_img" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default IntroSection;
