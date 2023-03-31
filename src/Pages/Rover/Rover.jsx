import './Rover.css';
import React, { useState } from 'react';

function Rover() {
  // Con la siguiente fórmula obtenemos el día de hoy
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  // Con este State setearemos la fecha que querramos elegir
  const [date, setDate] = useState(today);

  return (
    <div className="rover-div">
      <article className="rover-info">
        <h2>Front Hazard Avoidance Camera</h2>
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
        <h2>Rear Hazard Avoidance Camera</h2>
      </article>
      <article className="rover-images">
        <img
          src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG"
          alt="Front"
        />
        <img
          src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RLB_486615482EDR_F0481570RHAZ00323M_.JPG"
          alt="Rear"
        />
      </article>
    </div>
  );
}

export default Rover;
