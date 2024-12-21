import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'; 
import Catalogo from './components/Catalogo';
import DetalleProducto from './components/DetalleProducto';
import Cart from './components/Cart';
import ImageWithText from './components/ImageWithText';
import cortana from './img/cortana.png';
import alexa from './img/alexa.png';
import siri from './img/siri.png';
function App() {
  return (
    <Router>
      {/* Navbar que se mantiene en todas las rutas */}
      <NavBar />

      {/* Definición de las rutas */}
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/category/:id" element={<Catalogo />} />
        <Route path="/item/:id" element={<DetalleProducto />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <div>
        <ImageWithText src={cortana} alt="Cortana" />
        <ImageWithText src={alexa} alt="Alexa" />
        <ImageWithText src={siri} alt="Siri" />
      </div>
    </Router>
  );
}

export default App;

