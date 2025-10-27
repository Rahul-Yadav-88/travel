


import React from "react";
import ContactUsPage from "./pages/Contactuspage/ContactUsPage"
import LandingPage from './pages/Landingpage/LandingPage'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AboutPage from "./pages/Aboutpage/Aboutpage";
import Services from './pages/Servicespage/Servicespage'

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/contactus" element={<ContactUsPage/>}/>
    <Route path="/Aboutus" element={<AboutPage/>}/>
    <Route path="/Services" element={<Services/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App;
