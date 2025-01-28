import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeItemFromCart, clearCart } = useCart();

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <div>
          {cart.map((producto) => (
            <div key={producto.id} className="row">
              <div className="col-md-8">
                <h5>{producto.nombre}</h5>
                <p>{producto.descripcion}</p>
              </div>
              <div className="col-md-4">
                <button onClick={() => removeItemFromCart(producto.id)} className="btn btn-danger">Eliminar</button>
              </div>
            </div>
          ))}
          <button onClick={clearCart} className="btn btn-warning">Vaciar carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
