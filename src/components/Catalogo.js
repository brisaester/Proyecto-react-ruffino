import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Catalogo = () => {
  const { id } = useParams(); // Este es el id de la categoría que viene en la URL
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Simula la carga de productos según la categoría
    const cargarProductos = () => {
      const productosDisponibles = [
        { id: 1, nombre: 'Cortana', descripcion: 'Hola, soy Cortana, inteligente.', imagen: '/img/cortana.png' },
        { id: 2, nombre: 'Alexa', descripcion: 'Hola, soy Alexa, tecnológica.', imagen: '/img/alexa.png' },
        { id: 3, nombre: 'Siri', descripcion: 'Hola, soy Siri, asistente.', imagen: '/img/siri.png' },
      ];

      // Filtrar productos según la categoría (por ahora lo hacemos manualmente)
      const productosFiltrados = productosDisponibles.filter(
        producto => producto.id === parseInt(id) || !id
      );

      setProductos(productosFiltrados);
    };

    cargarProductos();
  }, [id]);

  return (
    <div className="container">
      <h2>Catálogo de Productos</h2>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-6">
            <div className="card">
              {/* Añado img-fluid para que las imágenes sean responsivas */}
              <img className="card-img-top img-fluid" src={producto.imagen} alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                {/* Aquí es donde se genera el enlace para ver los detalles del producto */}
                <Link to={`/item/${producto.id}`} className="btn btn-primary">Ver detalles</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;


