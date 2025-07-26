import * as React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router"
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
import Thankyou from './components/Thankyou/Thankyou.js'

const App = () => {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/thank-you" element={<Thankyou />}> </Route>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/services" element={<Service />}> </Route>
      <Route path="/portfolio" element={<Portfolio />}> </Route>
      <Route path="/about" element={<About />}> </Route>
      <Route path="/contact" element={<Contact />}> </Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />}> </Route>
      <Route path="/terms-and-conditions" element={<TermsConditions />}> </Route>
      <Route path="*" element={<Navigate to="/" replace />}> </Route>
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