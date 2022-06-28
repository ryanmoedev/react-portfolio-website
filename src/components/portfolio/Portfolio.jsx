import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/sorting-visualizer-cover.png";
import IMG2 from "../../assets/pathfinding-visualizer-cover.png";

const portfolio_data = [
  {
    id: 1,
    image: IMG1,
    title: "Sorting Algorithms Visualizer",
    github: "https://github.com/ryanmoedev/sorting-visualizer",
    demo: "https://ryanmoedev.github.io/sorting-visualizer/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Pathfinding Algorithms Visualizer",
    github: "https://github.com/ryanmoedev/pathfinder-visualizer",
    demo: "https://ryanmoedev.github.io/pathfinder-visualizer/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolio_data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="sorting-visualizer-img" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-actions">
                <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
