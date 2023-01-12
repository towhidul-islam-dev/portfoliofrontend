import React, { useEffect, useState } from "react";
import { skillsData } from "../components/skillData";
import "../style/skill.css";
import "../style/container.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


const skillUrl = "http://localhost:3001/api/skill";

const Skills = () => {
  const [current, setCurrent] = useState(0);
  const [skill, setSkill] = useState([]);
  const [mySkills, setMySkills] = useState(skillsData);
  const length = skill.length;

  const showSkill = async () => {
    const res = await fetch(skillUrl);
    const skillData = await res.json();
    localStorage.setItem("skillData", JSON.stringify(skillData));
    return setSkill(skillData);
  };

  const moveLeft = (e) => {
    e.preventDefault();
    console.log("left");
    setCurrent(current <= 0 ? length : current - 1);
  };
  const moveRight = (e) => {
    e.preventDefault();
    console.log("Right");
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    showSkill();
  }, [current]);
  console.log(mySkills);

  useEffect(() => {
    const skilData = JSON.parse(localStorage.getItem("skillData"));
    skilData && setSkill(skilData);
    console.log(skilData);
    console.log(mySkills);
  },[])
  return (
    <>
      <div className="container">
        <h2 className="skill_main_title">some details of my skills</h2>

        <div class="skill_container">
          <div class="area_definer">
            <div class="skills1 slider">
              <div>
                {skill ? skill.map((skill, i) => {
                  const { _id, title, desc, year } = skill;
                  return (
                    <div
                      className={i === current ? "slide active" : "slide"}
                      key={_id}
                    >
                      <h2 className="skill_title text-blue-400">{title}</h2>
                      <p className="skill_desc">{desc}</p>
                      <h3 className="skill_exp">
                        experience : <strong>{year}</strong> years
                      </h3>
                    </div>
                  )
                }) : mySkills.map((skill, i) => {
                  const { _id, title, desc, year } = skill;
                  return (
                    <div
                      className={i === current ? "slide active" : "slide"}
                      key={_id}
                    >
                      <h2 className="skill_title text-blue-400">{title}</h2>
                      <p className="skill_desc">{desc}</p>
                      <h3 className="skill_exp">
                        experience : <strong>{year}</strong> years
                      </h3>
                    </div>
                  );
                })}
                
              </div>
              <div class="skill_navigate_container">
                <button
                  class="slider__btn slider__btn--left"
                  onClick={moveLeft}
                >
                  <FaAngleLeft className="icon" />
                </button>
                <button
                  class="slider__btn slider__btn--right"
                  onClick={moveRight}
                >
                  <FaAngleRight className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
