import React from 'react';
import './portfolio.css';
import data from '../../data/dataPortfolio';

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      {
        data.map(({
          id, title, github, image, demo,
        }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} style={{ height: '200px' }} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} target="_blank" className="btn" rel="noreferrer">Github</a>
              <a href={demo} target="_blank" className="btn btn-primary" rel="noreferrer">Live Demo</a>
            </div>
          </article>
        ))
      }
    </div>
  </section>
);

export default Portfolio;
