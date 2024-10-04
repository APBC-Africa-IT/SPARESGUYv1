import React from 'react'
import Banner from './Banner'
import BrandLogos from './BrandLogos'
import FeaturedProducts from '../Products/FeaturedProducts'
import Header from '../Constants/Header'
import Testimonials from './Testimonials'
import Statistics from './Statistics'
import ProductListing from '../Products/ProductListing'
import ProductDetails from '../Products/ProductDetails'
import ReviewProducts from '../Products/ReviewProducts'
import Footer from '../Constants/Footer'



 

const Homepage = () => {
  return (
    <>
      <Header />
      <Banner />
      <BrandLogos />
      <FeaturedProducts />
      <ProductListing />
      <ProductDetails />
      <ReviewProducts/>
      <Testimonials />
      <Statistics />
      <Footer />
    </>
  )
}

export default Homepage