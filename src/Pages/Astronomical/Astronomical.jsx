import './Astronomical.css';
import React, { useEffect, useState } from 'react';
import { ErrorApi } from '../../components/Error & Load/Error';
import Loading from '../../components/Error & Load/Loading';

// Creamos la función base para llamar a la api
async function getApodData({ apodUrl }) {
  try {
    const response = await fetch(apodUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

function Astronomical() {
  // Con la siguiente fórmula obtenemos el día de hoy
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  // Con este State setearemos la fecha que querramos elegir
  const [date, setDate] = useState(today);

  // Almacenamos en una constante la URL de la NASA
  const nasaUrl = 'https://api.nasa.gov/';

  // Almacenamos en una constante nuestra API Key, esto es recomendable
  // almacenarlo en una variable de entorno
  const nasaApiKey = 'ENHD26eDky4QauvQ34xDNZwGCJvbAS3wZgusn6iS';

  // Creamos la URL para la APOD
  const apodUrl = `${nasaUrl}planetary/apod?date=${date}&api_key=${nasaApiKey}`;

  // Seteamos la info de la api apod
  const [apod, setApod] = useState({});
  // Seteamos el error de la api si hay, por defecto ho hay
  const [apodError, setApodError] = useState(false);
  // Seteamos que hasta que se cargue la info de la api aparezca la ventana de loading
  const [apodLoading, setApodLoading] = useState(true);

  useEffect(() => {
    getApodData({ apodUrl })
      // Obtenemos la info de la api del rover curiosity
      .then((data) => setApod(data))
      // Si aparece un error damos valor positivo al state
      .catch(() => setApodError(true))
      // Una vez se ha solventado bien la solicitud de la api se quita la ventana de loading
      .finally(() => setApodLoading(false));
  // Esta info es importante que se actualice cada vez que se cambia la fecha
  }, [date]);

  // Invocamos el template de error si la api está saturada
  if (apodError) {
    return ErrorApi();
  }

  // Invocamos el template de loading si la api no se ha cargado todavía
  if (apodLoading) {
    return Loading();
  }

  return (
    <div className="astronomical-div">
      {/* También aparecen video los cuales generan un problema de Cross-Origin Read Blocking
  (CORB), por ello se ha puesto una img por defecto con el URL al video */}
      {apod?.media_type === 'video' ? (
        <a className="astronomical-video" href={apod?.url} target="_blank" rel="noopener noreferrer">
          <img
            className="astronomical-image"
            // Los videos están almacenados en Vimeo, por eso se pone como img el logo de esta web
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1680511407/NASA/vimeo_qc6ej5.png"
            alt="APOL"
          />
          <p>Pincha en la imagen para acceder al video</p>
        </a>
      ) : (
        // En el casio que no haya video se muestra la imagen
        <img className="astronomical-image" src={apod?.url} alt="APOL" />
      )}

      <article className="astronomical-info">
        <div className="astronomical-titleDate">
          <h2 className="title">{apod?.title}</h2>
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
        <p className="astronomical-text">{apod?.explanation}</p>
        <h3 className="astronomical-copyright">
          Copyright:&nbsp;
          {/* Copyright a veces está vacio porque es público, se tiene en cuenta */}
          {apod?.copyright ? apod?.copyright : ' Public'}
        </h3>
      </article>
    </div>
  );
}

export default Astronomical;
