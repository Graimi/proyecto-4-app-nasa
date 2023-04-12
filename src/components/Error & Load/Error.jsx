import './style.css';
import React from 'react';

const ErrorImg = (
  <img
    src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1680602958/NASA/error-404_mph6oc.png"
    alt="Error"
  />
);

export function ErrorApi() {
  return (
    <div className="error">
      {ErrorImg}
      <h2>
        El uso de esta API demostrativa está limitado
        <br />
        Si ves este mensaje es porque se ha alcanzado el límite, espera unos minutos y vuelve a
        intentarlo
      </h2>
    </div>
  );
}

export function ErrorActive(name) {
  return (
    <div className="error">
      {ErrorImg}
      <h2>
        Actualmente el rover&nbsp;
        {name}
        &nbsp;no se encuentra activo
        <br />
        Puede deberse a un fallo del dispositivo o a que el Rover haya finalizado su misión
      </h2>
    </div>
  );
}

export function ErrorDate() {
  return (
    <div className="error">
      {ErrorImg}
      <h2>
        No hay imágenes de esta fecha&nbsp;
        <br />
        Por favor elije otra
      </h2>
    </div>
  );
}
