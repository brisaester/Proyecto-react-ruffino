import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap (opcional)
import { FaHome } from 'react-icons/fa'; // Asegúrate de importar FaHome desde react-icons
import '../App.css'; // Importa el archivo CSS desde la carpeta src

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand custom-brand" href="#">
        <FaHome /> RUFFINO Cat Lovers
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end custom-nav" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Nuevos ingresos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Nosotros</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
