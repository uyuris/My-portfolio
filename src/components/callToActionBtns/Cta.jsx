import React from 'react';
import resume from '../../assets/Resume.pdf';

function Cta() {
  return (
    <div className="cta">
      <a href={resume} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Let&apos;s talk</a>
    </div>
  );
}

export default Cta;
