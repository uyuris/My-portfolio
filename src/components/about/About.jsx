import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import './about.css';
// import ME from '../../assets/me.jpg';

const About = () => (
  <section id="about">
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      {/* <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Me" className="about_img" />
        </div>
      </div> */}
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>3+ working experience</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>200+ worldwide</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>30+ completed projects</small>
          </article>
        </div>
        <p>
          I am Recent computer science graduate.
          I have passion for developing scalable web applicaiongs and across the full stack.
          I am looking to join forces with Red Technologies to continue to grow my skill set.
          So I am going to contributing to the positive life of people.
          My purpose in life is to help people and develop myself.
        </p>

        <a href="#contact" className="btn btn-primary">Let&apos;s talk</a>
      </div>
    </div>
  </section>
);

export default About;
