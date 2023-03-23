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
          <h3 id="rover">ROVER</h3>
          <h3 id="astronomical">ASTRONOMICAL</h3>
        </article>
        <article>
          <label class="button" for="toggle">
            <input id="toggle" type="checkbox" />
            <span class="slider"></span>
          </label>
        </article>
      </div>
      <div id="main">
        <img
          id="image"
          src="https://apod.nasa.gov/apod/image/2303/NGC2841_1024.jpg"
          alt="image of the day"
        />
        <article id="infoImage">
          <h2>Spiral Galaxy NGC 2841</h2>
          <p>
            A mere 46 million light-years distant, spiral galaxy NGC 2841 can be
            found in planet Earth's night sky toward the northern constellation
            of Ursa Major. This sharp image centered on the gorgeous island
            universe also captures spiky foreground Milky Way stars and more
            distant background galaxies within the same telescopic field of
            view. It shows off the bright nucleus of NGC 2841, along with its
            inclined galactic disk, and faint outer regions. Dust lanes, small
            star-forming regions, and young star clusters are embedded in the
            galaxy's patchy, tightly wound spiral arms. In contrast, many other
            spirals exhibit broader, sweeping arms with large star-forming
            regions. NGC 2841 has a diameter of over 150,000 light-years, making
            it even larger than our own Milky Way. X-ray images suggest that
            extreme outflows from giant stars and stellar explosions create
            plumes of hot gas extending into a halo around NGC 2841.
          </p>
          <h3 id="copyright">Copyright: Roberto Marinoni</h3>
        </article>
      </div>

      <div id="footer">footer</div>
    </div>
  );
}

export default App;
