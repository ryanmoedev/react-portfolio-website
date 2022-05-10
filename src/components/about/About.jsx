import React from "react";
import "./about.css";
import AboutLargeIcon from "./AboutLargeIcon";
import { FaAward } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <AboutLargeIcon />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Professional</small>
            </article>
            <article className="about__card">
              <MdOutlineWeb className="about__icon" />
              <h5>Fullstack</h5>
              <small>Frontend and Backend</small>
            </article>
            <article className="about__card" id="see-projects-card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <a href="#portfolio" id="see-projects-small">
                See Below
              </a>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio blanditiis nihil qui libero vitae,
            dignissimos iusto saepe recusandae a consequuntur debitis nisi quis veritatis magni facilis doloribus
            voluptate voluptatem! Commodi?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
