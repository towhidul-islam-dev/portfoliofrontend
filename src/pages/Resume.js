import React, { useEffect, useState } from 'react'
import Footer from "../pages/Footer"
import ResumeData from '../components/resumeData'
import FooterCopyright from "../pages/footercopyright"
import { FaGithub, FaMailBulk, FaPhoneAlt } from 'react-icons/fa'
import Towhid from "../assets/towhid-small.jpg"
import "../style/resume.css"

const Resume = () => {
    const [resume, setResume] = useState(ResumeData);
    useEffect(() => {
        console.log(resume);
    },[resume])
  return (
    <div className='resume_page'>
        <div className='resume'>
            <div className="resume_wrapper">
                <div className="resume_container">
                    <div className="resume_bio">
                        <div className="self_info">
                            <h2>Towhidul Islam</h2>
                            <p>front end developer</p>
                            <h6><span><FaMailBulk /></span>towhidulislam.dev@gmail.com</h6>
                            <h6><span><FaGithub /></span>https://github.com/imtowhidulislam</h6>
                            <h6><span><FaPhoneAlt /></span>01725101880</h6>
                        </div>
                        <div className="self_img">
                            <img src={Towhid} alt="towhidImage" />
                        </div>
                    </div>
                    <div className='main_content'>
                        <div className="edu_info">
                            <h2>Education</h2>
                            <p>I am a CSE graduate from Eastern University. I have completed my graduation in 2022</p>
                        </div>
                        <div className="skills">
                            <h3>Skills</h3>
                            <div className="skills_list">
                                <ul className='skills_content'>
                                    <li>Javascript</li>
                                    <li>React Js</li>
                                    <li>Tailwind Css</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Node Js</li>
                                    <li>GitHub</li>
                                </ul>
                            </div>
                        </div>
                        {
                            resume.map(res => {
                                const {projectName, project_info, projectLink, project_info1, projectLink1} = res;
                                return (
                                    <div className="project">
                                        <h3>{projectName}</h3>
                                        <div className="project_content">
                                            <ul>

                                                <li className='project_info'><span>#</span>{project_info}</li>
                                                <a className='project_link' href="#">{projectLink}</a>
                                            </ul>
                                            <ul>
                                                <li className='project_info'><span>#</span>{project_info1}</li>
                                                <a className='project_link' href="#">{projectLink1}</a>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
</div>
        <Footer />
        <FooterCopyright />
    </div>
  )
}

export default Resume;

 
