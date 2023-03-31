import React, { useState } from 'react';
import './Header.css';

function Header() {
  // Con la siguiente fórmula obtenemos el día de hoy
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  // Con este State setearemos la fecha que querramos elegir
  const [date, setDate] = useState(today);

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
          id="date"
          type="date"
          name="date"
          // Con lo siguiente marcamos que no se pueda elegir una fecha superior
          max={today}
          min="2015-01-01"
          // Su valor será el asignado por el state
          value={date}
          // Al seleccionar otra fecha recogemos el valor en el state
          onChange={(event) => {
            setDate(event.target.value.toLocaleString());
          }}
        />
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

  //   Crear usestate con astronomical y rover para que estos se cambien según el botón del toggle
  //   Crear astronomical y rover en carpetas diferentes
  // Hacer que con el useState además se cambie también el título y la imagen del toggle
  // Investigar useParams() para analizar la info
  // Cuando se haya acabado denominar los archivos app
}

export default Header;
