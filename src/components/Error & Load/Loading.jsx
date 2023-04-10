import './style.css';
import React from 'react';

function Loading() {
  return (
    <div className="loading">
      <img
        src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1680602958/NASA/error-404_mph6oc.png"
        alt="Error"
      />
      <h2>Loading...</h2>
    </div>
  );
}

export default Loading;
