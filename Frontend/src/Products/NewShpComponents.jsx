// import { useContext } from 'react';
// import { CartContext } from './CartProvider';
// import Cart from './Cart';

// function ShopComponent() {
//   const { showModal, toggleModal, cartItems, handleRemoveItem, handleCheckout, handleAddToCart } = useContext(CartContext);

//   const sampleProduct = { id: 1, name: "Sample Product", price: 100, quantity: 1 };

//   return (
//     <div>
//       <button onClick={() => handleAddToCart(sampleProduct)}>Add Sample Product to Cart</button>

//       <button onClick={toggleModal}>View Cart</button>

//       <Cart
//         showModal={showModal}
//         handleCloseModal={toggleModal}
//         cartItems={cartItems}
//         handleRemoveItem={handleRemoveItem}
//         handleCheckout={handleCheckout}
//       />
//     </div>
//   );
// }

// export default ShopComponent;
