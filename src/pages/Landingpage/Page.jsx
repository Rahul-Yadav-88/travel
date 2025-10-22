import React from 'react'
import CustomerReviews from '../../components/Landingcomp/CustomerReviews'
import TravelArticles from '../../components/Landingcomp/TravelArticles'
import Newsletter from '../../components/Landingcomp/Newsletter'
import Navbar from '../../components/globalComponents/Navbar'

function Page() {
  return (
    <>
    <Navbar/>
    <CustomerReviews/>
    <TravelArticles/>
    <Newsletter/>
    </>
  )
}

export default Page
