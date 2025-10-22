import React from 'react'
import CustomerReviews from '../../components/Landingcomp/CustomerReviews'
import TravelArticles from '../../components/Landingcomp/TravelArticles'
import Newsletter from '../../components/Landingcomp/Newsletter'
import Navbar from '../../components/globalComponents/Navbar'
import Footer from '../../components/globalComponents/Footer'

function Page() {
  return (
    <>
    <Navbar/>
    <CustomerReviews/>
    <TravelArticles/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Page
