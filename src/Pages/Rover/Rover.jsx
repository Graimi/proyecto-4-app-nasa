/* eslint-disable react/jsx-one-expression-per-line */
import './Rover.css';
import React, { useEffect, useState } from 'react';

async function getRoverGeneralData({ roverGeneralURL }) {
  try {
    const response = await fetch(roverGeneralURL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

async function getRoverCuriosityData({ roverCuriosityUrl }) {
  try {
    const response = await fetch(roverCuriosityUrl);
    const data = await response.json();
    return data?.photos;
  } catch (error) {
    return error;
  }
}

const roverText = 'La API de Mars Rover Photos de la NASA está diseñada para recopilar datos de imágenes tomadas por los rovers Perseverance, Curiosity, Opportunity y Spirit en Marte y hacerlos más fácilmente disponibles para otros desarrolladores, educadores y científicos ciudadanos. Cada rover tiene varias cámaras con distintos propósitos: algunas son para la navegación y la evitación de obstáculos, otras son para la ciencia y la observación del entorno, y otras son para documentar el descenso y el aterrizaje. Las cámaras tienen diferentes características ópticas, como el campo de visión, la resolución, el enfoque y el color. Selecciona otra fecha para la imagen de otra cámara';

function Rover() {
  // ¿Por qué otro día? Las imágenes del rover van con retraso, normalmente un dia
  // fijándolo en tres días aseguramos que tendremos una foto reciente y evitaremos
  // un re-render en el caso de que decidiéramos poner el max_date real
  const previousDay = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  // Con este State setearemos la fecha que querramos elegir
  const [date, setDate] = useState(previousDay);

  // Almacenamos en una constante la URL de la NASA
  const nasaUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';

  // Almacenamos en una constante nuestra API Key, esto es recomendable
  // almacenarlo en una variable de entorno
  const nasaApiKey = 'ENHD26eDky4QauvQ34xDNZwGCJvbAS3wZgusn6iS';

  // La API del rover es más complicada, se ha dividido en dos
  // Con esta primera URL se obtiene la info de todos los rovers, de aquí tb obtenemos el max_date
  const roverGeneralURL = `${nasaUrl}?api_key=${nasaApiKey}`;

  // Para no complicar todo demasiado se ha decidido usar solo la info del rover curiosity
  const roverCuriosityUrl = `${nasaUrl}curiosity/photos?earth_date=${date}&api_key=${nasaApiKey}`;

  // Seteamos la info de la api general
  const [generalInfo, setGeneralInfo] = useState({});
  // Seteamos el error de la api si hay, por defecto ho hay
  const [generalInfoError, setGeneralInfoError] = useState(false);
  // Seteamos que hasta que se cargue la info de la api aparezca la ventana de loading
  const [generalInfoLoading, setGeneralInfoLoading] = useState(true);

  // Seteamos la info de la api del rover curiosity
  const [curiosityInfo, setCuriosityInfo] = useState({});
  // Seteamos el error de la api si hay, por defecto ho hay
  const [curiosityInfoError, setCuriosityInfoError] = useState(false);
  // Seteamos que hasta que se cargue la info de la api aparezca la ventana de loading
  const [curiosityInfoLoading, setCuriosityInfoLoading] = useState(true);

  useEffect(() => {
    getRoverGeneralData({ roverGeneralURL })
      .then((data) => {
        // Obtenemos la info de la api general
        // El 0 corresponde al primer rover, en este caso el curiosity
        setGeneralInfo(data.rovers[0]);
        // Con este State setearemos la fecha máxima del rover
        // setDate(generalInfo.max_date);
      })
      // Si aparece un error damos valor positivo al state
      .catch(() => setGeneralInfoError(true))
      // Una vez se ha solventado bien la solicitud de la api se quita la ventana de loading
      .finally(() => setGeneralInfoLoading(false));
    // Para este caso es importante que se cargue esta info solo una vez
  }, []);

  useEffect(() => {
    getRoverCuriosityData({ roverCuriosityUrl })
      // Obtenemos la info de la api del rover curiosity
      .then((data) => setCuriosityInfo(data))
      // Si aparece un error damos valor positivo al state
      .catch(() => setCuriosityInfoError(true))
      // Una vez se ha solventado bien la solicitud de la api se quita la ventana de loading
      .finally(() => setCuriosityInfoLoading(false));
    // Esta info es importante que se actualice cada vez que se cambia la fecha
  }, [date]);

  // Invocamos el template de error si la api está saturada
  if (generalInfoError || curiosityInfoError) {
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

  // Invocamos el template de loading si la api no se ha cargado todavía
  if (generalInfoLoading || curiosityInfoLoading) {
    return (
      <div className="rover-error">
        <img
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1680602958/NASA/error-404_mph6oc.png"
          alt="Error"
        />
        <h2>Loading...</h2>
      </div>
    );
  }

  // El rover tiene un tiempo de misión determinado,
  // cuando este haya finalizado su misión aparecerá el siguiente código
  if (generalInfo?.status !== 'active') {
    return (
      <div className="rover-error">
        <img
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1680602958/NASA/error-404_mph6oc.png"
          alt="Error"
        />
        <h2>
          Actualmente el rover {generalInfo.name} no se encuentra activo
          <br />
          Puede deberse a un fallo del dispositivo o a que el Rover haya finalizado su misión
        </h2>
      </div>
    );
  }

  // Si ha pasado el resto de los filtros da el código correcto
  return (
    <div>
      {/* Hay días que el rover no ha generado ninguna imagen,
        prevenimos el incorrecto funcionamiento de ello con el siguiente código  */}
      {curiosityInfo?.length < 1 ? (
        <div className="rover-div-noPhotoError">
          <div className="titleDate">
            <h2>Rover: {generalInfo?.name}</h2>
            <input
              id="date"
              type="date"
              name="date"
              // El máximo no es el día de hoy porque las img se reciben con retraso,
              // se ha obtenido el max directamente desde la API
              max={generalInfo?.max_date}
              min="2012-08-06"
              // Se ha seteado previamente el valor de date para que coincida de primera
              // con el de generalInfo.max_date
              value={date}
              // Al seleccionar otra fecha recogemos el valor en el state
              onChange={(event) => {
                setDate(event.target.value.toLocaleString());
              }}
            />
          </div>
          <div className="rover-error">
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1680602958/NASA/error-404_mph6oc.png"
              alt="Error"
            />
            <h2>
              No hay imágenes de esta fecha <br />
              Por favor elije otra
            </h2>
          </div>
        </div>
      ) : (
        <div className="rover-div">
          <img
            className="rover-image"
            src={curiosityInfo[0]?.img_src}
            alt={curiosityInfo[0]?.camera?.name}
          />
          <article className="rover-info">
            <div className="rover-titleDate">
              <h2>Rover: {generalInfo?.name}</h2>
              <input
                id="date"
                type="date"
                name="date"
                // El máximo no es el día de hoy porque las img se reciben con retraso,
                // se ha obtenido el max directamente desde la API
                max={generalInfo?.max_date}
                min="2012-08-06"
                // Se ha seteado previamente el valor de date para que coincida de primera
                // con el de generalInfo.max_date
                value={date}
                // Al seleccionar otra fecha recogemos el valor en el state
                onChange={(event) => {
                  setDate(event.target.value.toLocaleString());
                }}
              />
            </div>
            <h2 className="rover-camera-name">{curiosityInfo[0]?.camera?.full_name}</h2>
            <p className="rover-text">{roverText}</p>
          </article>
        </div>
      )}
    </div>
  );
}

export default Rover;
