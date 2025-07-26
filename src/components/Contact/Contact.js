// import React from 'react'
import './Contact.css';
import { FaGithub } from "react-icons/fa";
// import {helmet} from "react-helmet";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';


export default function Contact() {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    navigate ("/thank-you")

    emailjs
      .sendForm('service_l6k7he5', 'template_wwn9jpr', form.current, {
        publicKey: 'ImttaqwpM5WCGcWSH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // alert('Submitted Successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
      e.target.reset()
  };

  return (
    <>
    <div class="contact-hero">
      <helmet>
        <title>Contact | Shivam Digital</title>
        <meta name="description" content="Get in touch with Shivam Digital for your website, social media, and digital marketing needs. Available via email, phone, or form." />
        <meta name="keywords" content="Contact Shivam, Freelance Contact Form, Hire Web Developer, Hire Digital Marketer, Contact Social Media Manager, Shivam Kumar Contact" />



      </helmet>
  <h1>Contact</h1>
</div>

<section class="contact-section">
  <div class="contact-container">
    <div class="contact-form">
      <h2>Send me a Message</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="Name" placeholder="Name" required />
        <input type="email" name="Email" placeholder="Email" required />
        <input type="tel" name="Phone" maxLength="10" pattern="[6-9]{1}[0-9]{9}" placeholder="Phone Number" required />
        <textarea name="Question" placeholder="Your Question" required></textarea>
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
