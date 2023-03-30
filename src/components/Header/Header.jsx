import React, { useState } from 'react';
import './Header.css';

function Header() {
  // Usamos el siguiente useState para alternar entre las categorias de las imágenes
  const [toggle, setToggle] = useState('ASTRONOMICAL');

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
        <input
          type="date"
          name="date"
          max="2023-03-23"
          min="2015-01-01"
          value="2023-03-23"
          id="date"
        />
      </article>
      <label className="toggle" htmlFor="toggleButton">
        <input
          id="toggleButton"
          type="checkbox"
          onClick={() => {
            // eslint-disable-next-line no-unused-expressions
            toggle === 'ASTRONOMICAL' ? setToggle('ROVER') : setToggle('ASTRONOMICAL');
          }}
        />
        <span className="slider" />
      </label>
    </div>
  );

  //   Crear usestate con astronomical y rover para que estos se cambien según el botón del toggle
  //   Crear astronomical y rover en carpetas diferentes
  // Hacer que con el useState además se cambie también el título y la imagen del toggle
  // Investigar useParams() para analizar la info
  // Cuando se haya acabado denominar los archivos app
}

export default Header;
