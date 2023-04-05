/* eslint-disable react/jsx-one-expression-per-line */
import './Rover.css';
import React, { useEffect, useState } from 'react';

function Rover() {
  // ¿Por qué no hoy? Las imágenes del rover van ccn retraso, normalmente un dia
  // fijándolo en tres días aseguramos que tendremos una foto reciente y evitaremos
  // un re-render en el caso de que decidiéramos poner el max_date real
  const previousDay = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  // Con este State setearemos la fecha que querramos elegir
  const [date, setDate] = useState(previousDay);

  // Almacenamos en una constante la URL de la NASA
  const NASA_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';

  // Almacenamos en una constante nuestra API Key, esto es recomendable
  // almacenarlo en una variable de entorno
  const NASA_API_KEY = 'ENHD26eDky4QauvQ34xDNZwGCJvbAS3wZgusn6iS';

  // La API del rover es más complicada, se ha dividido en dos
  // Cpn esta primera URL se obtiene la info de todos los rovers, de aquí obtenemos el max_date
  const roverGeneralUrl = `${NASA_URL}?api_key=${NASA_API_KEY}`;
  // Para no complicar todo demasiado se ha decidido usar solo la info del rover curiosity
  const roverCuriosityUrl = `${NASA_URL}curiosity/photos?earth_date=${date}&api_key=${NASA_API_KEY}`;

  // &camera=fhaz

  // Con este State setearemos la fecha máxima del rover
  const [generalInfo, setGeneralInfo] = useState({});

  const [curiosityInfo, setCuriosityInfo] = useState({});

  useEffect(() => {
    async function getRoverGeneralData() {
      try {
        const response = await fetch(roverGeneralUrl);
        const data = await response.json();
        console.log(data);
        setGeneralInfo(data);
      } catch (error) {
        console.error(error);
        setGeneralInfo(error);
      }
    }
    getRoverGeneralData();
  }, [date]);

  useEffect(() => {
    async function getRoverCuriosityData() {
      try {
        const response = await fetch(roverCuriosityUrl);
        const data = await response.json();
        console.log(data);
        setCuriosityInfo(data);
      } catch (error) {
        console.error(error);
        setCuriosityInfo(error);
      }
    }
    getRoverCuriosityData();
  }, [date]);

  // console.log(curiosityInfo.photos.length);

  if (curiosityInfo.length === undefined) {
    return (
      <div className="rover-error">
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
  if (!generalInfo.rovers[0].status === 'active') {
    return (
      <div className="rover-error">
        <img
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1680602958/NASA/error-404_mph6oc.png"
          alt="Error"
        />
        <h2>
          Actualmente el rover {generalInfo.rovers[0].name} no se encuentra activo
          <br />
          Puede deberse a un fallo del dispositivo o a que el haya finalizado su misión
        </h2>
      </div>
    );
  }
  return (
    <div className="rover-div">
      <article className="rover-info">
        <h2>Rover {generalInfo.rovers[0].name}</h2>
        <input
          id="date"
          type="date"
          name="date"
          // El máximo no es el día de hoy porque las img se reciben con retraso,
          // se ha obtenido el max directamente desde la API
          max={generalInfo.rovers[0].max_date}
          min="2012-08-06"
          // Se ha seteado previamente el valor de date para que coincida de primera
          // con el de generalInfo.max_date
          value={date}
          // Al seleccionar otra fecha recogemos el valor en el state
          onChange={(event) => {
            setDate(event.target.value.toLocaleString());
          }}
        />
      </article>
      <article className="rover-photographic-container">
        <div className="rover-camera-container">
          <h2>{curiosityInfo.photos[0].camera.full_name}</h2>
          <img
            className="rover-images"
            src={curiosityInfo.photos[0].img_src}
            alt={curiosityInfo.photos[0].camera.name}
          />
        </div>
        <div className="rover-camera-container">
          <h2>{curiosityInfo.photos[6].camera.full_name}</h2>
          <img
            className="rover-images"
            src={curiosityInfo.photos[6].img_src}
            alt={curiosityInfo.photos[6].camera.name}
          />
        </div>
      </article>
    </div>
  );
}

export default Rover;
