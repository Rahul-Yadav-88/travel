import React from 'react'
import Navbar from '../../components/globalComponents/Navbar'
import Footer from '../../components/globalComponents/Footer'
import Services from '../../components/Servicescomp/Services'

function Aboutpage() {
  return (
    <>
    <Navbar/>
    <div className='pt-16'>
    <Services/>

    </div>
    <Footer/>
    </>
  )
}

export default Aboutpage