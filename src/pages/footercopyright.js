import React, { useEffect, useState } from "react";
import {
  FaGithubSquare,
  FaCopyright,
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import "../style/container.css";
import Logo from "../assets/webexplainerFavicon1.svg";

const FooterCopyright = () => {
  const [year, setYear] = useState(null);

  const setCurrentYear = () => {
    const thisYear = new Date().getFullYear();
    console.log(thisYear);
    setYear(thisYear);
  };
  useEffect(() => {
    setCurrentYear();
  }, []);

  return (
    <>
      <section className="footer_end">
        <div className="container" style={{ paddingBlock: "unset" }}>
          <div className="footer_copyright">
            <ul className="footer_links_icon">
              <li>
                <a href="https://github.com/imtowhidulislam">
                  <FaGithubSquare />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/T.TECHINTIMACY">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="www.linkedin.com/in/imtowhidulislam
          "
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/thisistowhid/">
                  <FaInstagramSquare />
                </a>
              </li>
            </ul>
            <p className="footer_copy">
              Copyright{" "}
              <span>
                <FaCopyright />
              </span>{" "}
              <span className="footer_date text-blue-600">{year}</span> All
              resource reserve to <span className="name">owhidul Islam</span>
            </p>
            <h2 className="footer-logo">
              <span>
                <img src={Logo} alt="Logo" />
              </span>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterCopyright;
