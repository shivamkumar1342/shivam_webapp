import React from 'react'
import './Home.css'
import Shivam from '../../assets/ShivamKumar.jpg';
// import ShivamMTB from '../../assets/ShivamMTB.jpeg';
import WebDev from '../../assets/wd.jpg';
// import SMM from '../../assets/smm.jpg';
import DM from '../../assets/dm.jpg';

export default function Home() {
  return (
    
    <>
    <div class="home-hero">
  <div class="hero-content">
    <h1>Welcome to Shivam Digital</h1>
    <p>Your one-stop solution for Website Development, Digital Marketing, and Social Media Management.</p>
    <a href="/contact" class="hero-btn">Get in Touch</a>
  </div>
</div>

{/* <!-- About Preview --> */}
<section class="home-section" id="about">
  <div class="text-content">
    <h2>About Me</h2>
    <p>I'm <strong>Shivam Kumar</strong>, a BCA student at Graphic Era University, Dehradun and a freelance digital expert. I build websites, manage social media, and run high-performance ad campaigns.</p>
    <a href="/about" class="link-btn">More About Me →</a>
  </div>
  <div class="img-box">
    <img src={Shivam} alt="Shivam Kumar"/>
  </div>
</section>

{/* <!-- Services Preview --> */}
<section class="home-section bg-light" id="services">
  <div class="text-content">
    <h2>What I Offer</h2>
    <ul>
      <li>🌐 Website Development (WordPress / Custom / Odoo)</li>
      <li>📱 Social Media Management</li>
      <li>📊 Meta & Google Ads</li>
    </ul>
    <a href="/services" class="link-btn">View All Services →</a>
  </div>
  <div class="img-box">
    <img src={WebDev} alt="Service"/>
  </div>
</section>

{/* <!-- Portfolio Preview --> */}
<section class="home-section" id="portfolio">
  <div class="text-content">
    <h2>My Work</h2>
    <p>Explore my recent work including website development, SEO blogs, and social media campaigns.</p>
    <a href="/portfolio" class="link-btn">See Portfolio →</a>
  </div>
  <div class="img-box">
    <img src={DM} alt="Project preview"/>
  </div>
</section>

{/* <!-- Contact CTA --> */}
<section class="home-cta" id="contact">
  <h2>Let's Work Together</h2>
  <p>Ready to bring your brand online? Contact me for a free consultation!</p>
  <a href="/contact" class="hero-btn">Contact Now</a>
</section>

    </>
  )
}
