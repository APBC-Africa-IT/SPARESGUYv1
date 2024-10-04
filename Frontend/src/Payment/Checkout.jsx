import React, { useState } from "react";
import Header from "../Constants/Header";
import Footer from "../Constants/Footer";
import '../Homepage/HomepageCSS/Checkout.css'
import { RiDeleteBinLine } from "react-icons/ri";
import airfilters from '../Homepage/HomepageImages/airfilters.svg'

const Checkout = () => {
  const [cartItems, setCartItems] = useState([
    { image: airfilters, name: 'airfilter', price: 4000 },
    { image: airfilters, name: 'airfilter', price: 3500 },
    { image: airfilters, name: 'airfilter', price: 4000 },
    
]);

  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(0.0);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const applyDiscount = () => {
    const discountCodes = {
      "SUMMER15": 15.0,
      "WINTER10": 10.0,
      "SPRING20": 20.0,
    };

    if (discountCode in discountCodes) {
      const discountAmount = (cartItems.reduce((total, item) => total + item.price * item.quantity, 0) * discountCodes[discountCode]) / 100;
      setDiscountApplied(discountAmount);
    } else {
      setDiscountApplied(0.0);
    }
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const grandTotal = subtotal - discountApplied;

  return (
    <>
      <Header />
      <div className="checkout-page">
        <h2>Checkout</h2>
        <div className="checkout-container">
          {/* Left Side - Cart Items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src="/path/to/image.jpg" // Update with real image path
                  alt={item.name}
                  className="product-image"
                />
                <div className="product-details">
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>
                      +
                    </button>
                  </div>
                  <p className="item-subtotal">
                    ${ (item.price * item.quantity).toFixed(2) }
                  </p>
                </div>
                <button
                  className="remove-item"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <RiDeleteBinLine />
                </button>
              </div>
            ))}
          </div>

          <div className="checkout-summary">
            <div className="summary-details">
              <p>
                Subtotal <span>${subtotal.toFixed(2)}</span>
              </p>
              <div className="discount-section">
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="Enter Discount Code"
                />
                <button onClick={applyDiscount}>Apply</button>
              </div>
              <p>
                Discount Applied <span>${discountApplied.toFixed(2)}</span>
              </p>
              <p className="grand-total">
                Grand Total <span>${grandTotal.toFixed(2)}</span>
              </p>
              <button className="checkout-button">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
