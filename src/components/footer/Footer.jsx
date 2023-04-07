/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

import './footer.css';

const Footer = () => (
  <footer>
    <a href="#" className="footer__logo">Saam</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact Me</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://facebook.com"><FaFacebookF /></a>
      <a href="https://instagram.com"><FiInstagram /></a>
      <a href="https://twitter.com"><IoLogoTwitter /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Kubo&apos;are 2022. All rights reserved</small>
    </div>
  </footer>
);

export default Footer;
