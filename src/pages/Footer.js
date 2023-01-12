import React from "react";
import "../style/footer.css";
import "../style/container.css";

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
import Logo from "../assets/webexplainerLogo.svg";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="flex container">
          {/* <h1 class="footer_logo">Towhid</h1> */}
          <div className="footer_logo">
            <img src={Logo} alt="footer Logo" />
          </div>
          <div class="footer_content">
            <h2 class="footer_title">
              For Any Kind Of Query follow Or Contact Me On The Given Links.
            </h2>
            <div class="footer_links big_screen">
              <div class="footer_row footer-1">
                <h2>Email</h2>
                <p>
                  <FiMail /> Towhidulislam.dev@gmail.com
                </p>
                <p>
                  <FaFacebook /> Towhidul Islam
                </p>
              </div>
              <div class="footer_row footer-2">
                <h2>Featured</h2>
                <p>
                  <FaPhoneAlt /> 01725101880
                </p>
                <p>
                  <FaInstagram /> thisistowhid
                </p>
              </div>
              <div class="footer_row footer-3">
                <h2>work</h2>
                <p>
                  <FaGithubSquare /> github
                </p>
                <p>
                  <FaLinkedin /> LinkedIn
                </p>
              </div>
            </div>
            <div class="footer_links small_screen">
              <div class="footer_row footer-1">
                <h2>Email</h2>
                <p>
                  <FiMail /> Towhidulislam12995@gmail.com
                </p>
                <p>
                  <FaFacebook /> Towhidul Islam
                </p>
              </div>
              <div class="footer_row footer-2">
                <h2>Featured</h2>
                <p>
                  <FaPhoneAlt /> 01725101880
                </p>
                <p>
                  <FaInstagram /> thisistowhid
                </p>
              </div>
              <div class="footer_row footer-3">
                <h2>work</h2>
                <p>
                  <FaGithubSquare /> github
                </p>
                <p>
                  <FaLinkedin /> LinkedIn
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
