import * as React from 'react';
import {BrowserRouter, Routes, Route } from "react-router"
import Navbar from './components/Navbar/NavBar.js';
import Footer from './components/Footer/Footer.js';
// import Footer from './components/Footer.js';
// import AboutSection from './components/AboutSection.js';
// import ResumeSection from './components/ResumeSection.js';
// import HeroSection1 from './components/HeroSection1.js';
import Home from './components/Home/Home.js';
import Service from './components/Service/Service.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.js';
import TermsConditions from './components/TermsConditions/TermsConditions.js';

const App = () => {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/services" element={<Service />}> </Route>
      <Route path="/portfolio" element={<Portfolio />}> </Route>
      <Route path="/about" element={<About />}> </Route>
      <Route path="/contact" element={<Contact />}> </Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />}> </Route>
      <Route path="/terms-and-conditions" element={<TermsConditions />}> </Route>
    </Routes>
        {/* <HeroSection1 />
        <AboutSection />
        <ResumeSection /> */}
    
      <br />
      <br />
     <Footer />    
     </BrowserRouter>
  </>
  )
}

export default App;