import React from 'react'
import './Contact.css';
import { FaGithub } from "react-icons/fa";


export default function Contact() {
  return (
    <>
    <div class="contact-hero">
  <h1>Contact</h1>
</div>

<section class="contact-section">
  <div class="contact-container">
    <div class="contact-form">
      <h2>Send me a Message</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone Number" required />
        <textarea placeholder="Your Question" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>

    <div class="contact-info">
      <h2>Shivam Digital</h2>
      <p><strong>Email:</strong> shivamraj1342@gmail.com</p>
      <p><strong>Phone:</strong> +91-76679-77670</p>
      <div class="contact-social">
    <a href="https://www.linkedin.com/in/shivamkumar1342" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
    {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"> </i></a>
    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-twitter"> </i></a>
    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fab fa-youtube"> </i></a> */}
    <a href="https://github.com/shivamkumar1342" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
    <a href="https://wa.me/917667977670" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="fab fa-whatsapp"> </i></a>
      </div>
    </div>
  </div>
</section>
</>

  )
}
