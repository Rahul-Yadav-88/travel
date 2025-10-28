import React from 'react'
import Navbar from '../../components/globalComponents/Navbar'
import Footer from '../../components/globalComponents/Footer'
import AboutPage from '../../components/Aboutcomp/About'

function Aboutpage() {
  return (
    <>
    <Navbar/>
    <div className='pt-16'>
      <AboutPage/>
    </div>
    <Footer/>
    </>
  )
}

export default Aboutpage
