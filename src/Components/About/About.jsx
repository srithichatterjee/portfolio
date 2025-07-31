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
                            Hi, I'm Srithi Chatterjee — a tech enthusiast with skills in
                            Python, Java, web development, and machine learning. I enjoy
                            building practical, user-friendly projects like AI chatbots, smart
                            IoT systems, and responsive websites. I'm always exploring new
                            technologies and love creating solutions that make a real impact.
                        </p>

                        <p>
                            {" "}
                            love building smart, user-focused projects that solve real-world
                            problems
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML&CSS</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Machine Learning</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Python</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>CODECHEF</h1>
                    <p>1 Star in codechef with rating 1260</p>
                </div>
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
            </div>
        </div>
    );
};

export default About;
