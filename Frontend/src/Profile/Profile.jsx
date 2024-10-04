import React, { useState } from 'react';
import '../Homepage/HomepageCSS/Profile.css'
import { FaHeart, FaBell, FaCog, FaEdit, FaUser } from 'react-icons/fa';
import Header from '../Constants/Header';
import Footer from '../Constants/Footer';
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
     <>
    <Header/>
    <div className="profile-container">

      <aside className="profile-sidebar">
        <div className="profile-picture">
          <img src="/path-to-avatar-placeholder" alt="Profile" className="profile-avatar" />
          <div className="edit-icon">
            <FaEdit />
          </div>
        </div>
        <ul className="sidebar-menu">
          <li>
            <button className="active">
              <FaUser />
              Personal Information
            </button>
          </li>
          <li>
            <button >
              <FaHeart />
              My Wishlist
            </button>
          </li>
          <li>
            <button>
              <FaBell />
              Notifications
            </button>
          </li>
          <li>
            <button>
              <FaCog />
              Settings
            </button>
          </li>
        </ul>
      </aside>

      <section className="profile-details">
        <div className="header">
          <h1>My Profile</h1>
          <button className="edit-button" onClick={handleEditToggle}>
            {isEditing ? 'Save' : 'Edit Profile'}
          </button>
        </div>

        <form className="profile-form">
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              defaultValue="apbc"
              disabled={!isEditing}
            />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              defaultValue="africa"
              disabled={!isEditing}
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="+254XXXXXXX"
              defaultValue="+254548943474"
              disabled={!isEditing}
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              defaultValue="apbcafrica@gmail.com"
              disabled={!isEditing}
            />
          </div>

          <div className="input-group">
            <label>Address</label>
            <input
              type="text"
              placeholder="Address"
              defaultValue="Ngara, Nairobi"
              disabled={!isEditing}
            />
          </div>
        </form>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Profile;
