import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => (
  <section id="experience">
    <h5>The skills that I have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">

            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h5>HTML</h5>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">

            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h5>CSS</h5>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">

            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h5>React</h5>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">

            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h5>Next</h5>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">

            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h5>Tailwind</h5>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">

            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h5>Typescript</h5>
              <small className="text-light">Experienced</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">

            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h5>MongoDB</h5>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">

            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h5>MySQL</h5>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">

            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h5>Node</h5>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">

            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h5>Postgresql</h5>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">

            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h5>Express</h5>
              <small className="text-light">Experienced</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
