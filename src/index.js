import React from 'react';
import ReactDOM from 'react-dom/client';  // Usar createRoot si estás en React 18+
import 'bootstrap/dist/css/bootstrap.min.css'; // Si usas Bootstrap
import App from './App';  // Importa correctamente el componente App

const root = ReactDOM.createRoot(document.getElementById('root')); // Usando createRoot en React 18
root.render(
  <React.StrictMode>
    <App /> {/* Renderiza el componente App */}
  </React.StrictMode>
);
