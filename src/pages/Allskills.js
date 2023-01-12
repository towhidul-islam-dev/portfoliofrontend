import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaJsSquare,FaGithub, FaSass, FaFigma,FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss,SiMongodb} from "react-icons/si";

import Footer from './Footer'
import FooterCopyright from './footercopyright'
import "../style/mySkills.css";
import "../style/container.css";


const Allskills = () => {
  return (
    <>
    <div className="my_skills container">
        <h1 className='allskill_title'>My Skills Stack</h1>
        <div className="skill">
            <li>
                <FaCss3 />
            </li>
            <li>
                <FaHtml5 />
            </li>
            <li>
                <FaJsSquare />
            </li>
            <li>
                <FaReact />
            </li>
            <li>
                <SiTailwindcss />
            </li>
            <li>
                <FaSass />
            </li>
            <li>
                <FaFigma />
            </li>
            <li>
                <FaNodeJs />
            </li>
            <li>
                <SiMongodb />
            </li>
        </div>
        {/* <div className="skill_wrapper  container">
            <div className="skills_container">
                <div className='skill_logo'>
                    <FaReact/>
                </div>
                <div className='skill_des_container'>
                    <div className='skill_description'>
                        <h2 className='skill-title'>React Js</h2>
                        <p className='skill_details'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae alias tempora delectus minima rerum eligendi eum sequi culpa laudantium modi.</p>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
    <Footer/>
    <FooterCopyright />
    </>
  )
}

export default Allskills