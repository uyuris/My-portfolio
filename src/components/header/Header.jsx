import React, { useState } from 'react';
import './header.css';
import Cta from '../callToActionBtns/Cta';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/me.jpg';

const Header = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <>
      <header>
        <div className="header-header">
          <a
            href="#about"
            onClick={() => setActiveNav('#about')}
            className={activeNav === '#about' ? 'active' : ''}
          >
            <div className="header-item">About</div>
          </a>
          <a
            href="#experience"
            onClick={() => setActiveNav('#experience')}
            className={activeNav === '#experience' ? 'active' : ''}
          >
            <div className="header-item">Experience</div>

          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav('#contact')}
            className={activeNav === '#contact' ? 'active' : ''}
          >
            <div className="header-item">Contact</div>

          </a>
        </div>
        <div className="container header__container" id="header">
          <div className="header_name">
            <div className="me">
              <img className="img" alt="me" src={ME} />
            </div>
            <div>
              <h5>Hello I&apos;m</h5>
              <h1>Kubo Minoru</h1>
              <h5 className="text-light">Fullstack Developer</h5>
              <Cta />
              <HeaderSocials />
            </div>
            <a href="#contact" className="scroll__down">Scroll Down</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
