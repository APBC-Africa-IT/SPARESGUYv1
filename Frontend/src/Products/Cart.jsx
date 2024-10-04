import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = ({ showModal, handleCloseModal, cartItems, handleRemoveItem, handleCheckout }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: Ksh{item.price}</p>
              <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>
                <RiDeleteBin6Line />
              </Button>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <p className="cart-total">Total: Ksh{totalAmount}</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button 
          variant="primary" 
          onClick={handleCheckout} 
          disabled={cartItems.length === 0}
        >
          Checkout
        </Button>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
