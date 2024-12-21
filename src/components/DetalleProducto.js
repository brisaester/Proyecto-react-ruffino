

import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
  const { id } = useParams(); // Obtiene el ID del producto
  const [producto, setProducto] = useState(null); 

  useEffect(() => {
    // Simula la respuesta del producto
    const productoSimulado = {
      id: id,
      nombre: 'Producto ' + id,
      descripcion: 'facilitare tu día a día' + id,
    };

    setProducto(productoSimulado);
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
    </div>
  );
}

export default DetalleProducto;
