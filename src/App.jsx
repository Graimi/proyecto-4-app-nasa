import React from 'react';
import Footer from './components/Footer/Footer';
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
          <h2 id="rover">ROVER</h2>
          <h2 id="astronomical">ASTRONOMICAL</h2>
          <input
            type="date"
            name="date"
            max="2023-03-23"
            min="2015-01-01"
            value="2023-03-23"
            id="date"
          />
        </article>
        <article>
          <label className="button" htmlFor="toggle">
            <input id="toggle" type="checkbox" />
            <span className="slider" />
          </label>
        </article>
      </div>
      <div id="main">
        <img id="image" src="https://apod.nasa.gov/apod/image/2303/NGC2841_1024.jpg" alt="APOL" />
        <article id="infoImage">
          <h2>Spiral Galaxy NGC 2841</h2>
          <p id="details">
            A mere 46 million light-years distant, spiral galaxy NGC 2841 can be found in planet
            Earth&apos;s night sky toward the northern constellation of Ursa Major. This sharp image
            centered on the gorgeous island universe also captures spiky foreground Milky Way stars
            and more distant background galaxies within the same telescopic field of view. It shows
            off the bright nucleus of NGC 2841, along with its inclined galactic disk, and faint
            outer regions. Dust lanes, small star-forming regions, and young star clusters are
            embedded in the galaxy&apos;s patchy, tightly wound spiral arms. In contrast, many other
            spirals exhibit broader, sweeping arms with large star-forming regions. NGC 2841 has a
            diameter of over 150,000 light-years, making it even larger than our own Milky Way.
            X-ray images suggest that extreme outflows from giant stars and stellar explosions
            create plumes of hot gas extending into a halo around NGC 2841.
          </p>
          <h3 id="copyright">Copyright: Roberto Marinoni</h3>
        </article>
      </div>
      {Footer()}
      {/* <div id="footer">
        <article id="contact">
          <a href="https://github.com/Graimi" target="_blank" rel="noopener noreferrer">
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/github_qlykzr.png"
              alt="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/floreslujan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/linkedin_gbpe7u.png"
              alt="Linkedin"
            />
          </a>
          <a href="638560723" target="_blank" rel="noopener noreferrer">
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/telefono_smjgow.png"
              alt="Teléfono"
            />
          </a>
          <a href="jaimefloreslujan@gmail.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/email_bgpahe.png"
              alt="Email"
            />
          </a>
        </article>
        <span id="circle" />
      </div> */}
    </div>
  );
}

export default App;
