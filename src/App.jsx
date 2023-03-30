import React from 'react';
import Footer from './components/Footer/Footer';
import './App.css';
import Header from './components/Header/Header';

function App() {
  // Usamos el siguiente useState para alternar entre las categorias de las imágenes
  // const [toggle, setToggle] = useState('Footer');

  return (
    <div id="App">
      {Header()}
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
    </div>
  );
}

export default App;
