import './Astronomical.css';
import React, { useEffect, useState } from 'react';

function Astronomical() {
  // Con la siguiente fórmula obtenemos el día de hoy
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  // Con este State setearemos la fecha que querramos elegir
  const [date, setDate] = useState(today);

  // Almacenamos en una constante la URL de la NASA
  const NASA_URL = 'https://api.nasa.gov/';

  // Almacenamos en una constante nuestra API Key, esto es recomendable
  // almacenarlo en una variable de entorno
  const NASA_API_KEY = 'ENHD26eDky4QauvQ34xDNZwGCJvbAS3wZgusn6iS';

  // Creamos la URL para la APOD
  const ApodUrl = `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`;

  const [apod, setApod] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(ApodUrl);
        const json = await response.json();
        setApod(json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [date]);

  return (
    <div className="astronomical-div">
      <img className="astronomical-image" src={apod.url} alt="APOL" />
      <article className="astronomical-info">
        <div className="titleDate">
          <h2 className="title">{apod.title}</h2>
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
        </div>
        <p className="astronomical-text">{apod.explanation}</p>
        <h3 className="astronomical-copyright">
          Copyright:
          {/* Copyright a veces está vacio porque es público, se tiene en cuenta */}
          {apod.copyright ? apod.copyright : ' Public'}
        </h3>
      </article>
    </div>
  );
}

export default Astronomical;
