import React from 'react'
import CustomerReviews from '../../components/Landingcomp/CustomerReviews'
import TravelArticles from '../../components/Landingcomp/TravelArticles'
import Newsletter from '../../components/Landingcomp/Newsletter'
import Navbar from '../../components/globalComponents/Navbar'
import Footer from '../../components/globalComponents/Footer'
import StatsFeatureCards from '../../components/Landingcomp/StatsFeatureCards'
import PopularSection from '../../components/Landingcomp/PopularSection'
import TrustedBrands from '../../components/Landingcomp/TrustedBrands'
import PopularThings from '../../components/Landingcomp/PopularThings'
import TrendingDestinations from '../../components/Landingcomp/TrendingDestinations'
import Hero from '../../components/Landingcomp/Hero'

function Page() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <TrustedBrands/>
    <PopularThings/>
    <TrendingDestinations/>
    <CustomerReviews/>
    <StatsFeatureCards/>
    <TravelArticles/>
    <PopularSection/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Page
