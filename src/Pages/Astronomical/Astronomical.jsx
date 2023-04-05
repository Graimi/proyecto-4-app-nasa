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
        setApod(error);
      }
    }
    fetchData();
  }, [date]);

  // console.log(apod);

  if (apod.error) {
    return (
      <div className="astronomical-error">
        <img
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1680602958/NASA/error-404_mph6oc.png"
          alt="Error"
        />
        <h2>
          El uso de esta API demostrativa está limitado
          <br />
          Si ves este mensaje es porque se ha alcanzado el límite, espera unos minutos y vuelve a
          intentarlo
        </h2>
      </div>
    );
  }
  return (
    <div className="astronomical-div">
      {/* También aparecen video los cuales generan un problema de Cross-Origin Read Blocking
  (CORB), por ello se ha puesto una img por defecto con el URL al video */}
      {apod.media_type === 'video' ? (
        <a className="astronomical-video" href={apod.url} target="_blank" rel="noopener noreferrer">
          <img
            className="astronomical-image"
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1680511407/NASA/vimeo_qc6ej5.png"
            alt="APOL"
          />
          <p>Pincha en la imagen para acceder al video</p>
        </a>
      ) : (
        <img className="astronomical-image" src={apod.url} alt="APOL" />
      )}

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
