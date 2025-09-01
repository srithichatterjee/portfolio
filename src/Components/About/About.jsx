import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";
const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>
                            Hi, I’m Srithi an enthusiastic learner driven by a deep curiosity for Artificial Intelligence and its potential to shape the future. I am passionate about exploring emerging technologies, understanding how they work, and applying them to solve real-world problems. My journey in AI is fueled by a desire to continuously learn, innovate, and contribute to impactful projects that bridge creativity with technology.
                        </p>
                        <p>
                            {" "}
                            TECH STACK
                        </p>
                    </div>
                    <div className="about-skills-grid">
                        <div className="skill-block">HTML&CSS</div>
                        <div className="skill-block">React JS</div>
                        <div className="skill-block">Machine Learning</div>
                        <div className="skill-block">Python</div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>CODECHEF</h1>
                    <p>1 Star in codechef with rating 1291</p>
                </div>
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <div className="about-achievement">
                    <h1>LeetCode</h1>
                    <p>Highest Rating 1409</p>
                </div>
            </div>
        </div>
    );
};

export default About;
