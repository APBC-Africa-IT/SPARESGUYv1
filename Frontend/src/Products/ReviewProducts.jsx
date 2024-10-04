import React, { useState } from 'react';
import Header from '../Constants/Header';
import Footer from '../Constants/Footer';



const ReviewProducts = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'apbc africa',
      rating: 5,
      text: 'Enhance your driving visibility with our premium Car Headlight, designed for optimal performance and safety. This high-quality headlight offers bright, clear illumination, ensuring excellent road visibility even in low-light or harsh weather conditions. Built with durable materials',
      date: 'Sept 12, 2024'
    },
    {
      id: 2,
      name: 'apbc africa',
      rating: 5,
      text: 'Enhance your driving visibility with our premium Car Headlight, designed for optimal performance and safety. This high-quality headlight offers bright, clear illumination, ensuring excellent road visibility even in low-light or harsh weather conditions. Built with durable materials',
      date: 'Sept 12, 2024'
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    text: '',
    rating: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.email && newReview.text && newReview.rating > 0) {
      setReviews([
        ...reviews,
        { id: reviews.length + 1, name: newReview.name, rating: newReview.rating, text: newReview.text, date: new Date().toDateString() }
      ]);
      setNewReview({ name: '', email: '', text: '', rating: 0 });
    }
  };

  return (
    <>
    <Header/>
   
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px'}}>
        <h2>Customer Reviews</h2>

        {reviews.map((review) => (
          <div key={review.id} style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #ccc' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: '#000', borderRadius: '50%', marginRight: '10px' }}></div>
              <div>
                <h4 style={{ margin: '0', textTransform: 'capitalize' }}>{review.name}</h4>
                <div>
                  {'★'.repeat(review.rating).padEnd(5, '☆')} 
                </div>
              </div>
            </div>
            <p style={{ margin: '10px 0' }}>{review.text}</p>
            <p style={{ color: '#aaa', fontSize: '12px' }}>posted on {review.date}</p>
          </div>
        ))}

        <h3>Add your review</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Your Rating</label>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setNewReview((prev) => ({ ...prev, rating: star }))}
                  style={{
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: newReview.rating >= star ? '#f5c518' : '#ccc',
                    marginRight: '5px'
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={newReview.name}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={newReview.email}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
              required
            />
          </div>
          <div>
            <textarea
              name="text"
 placeholder="Enter Your Review"
              value={newReview.text}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                height: '100px'
              }}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ReviewProducts;