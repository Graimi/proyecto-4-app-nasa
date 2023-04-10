import React from 'react';
import './Header.css';

function Header(props) {
  // Usamos el siguiente useState para alternar entre las categorias de las imágenes
  // eslint-disable-next-line react/prop-types
  const { toggle, setToggle } = props;

  return (
    <div className="header">
      <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">
        <img
          className="nasaLogo"
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679560050/NASA/NASA_LOGO_tobb6c.png"
          alt="NASA LOGO"
        />
      </a>
      <article className="categoryInfo">
        <h1>PICTURE OF THE DAY</h1>
        <h2 className="category">{toggle}</h2>
      </article>
      <label className="toggle" htmlFor="toggleButton">
        <input
          id="toggleButton"
          type="checkbox"
          onChange={() => {
            // eslint-disable-next-line no-unused-expressions
            toggle === 'ASTRONOMICAL' ? setToggle('ROVER') : setToggle('ASTRONOMICAL');
          }}
        />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Header;
