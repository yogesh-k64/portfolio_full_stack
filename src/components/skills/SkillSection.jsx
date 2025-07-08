import "./Skills.scss";

import Firebase from "../../assets/Firebase.svg";
import Git from "../../assets/Git.svg";
import JavaScript from "../../assets/JavaScript.svg";
import MySQL from "../../assets/MySQL.svg";
import React from "react";
import ReactImg from "../../assets/React.svg";
import Redis from "../../assets/Redis.svg";
import Redux from "../../assets/Redux.svg";
import Sass from "../../assets/Sass.svg";
import TypeScript from "../../assets/TypeScript.svg";
import Vite from "../../assets/Vite.js.svg";
import database from "../../assets/database.png";
import docker from "../../assets/Docker.svg";
import go from "../../assets/Go.svg";

const SkillCards = () => {
    const skills = [
        { name: "React", icon: ReactImg, level: "Advanced" },
        { name: "TypeScript", icon: TypeScript, level: "Advanced" },
        { name: "Redux", icon: Redux, level: "Advanced" },
        { name: "Vite", icon: Vite, level: "Advanced" },
        { name: "Firebase", icon: Firebase, level: "Intermediate" },
        { name: "JavaScript", icon: JavaScript, level: "Advanced" },
        { name: "Sass", icon: Sass, level: "Intermediate" },
        { name: "Golang", icon: go, level: "Advanced" },
        { name: "Docker", icon: docker, level: "Intermediate" },
        { name: "MySQL", icon: MySQL, level: "Expert" },
        { name: "Redis", icon: Redis, level: "Intermediate" },
        { name: "Rest API", icon: database, level: "Intermediate" },
        { name: "Git", icon: Git, level: "Intermediate" },
    ];

    return (
        <div className="skills-section">
            <h2>Professional Skillset</h2>
            <div className="skill-cards-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-icon">
                            <img src={skill.icon} />
                        </div>
                        <h3>{skill.name}</h3>
                        {/* <p className="skill-level">{skill.level}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillCards;