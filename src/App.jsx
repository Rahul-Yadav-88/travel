


import React from "react";
import ContactUsPage from "./pages/Contactuspage/ContactUsPage"
import LandingPage from './pages/Landingpage/LandingPage'
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/contactus" element={<ContactUsPage/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App;
