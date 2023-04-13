import React from 'react';
import './Header.css';

// Como se pedía en el enunciado, se ha sacado el cambio entre las dos páginas por un uso
// diferente del useState, en este caso eligiendo la pág por props dependientes del useState interno
// que cambiará la info para visualizar las págs en la App
function Header(props) {
  // Usamos el siguiente useState para almacenar la info obtenida del prop
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
            // Al clickar sobre este input el toggle cambiará su valor entre las páginas
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
