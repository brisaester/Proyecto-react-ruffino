import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase'; 
import { doc, getDoc } from 'firebase/firestore'; 

const DetalleProducto = () => {
  const { id } = useParams(); // Obtiene el id del producto desde la URL
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        setLoading(true); // Inicia el loading antes de hacer la consulta
        const docRef = doc(db, 'items', id); // Referencia al producto con el id
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto(docSnap.data()); // Establece los detalles del producto
        } else {
          console.log('Producto no encontrado');
        }
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      } finally {
        setLoading(false); // Finaliza el loading cuando termina la consulta
      }
    };

    cargarProducto();
  }, [id]); // Dependemos de `id` para hacer la consulta al cargar la página

  if (loading) {
    return <div>Cargando producto...</div>; // Muestra el mensaje de carga mientras se obtiene el producto
  }

  if (!producto) {
    return <div>No se encontró el producto.</div>; // Muestra mensaje si no se encuentra el producto
  }

  return (
    <div className="container">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
    </div>
  );
};

export default DetalleProducto;
