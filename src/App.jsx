import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Astronomical from './Pages/Astronomical/Astronomical';
import Rover from './Pages/Rover/Rover';
import Footer from './components/Footer/Footer';

function App() {
  // Declaramos el useState para almacenar el valor de la pág que visualizamos
  // Se establece por defecto la pág ASTRONOMICAL
  const [toggle, setToggle] = useState('ASTRONOMICAL');

  return (
    <div id="App">
      {/* Rellenamos el template del Header */}
      <Header
        link={{ href: 'https://www.nasa.gov/', target: '_blank', rel: 'noopener noreferrer' }}
        img={{
          src: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1679560050/NASA/NASA_LOGO_tobb6c.png',
          alt: 'NASA LOGO',
        }}
        title="PICTURE OF THE DAY"
        subtitle={toggle}
        handleChange={() => {
          // Al clickar sobre este input el toggle cambiará su valor entre las páginas
          // eslint-disable-next-line no-unused-expressions
          toggle === 'ASTRONOMICAL' ? setToggle('ROVER') : setToggle('ASTRONOMICAL');
        }}
      />
      {/* ------------ */}
      {/* En vez del Figure que pedía el enunciado he puesto lo siguiente */}
      {/* Según la info del prop se visualizará una pág u otra */}
      {toggle === 'ASTRONOMICAL' ? <Astronomical /> : <Rover />}
      {/* ------------ */}
      {/* Rellenamos el template del Footer */}
      <Footer
        rs1={{
          href: 'https://github.com/Graimi',
          target: '_blank',
          rel: 'noopener noreferrer',
          src: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/github_qlykzr.png',
          alt: 'Github',
        }}
        rs2={{
          href: 'https://www.linkedin.com/in/floreslujan/',
          target: '_blank',
          rel: 'noopener noreferrer',
          src: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/linkedin_gbpe7u.png',
          alt: 'Linkedin',
        }}
        rs3={{
          href: 'https://api.whatsapp.com/send?phone=34638560723',
          target: '_blank',
          rel: 'noopener noreferrer',
          src: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1681288245/NASA/whatsapp_s2iqjh.png',
          alt: 'WhatsApp',
        }}
        rs4={{
          href: 'mailto:jaimefloreslujan@gmail.com',
          target: '_blank',
          rel: 'noopener noreferrer',
          src: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1679591861/NASA/email_bgpahe.png',
          alt: 'email',
        }}
      />
    </div>
  );
}

export default App;
