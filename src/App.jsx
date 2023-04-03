import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Astronomical from './Pages/Astronomical/Astronomical';
import Rover from './Pages/Rover/Rover';
import Api from './Pages/Rover/Api';

function App() {
  // Declaramos el useState en este archivo para poder acceder a la info para declarar
  // una página u otra ya que no podemos declarar props directamente en la línea 16
  const [toggle, setToggle] = useState('ASTRONOMICAL');

  return (
    <div id="App">
      <Header toggle={toggle} setToggle={setToggle} />
      {/* En vez del Figure he puesto lo siguiente */}
      {toggle === 'ASTRONOMICAL' ? <Astronomical /> : <Astronomical />}
      {Footer()}
    </div>
  );
}

export default App;
