import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a
            href="https://github.com/ryanmoedev/sorting-visualizer"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://ryanmoedev.github.io/sorting-visualizer/"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;