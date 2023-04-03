import './Rover.css';
import React, { useEffect, useState } from 'react';

function Rover() {
  // Con la siguiente fórmula obtenemos el día de hoy
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  // Con este State setearemos la fecha que querramos elegir
  const [date, setDate] = useState('2012-08-06');

  // Con este State setearemos la fecha máxima del rover
  const [generalInfo, setGeneralInfo] = useState({});
  //   let maxDate;

  // Almacenamos en una constante la URL de la NASA
  const nasaUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';

  // Almacenamos en una constante nuestra API Key, esto es recomendable
  // almacenarlo en una variable de entorno
  const nasaApiKey = 'ENHD26eDky4QauvQ34xDNZwGCJvbAS3wZgusn6iS';

  // Creamos la URL para la APOD
  // Ver como solucionar la fecha, no hay una actualizada y aparece la earth_date,
  // comprobar el resto de apis
  const roverGeneralUrl = `${nasaUrl}?api_key=${nasaApiKey}`;
  const roverCuriosityUrl = `${nasaUrl}curiosity/photos?earth_date=${date}&api_key=${nasaApiKey}`;

  const [curiosityInfo, setCuriosityInfo] = useState({});

  useEffect(() => {
    async function getRoverGeneralData() {
      const response = await fetch(roverGeneralUrl);
      const data = await response.json();
      console.log(data);
      setGeneralInfo(data.rovers[0]);
      setDate(generalInfo.max_date)
      return data;
    }

    getRoverGeneralData();
  }, [date]);

  useEffect(() => {
    async function getRoverCuriosityData() {
      const response = await fetch(roverCuriosityUrl);
      const data = await response.json();
      console.log(data);
      setCuriosityInfo(data.photos);
      return data;
    }
    getRoverCuriosityData();
  }, [date]);

  return (
    <div>
      {generalInfo.status === 'active' ? (
        <div className="rover-div">
          <article className="rover-info">
            <h2>Nombre del Rover: {generalInfo.name}</h2>
            <input
              id="date"
              type="date"
              name="date"
              // Este max date no concuerda con el día de hoy, por eso he puesto el día
              // en que se empezaron a recoger fotos
              max={generalInfo.max_date}
              min="2012-08-06"
              // Su valor será el asignado por el state
              value={date}
              // Al seleccionar otra fecha recogemos el valor en el state
              onChange={(event) => {
                setDate(event.target.value.toLocaleString());
              }}
            />
          </article>
          <article className="rover-photographic-container">
            <div className="rover-camera-container">
              <h2>{curiosityInfo[0].camera.full_name}</h2>
              <img
                className="rover-images"
                src={curiosityInfo[0].img_src}
                alt={curiosityInfo[0].camera.name}
              />
            </div>
            <div className="rover-camera-container">
              <h2>{curiosityInfo[1].camera.full_name}</h2>
              <img
                className="rover-images"
                src={curiosityInfo[1].img_src}
                alt={curiosityInfo[1].camera.name}
              />
            </div>
          </article>
        </div>
      ) : (
        // Las misiones de los rover tienen un tiempo determinado,
        // por ello he escrito el siguiente código
        <h2>
          Actualmente el rover
          {generalInfo.name}
          no se encuentra activo
        </h2>
      )}
    </div>
  );
}

export default Rover;
