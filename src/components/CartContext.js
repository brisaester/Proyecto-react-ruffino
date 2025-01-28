// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Añade un producto al carrito
  };

  const removeItemFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id)); // Elimina un producto del carrito
  };

  const clearCart = () => {
    setCart([]); // Vacía el carrito
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
