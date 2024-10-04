import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import '../Homepage/HomepageCSS/Payment.css'
import Header from '../Constants/Header';
import Footer from '../Constants/Footer';


const Payment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    building: '',
    deliveryDate: '',
    note: '',
    paymentMethod: 'credit-debit',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.mobile || formData.mobile.length < 10) formErrors.mobile = 'Valid mobile number is required';
    if (!formData.city) formErrors.city = 'City is required';
    if (!formData.deliveryDate) formErrors.deliveryDate = 'Delivery date is required';
    if (formData.paymentMethod === 'credit-debit') {
      if (!formData.cardName) formErrors.cardName = 'Name on card is required';
      if (!formData.cardNumber || formData.cardNumber.length < 16) formErrors.cardNumber = 'Valid card number is required';
      if (!formData.expiryDate) formErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv || formData.cvv.length < 3) formErrors.cvv = 'Valid CVV is required';
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true); 
      console.log('Form Submitted:', formData);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <Header/>
    <div className="payment-container">
      
      <form className="delivery-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Delivery Information</h2>
          <div className="row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label>Mobile Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Mobile</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={handleInputChange}
                className={errors.mobile ? 'error' : ''}
              />
              {errors.mobile && <p className="error-text">{errors.mobile}</p>}
            </div>
            <div className="form-group">
              <label>City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className={errors.city ? 'error' : ''}
              >
                <option value="">Select city</option>
                <option value="Nairobi">Nairobi</option>
                <option value="Kisumu">Kisumu</option>
                
              </select>
              {errors.city && <p className="error-text">{errors.city}</p>}
            </div>
          </div>

          <div className="form-group">
            <label>Building</label>
            <input
              type="text"
              name="building"
              placeholder="Building Name"
              value={formData.building}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Schedule Delivery</h3>
          <div className="row">
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleInputChange}
                className={errors.deliveryDate ? 'error' : ''}
              />
              {errors.deliveryDate && <p className="error-text">{errors.deliveryDate}</p>}
              <FaLock className="icon" />
            </div>
            <div className="form-group">
              <label>Note</label>
              <textarea
                name="note"
                placeholder="Type your note"
                value={formData.note}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="form-section">
          <h3>Payment Method</h3>
          <div className="payment-options">
            <div className="radio-group">
              <input
                type="radio"
                id="credit-debit" 
                name="paymentMethod"
                value="credit-debit"
                checked={formData.paymentMethod === 'credit-debit'}
                onChange={handleInputChange}
              />
              <label htmlFor="credit-debit">Credit/Debit card</label>
            </div>
            <div className="radio-group">
              <input
                type="radio"
                id="cash-on-delivery"
                name="paymentMethod"
                value="cash-on-delivery"
                onChange={handleInputChange}
              />
              <label htmlFor="cash-on-delivery">Cash on Delivery</label>
            </div>
            <div className="radio-group">
              <input
                type="radio"
                id="lipa-na-mpesa"
                name="paymentMethod"
                value="lipa-na-mpesa"
                onChange={handleInputChange}
              />
              <label htmlFor="lipa-na-mpesa">Lipa Na Mpesa</label>
            </div>
          </div>
        </div>

        {formData.paymentMethod === 'credit-debit' && (
          <div className="payment-info">
            <h3>Payment Information</h3>
            <div className="form-group">
              <label>Name on Card</label>
              <input
                type="text"
                name="cardName"
                placeholder="Name"
                value={formData.cardName}
                onChange={handleInputChange}
                className={errors.cardName ? 'error' : ''}
              />
              {errors.cardName && <p className="error-text">{errors.cardName}</p>}
            </div>
            <div className="form-group">
              <label>Account Number</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className={errors.cardNumber ? 'error' : ''}
              />
              {errors.cardNumber && <p className="error-text">{errors.cardNumber}</p>}
            </div>
            <div className="row">
              <div className="form-group">
                <label>Expiration Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className={errors.expiryDate ? 'error' : ''}
                />
                {errors.expiryDate && <p className="error-text">{errors.expiryDate}</p>}
                <FaLock className="icon" />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input
                  type="text"
                  name="cvv"
                  placeholder="Number"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className={errors.cvv ? 'error' : ''}
                />
                 {errors.cvv && <p className="error-text">{errors.cvv}</p>}
              </div>
            </div>
          </div>
        )}

        <div className="payment-summary">
          <div className="total-amount">
            <p>Grand Total</p>
            <p>$270.00</p> 
          </div>
          <button type="submit" className="confirm-btn">
            Confirm
          </button>
        </div>
      </form>

      {submitted && (
        <div className="success-message">
          <h3>Thank you! Your order has been placed successfully.</h3>
        </div>
      )}
    </div>
    <Footer/>
    </>
    
  );
};

export default Payment;