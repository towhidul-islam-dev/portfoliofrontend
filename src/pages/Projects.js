import React, { useEffect, useState } from "react";
import { projectsData } from "../components/skillData";
import "../style/project.css";
import { FaGithubSquare, FaLink } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import ProjectForm from "./projectForm";
import "../style/container.css";
const projectUrl = "http://localhost:3001/project";

const Projects = () => {
  // const projectsData = JSON.parse(localStorage.getItem("myProject"));
  const [project, setProject] = useState([]);
  const [myProject, setMyProject] = useState(projectsData);

  const showProject = async () => {
    const res = await fetch(projectUrl);
    const projData = await res.json();

    localStorage.setItem("myProject", JSON.stringify(projData));
  };

  useEffect(() => {
    showProject();
    const projects = JSON.parse(localStorage.getItem("myProject"));
    if(projects){
      setProject(projects);
    }
  }, [project]);

  
  return (
    <>
      <div className="container">
        <div class="project_container area_definer">
          <h2 class="project__title">Projects</h2>

          <div class="project_layout">
            <ProjectForm />
            <div class="projects">
              {project ? project.map((singleProject) => {
                const {
                  _id,
                  title,
                  category,
                  description,
                  sourceLink,
                  gitHub,
                } = singleProject;
                return (
                  <div className="single_project" key={_id}>
                    <div className="icon">
                      <i className="fab fa-js"></i>
                    </div>
                    <h2 className="project_name text-blue-400">{title}</h2>
                    <h4 className="project_ctg">{category}</h4>
                    <p className="project_dsc">{description}</p>
                    <div className="btn_container">
                      <button className="btn hover:bg-slate-100">
                        <a href={gitHub} className="btn_prj ripple_btn btn-1">
                          <FaGithubSquare className="project_icon" />
                        </a>
                      </button>
                      <button className="btn">
                        <a
                          href={sourceLink}
                          className="btn_prj ripple_btn btn-2"
                        >
                          <FiLink className="project_icon" />
                        </a>
                      </button>
                    </div>
                  </div>
                );
              }): myProject.map((singleProject) => {
                const {
                  _id,
                  title,
                  category,
                  description,
                  sourceLink,
                  gitHub,
                } = singleProject;
                return (
                  <div className="single_project" key={_id}>
                    <div className="icon">
                      <i className="fab fa-js"></i>
                    </div>
                    <h2 className="project_name text-blue-400">{title}</h2>
                    <h4 className="project_ctg">{category}</h4>
                    <p className="project_dsc">{description}</p>
                    <div className="btn_container">
                      <button className="btn hover:bg-slate-100">
                        <a href={gitHub} className="btn_prj ripple_btn btn-1">
                          <FaGithubSquare className="project_icon" />
                        </a>
                      </button>
                      <button className="btn">
                        <a
                          href={sourceLink}
                          className="btn_prj ripple_btn btn-2"
                        >
                          <FiLink className="project_icon" />
                        </a>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
