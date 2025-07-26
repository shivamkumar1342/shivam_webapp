import React from 'react';
import "./Footer.css";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
<footer class="footer">
  <div class="footer-container">
    <div class="footer-brand">
      <h2>Shivam Digital</h2>
    </div>

    <div class="footer-links">
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>

    <div class="footer-social">
    <a href="https://www.linkedin.com/in/shivamkumar1342" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
    {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"> </i></a>
    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-twitter"> </i></a>
    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fab fa-youtube"> </i></a> */}
    <a href="https://github.com/shivamkumar1342" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
    <a href="https://wa.me/917667977670" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="fab fa-whatsapp"> </i></a>
    </div>

    <div class="footer-bottom">
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/terms-and-conditions">Terms & Conditions</a>
      <p>&copy; {new Date().getFullYear()} Shivam Digital. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
