import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Dropdown } from 'react-bootstrap';
import { FaHeart, FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { IoPersonOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCancel, MdOutlineStarBorderPurple500 } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import logo from '../Homepage/HomepageImages/logo.svg';
import { Link } from 'react-router-dom';
import { GrFormView } from "react-icons/gr";

const Header = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div style={{
        backgroundColor: '#DDC3C3',
        height: '70px',
        padding: '0 10px',
      }}>
        <Navbar expand="lg" className="header-navbar" style={{
          height: '100%',
          width: '100%',
        }}>
        <Navbar.Brand href="#" className="mr-4"> 
  <img
    src={logo}
    alt="Brand Logo"
    width="40"
    height="40"
    className="d-inline-block align-top"
  />
           </Navbar.Brand>
           <div style={{alignItems: 'center'}}>
        <Form className="search-bar">
         <FormControl type="text" placeholder="What are you looking for?" />
          <button className="search-button" type="submit">
             <FaSearch />
          </button>
        </Form>
        </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
            
            <Nav className="icons-bar">
              <FaHeart
                style={{
                  color: isLiked ? '#000000' : '#D21F1F',
                  cursor: 'pointer',
                  marginTop: '0.7rem',
                  marginRight: '1rem',
                }}
                onClick={handleClick}
              />
              <Dropdown alignRight>
                <Dropdown.Toggle as={FaShoppingCart} id="cart-dropdown" className="icon-btn" />
                <Dropdown.Menu>
                  <Link to="/view/cart"><GrFormView /> View</Link>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown alignRight>
                <Dropdown.Toggle as={FaUser} id="profile-dropdown" className="icon-btn" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#manage-account"><IoPersonOutline /> Manage My Account</Dropdown.Item>
                  <Dropdown.Item href="#manage-orders"><LuShoppingBag /> Manage Orders</Dropdown.Item>
                  <Dropdown.Item href="#my-cancellations"><MdOutlineCancel /> My Cancellations</Dropdown.Item>
                  <Dropdown.Item href="#my-reviews"><MdOutlineStarBorderPurple500 /> My Reviews</Dropdown.Item>
                  <Dropdown.Item href="#logout"><TbLogout2 /> Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
