import './Error&Load.css';
import React from 'react';

// Todas las templates tienen la misma img de muestra,
// para evitar repetir código se crea lo siguiente
export function Image(props) {
  return <img src={props.img} alt="Error" />;
}

const LoadingImg =
  'https://res.cloudinary.com/dwsffp1eq/image/upload/v1681379260/NASA/cargando_yejwn0.png';

const ErrorImg =
  'https://res.cloudinary.com/dwsffp1eq/image/upload/v1680602958/NASA/error-404_mph6oc.png';

// El proceso de llamada a la API y mostrar los datos tarda un rato,
// para evitar una mala visualización se crea este template de carga
export function Loading() {
  return (
    <div className="loading">
      <Image img={LoadingImg} />
      <h2>Loading...</h2>
    </div>
  );
}

// El uso de esta API está limitada,
// por ello se previene un error de muestra con el siguiente template
export function ErrorApi() {
  return (
    <div className="error">
      <Image img={ErrorImg} />
      <h2>
        El uso de esta API demostrativa está limitado
        <br />
        Si ves este mensaje es porque se ha alcanzado el límite, espera unos minutos y vuelve a
        intentarlo
      </h2>
    </div>
  );
}

// El rover tiene un tiempo de misión determinado, para evitar mostrar un error
// cuando este haya finalizado su misión se ha creado este tempplate
export function ErrorActive(props) {
  return (
    <div className="error">
      <Image img={ErrorImg} />
      <h2>
        Actualmente el rover&nbsp;
        {props.name}
        &nbsp;no se encuentra activo
        <br />
        Puede deberse a un fallo del dispositivo o a que el Rover haya finalizado su misión
      </h2>
    </div>
  );
}

// Hay días que la API del rover no ha generado ninguna imagen, dándose un array vacio,
// prevenimos el fallo creando el siguiente template para seleccionar otra fecha
export function ErrorDate() {
  return (
    <div className="error">
      <Image img={ErrorImg} />
      <h2>
        No hay imágenes de esta fecha&nbsp;
        <br />
        Por favor elije otra
      </h2>
    </div>
  );
}
