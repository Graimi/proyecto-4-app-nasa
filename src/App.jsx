import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Astronomical from './Pages/Astronomical/Astronomical';
import Rover from './Pages/Rover/Rover';
import Footer from './components/Footer/Footer';

// Como se pedía en el enunciado, se ha sacado el cambio entre las dos páginas por un uso
// diferente del useState, en este caso eligiendo la pág por props dependientes del useState interno
// alimentado del Header
function App() {
  // Declaramos el useState en este archivo para poder acceder a la info para declarar
  // una página u otra ya que no podemos declarar props directamente en la línea 16
  // Se establece por defecto la pág ASTRONOMICAL
  const [toggle, setToggle] = useState('ASTRONOMICAL');

  return (
    <div id="App">
      <Header toggle={toggle} setToggle={setToggle} />
      {/* En vez del Figure que pedía el enunciado he puesto lo siguiente */}
      {/* Según la info del prop se visualizará una pág u otra */}
      {toggle === 'ASTRONOMICAL' ? <Astronomical /> : <Rover />}
      <Footer />
    </div>
  );
}

export default App;
