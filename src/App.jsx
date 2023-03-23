import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div id="App">
      <div id="navBar">
        <article>
          <a
            href="https://apod.nasa.gov/apod/astropix.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="nasaLogo"
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679560050/NASA/NASA_LOGO_tobb6c.png"
              alt="NASA LOGO"
            />
          </a>
        </article>
        <article id="navbarText">
          <h1>PICTURE OF THE DAY</h1>
          <h3 id='rover'>ROVER</h3>
          <h3 id='astronomical'>ASTRONOMICAL</h3>
        </article>
        <article>
          <label class="button" for="toggle"> 
            <input id="toggle" type="checkbox" />
            <span class="slider">
            </span>
          </label>
        </article>
      </div>
      <div id="main">main
      <img src="https://apod.nasa.gov/apod/image/2303/NGC2841_1024.jpg" alt="" />
      </div>
      
      <div id="footer">footer</div>
    </div>
  );
}

export default App;
