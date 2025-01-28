import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa'; 
import { useCart } from './CartContext';
import '../App.css';

const NavBar = () => {
  const { cart } = useCart(); // Obtiene los productos del carrito

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand custom-brand" to="/">
        <FaHome /> RUFFINO Cat Lovers
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end custom-nav" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/inicio">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/1">Productos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <FaShoppingCart /> Carrito {cart.length > 0 && `(${cart.length})`}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
