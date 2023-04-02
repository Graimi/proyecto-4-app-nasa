import './Rover.css';
import React, { useEffect, useState } from 'react';

function Rover() {
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
  //   Ver como solucionar la fecha, no hay una actualizada y aparece la earth_date, comprobar el resto de apis
  // const RoverUrl = `${NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${NASA_API_KEY}`;

  const [rover, setRover] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(RoverUrl);
        const json = await response.json();
        setRover(json);
        // console.log(json.photos[0].img_src);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [date]);

  // console.log(rover.photos[0].img_src);
  // console.log(rover.photos[0].img_src);
  // console.log(rover.photos[3].camera.full_name);

  return (
    <div className="rover-div">
      <article className="rover-info">
        <h2>
          {/* {rover.photos[0].camera.full_name} */}
          Front Hazard Avoidance Camera
        </h2>
        <img
          className="rover-images"
          // src={rover.photos[0].img_src}
          src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG"
          alt="Front"
        />
      </article>
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
      <article className="rover-info">
        <h2>
          {/* {rover.photos[3].camera.full_name} */}
          Front Hazard Avoidance Camera
        </h2>
        <img
          className="rover-images"
          // src={rover.photos[3].img_src}
          src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG"
          alt="Rear"
        />
      </article>
      {/* <article className="rover-info">
        <h2>
          Front Hazard Avoidance Camera
        </h2>
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
        <h2>
          Front Hazard Avoidance Camera
        </h2>
      </article>
      <article className="rover-images">
        <img
          src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG"
          alt="Front"
        />
        <img
          src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG"
          alt="Front"
        />
      </article> */}
    </div>
  );
}

export default Rover;
