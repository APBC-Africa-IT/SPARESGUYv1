import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem('cartItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(cartItem => cartItem.id === item.id);

      if (existingItemIndex !== -1) {
       
        const updatedItems = [...prevCartItems];
        updatedItems[existingItemIndex].quantity += item.quantity || 1;
        return updatedItems;
      } else {
        
        return [...prevCartItems, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Checkout successful!');
    setCartItems([]);
    localStorage.removeItem('cartItems'); 
    setShowModal(false);
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal); 
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        handleRemoveItem,
        handleCheckout,
        showModal,
        toggleModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };