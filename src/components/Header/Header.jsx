import React from 'react';
import './Header.css';

// Creamos el template del header para que pueda ser reutilizado
function Header({ link, img, title, subtitle, handleChange }) {
  return (
    <div className="header">
      <a href={link.href} target={link.target} rel={link.rel}>
        <img className="nasaLogo" src={img.src} alt={img.alt} />
      </a>
      <article className="categoryInfo">
        <h1>{title}</h1>
        <h2 className="category">{subtitle}</h2>
      </article>
      <label className="toggle" htmlFor="toggleButton">
        <input id="toggleButton" type="checkbox" onChange={handleChange} />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Header;
