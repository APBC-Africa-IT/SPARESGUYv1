
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import {Provider} from 'react-redux';
import store from './store.js'
import Homepage from './Homepage/Homepage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import RegistrationPage from './Pages/RegistrationPage.jsx'
import ProductListing from './Products/ProductListing.jsx'
import ProductDetails from './Products/ProductDetails.jsx'
import ReviewProducts from './Products/ReviewProducts.jsx'
import Cart from '../src/Products/Cart.jsx'
import { CartContext } from './Products/CartContext.jsx'
import { CartProvider } from './Products/CartContext.jsx'
// import NewShopComponents from './Products/NewShpComponents.jsx'
import ViewCart from './Products/ViewCart.jsx'
import Checkout from './Payment/Checkout.jsx'
import Testimonials from './Homepage/Testimonials.jsx'
import Payment from './Payment/Payment.jsx'
import Profile from './Profile/Profile.jsx'




const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<ProductListing />} />
     <Route path="/product" element={<ProductDetails />} />
      <Route path="/review/" element={<ReviewProducts />} />
      <Route path="/cart/" element={<Cart />} />
      <Route path="/context/" element={<CartContext />} />
      <Route path="/provider/" element={<CartProvider />} />
      {/* <Route path="/components/" element={<NewShopComponents />} /> */}
      <Route path='/view/cart' element={<ViewCart />} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/testimonials' element={<Testimonials/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/profile' element={<Profile/>} />






      
     


    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);