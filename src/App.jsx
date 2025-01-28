// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; // Importa el CartProvider
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Catalogo from './components/Catalogo';
import DetalleProducto from './components/DetalleProducto';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/category/:id" element={<Catalogo />} />
          <Route path="/item/:id" element={<DetalleProducto />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
