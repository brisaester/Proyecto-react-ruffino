import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../config/firebase'; // Asegúrate de que el import sea correcto
import { collection, getDocs } from 'firebase/firestore'; // Importa los métodos necesarios de Firestore

const Catalogo = () => {
  const { id } = useParams(); // Este es el id de la categoría que viene en la URL
  const [items, setItems] = useState([]); // Cambié 'productos' por 'items'

  useEffect(() => {
    // Función para cargar los productos desde Firestore
    const cargarItems = async () => {
      const itemsCollection = collection(db, 'items'); // Cambié 'productos' por 'items'
      const itemsSnapshot = await getDocs(itemsCollection); // Obtén los documentos
      const itemsList = itemsSnapshot.docs.map(doc => ({
        id: doc.id, // Asegúrate de que cada item tenga un 'id' único
        ...doc.data()
      })); // Convierte los documentos en un array y agrega el 'id' de Firestore

      // Filtra los productos según la categoría si hay un id en la URL
      const itemsFiltrados = itemsList.filter(
        item => item.categoriaId === parseInt(id) || !id // Asegúrate de que 'categoriaId' exista en Firestore
      );
      setItems(itemsFiltrados);
    };

    cargarItems();
  }, [id]);

  return (
    <div className="container">
      <h2>Catálogo de Productos</h2>
      <div className="row">
        {items.length > 0 ? (
          items.map((item) => {
            // Asegúrate de tener una clave única. Si no tienes 'id', usa 'nombre' o una combinación.
            const key = item.id ? item.id : item.nombre;
            // Verifica si la imagen está disponible, si no, coloca una imagen por defecto
            const imageSrc = item.imagen || 'ruta/a/imagen/por_defecto.png';

            return (
              <div key={key} className="col-md-6">
                <div className="card">
                  <img className="card-img-top img-fluid" src={imageSrc} alt={item.nombre} />
                  <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.descripcion}</p>
                    <Link to={`/item/${item.id}`} className="btn btn-primary">
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No se encontraron productos</p>
        )}
      </div>
    </div>
  );
};

export default Catalogo;
