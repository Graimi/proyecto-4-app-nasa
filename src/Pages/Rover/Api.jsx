import React, { useEffect, useState } from 'react';

function Api() {
  //   // Con este State setearemos la fecha que querramos elegir
  //   // Hay que tener en cuenta que la api del rover es recomendable usarlo con soles, la fecha de marte
  //   const [sol, setSol] = useState(0);

  // Con la siguiente fórmula obtenemos el día de hoy
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  // Con este State setearemos la fecha que querramos elegir
  const [date, setDate] = useState(today);

  // Con este State setearemos la fecha máxima del rover
  const [generalUrl, setGeneralUrl] = useState({});
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
  const roverSpecificUrl = `${nasaUrl}curiosity/photos?earth_date=${date}&api_key=${nasaApiKey}`;

  const [rover, setRover] = useState({});

  useEffect(() => {
    async function getRoverData() {
      const response = await fetch(roverGeneralUrl);
      const data = await response.json();
      console.log(data);
      setGeneralUrl(data.rovers[0]);
      return data;
    }
    getRoverData();
  }, [date]);

  //   console.log(maxDate);

  //   async function fetchData() {
  //     try {
  //       const response = await fetch(RoverUrl);
  //       const json = await response.json();
  //       setRover(json);
  //       console.log(json);
  //       // console.log(json.photos[0].img_src);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();

  return (
    <div>
      {generalUrl.status === 'active' ? (
        <div>
          <h2>
            Rover: {generalUrl.name}
          </h2>
          <input
            id="date"
            type="date"
            name="date"
            // Este max date no concuerda con el día de hoy, por eso he puesto el día en que se empezaron a recoger fotos
            max={generalUrl.max_date}
            min="2012-08-06"
            // Su valor será el asignado por el state
            value="2012-08-06"
            // Al seleccionar otra fecha recogemos el valor en el state
            onChange={(event) => {
              setDate(event.target.value.toLocaleString());
            }}
          />
        </div>
      ) : (
        // Las misiones de los rover tienen un tiempo determinado, por ello he escrito el siguiente código
        <h2>Actualmente el rover {generalUrl.name} no se encuentra activo</h2>
      )}
    </div>
  );
}

export default Api;
