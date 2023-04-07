/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs';

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href="https://dribble.com" target="_blank" rel="noreferrer"><BsDribbble /></a>
    </div>
  );
}

export default HeaderSocials;
