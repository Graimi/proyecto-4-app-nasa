import React from 'react';
import './Footer.css';

function Footer({ rs1, rs2, rs3, rs4 }) {
  return (
    <footer className="rrss">
      <article className="rrss-logos">
        <a href={rs1.href} target={rs1.target} rel={rs1.rel}>
          <img src={rs1.src} alt={rs1.alt} />
        </a>
        <a href={rs2.href} target={rs2.target} rel={rs2.rel}>
          <img src={rs2.src} alt={rs2.alt} />
        </a>
        <a href={rs3.href} target={rs3.target} rel={rs3.rel}>
          <img src={rs3.src} alt={rs3.alt} />
        </a>
        <a href={rs4.href} target={rs4.target} rel={rs4.rel}>
          <img src={rs4.src} alt={rs4.alt} />
        </a>
      </article>
      <div className="circleDecoration" />
    </footer>
  );
}

export default Footer;
