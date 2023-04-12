/* eslint-disable react/jsx-one-expression-per-line */
import './Rover.css';
import React, { useEffect, useState } from 'react';
import { ErrorActive, ErrorApi, ErrorDate } from '../../components/Error & Load/Error';
import Loading from '../../components/Error & Load/Loading';

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

function Rover() {
  // Con este State setearemos la fecha que querramos elegir
  // De primeras se va a realizar el useEffect getRoverGeneralData el cual va a setear la fecha
  // a la más reciente disponible, por lo que no es necesario determinar ninguna fecha concreta
  const [date, setDate] = useState('');

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
        setDate(data.rovers[0].max_date);
      })
      // Si aparece un error damos valor positivo al state
      .catch(() => setGeneralInfoError(true))
      // Una vez se ha solventado bien la solicitud de la api se quita la ventana de loading
      .finally(() => setGeneralInfoLoading(false));
    // Para este caso es importante que se cargue esta info solo una vez y al principio
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

  // El texto que contendrá el rover será fijo, lo incluímos aquí
  const roverText = 'La API de Mars Rover Photos de la NASA está diseñada para recopilar datos de imágenes tomadas por los rovers Perseverance, Curiosity, Opportunity y Spirit en Marte y hacerlos más fácilmente disponibles para otros desarrolladores, educadores y científicos ciudadanos. Cada rover tiene varias cámaras con distintos propósitos: algunas son para la navegación y la evitación de obstáculos, otras son para la ciencia y la observación del entorno, y otras son para documentar el descenso y el aterrizaje. Las cámaras tienen diferentes características ópticas, como el campo de visión, la resolución, el enfoque y el color. Selecciona otra fecha para la imagen de otra cámara';

  // Invocamos el template de error si la api está saturada
  if (generalInfoError || curiosityInfoError) {
    return ErrorApi();
  }

  // Invocamos el template de loading si la api no se ha cargado todavía
  if (generalInfoLoading || curiosityInfoLoading) {
    return Loading();
  }

  // El rover tiene un tiempo de misión determinado,
  // cuando este haya finalizado su misión aparecerá el siguiente código
  if (generalInfo?.status !== 'active') {
    return ErrorActive(generalInfo.name);
  }

  // Si ha pasado el resto de los filtros da el código correcto
  return (
    <div
      className="rover-div"
      // Hay días que el rover no ha generado ninguna imagen, dándose un array vacio
      // cambiamos la distribución de los elementos cuando sucede con el siguiente código
      style={{ flexDirection: curiosityInfo?.length < 1 ? 'column' : 'row' }}
    >
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
            // Declaramos como fecha mínima el día de aterrizaje
            min={generalInfo?.landing_date}
            // Se ha seteado previamente el valor de date para que coincida de primera
            // con el de generalInfo.max_date
            value={date}
            // Al seleccionar otra fecha recogemos el valor en el state
            onChange={(event) => {
              setDate(event.target.value.toLocaleString());
            }}
          />
        </div>
        {/* En el caso que no hay imagen para ese día damos un template diferente al bueno */}
        {curiosityInfo?.length < 1 ? (
          ErrorDate()
        ) : (
          <div>
            <h2 className="rover-camera-name">{curiosityInfo[0]?.camera?.full_name}</h2>
            <p className="rover-text">{roverText}</p>
          </div>
        )}
      </article>
    </div>
  );
}

export default Rover;
