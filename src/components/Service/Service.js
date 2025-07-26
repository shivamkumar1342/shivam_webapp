import React from 'react'
import './Service.css';
import WebDev from '../../assets/wd.jpg';
import SMM from '../../assets/smm.jpg';
import DM from '../../assets/dm.jpg';

function Service() {
  return (
    <>
    <div class="services-hero">
  <h1>My Services</h1>
  <p>I help brands grow online with stunning websites, smart content, and strategic digital marketing.</p>
</div>

<section class="services-list">

  {/* <!-- Website Development --> */}
  <div class="service-box">
    <img src={WebDev} alt="Website Development"/>
    <div class="service-content">
      <h2>Website Development</h2>
      <p>I build responsive, SEO-friendly websites using WordPress or custom code tailored to your business needs. From landing pages to full-scale business websites, I deliver fast, functional, and beautiful designs.</p>
      <ul>
        <li>WordPress, HTML/CSS, Odoo</li>
        <li>Domain & Hosting Setup</li>
        <li>Mobile Responsive Design</li>
      </ul>
    </div>
  </div>

  {/* <!-- Social Media Management --> */}
  <div class="service-box reverse">
    <img src={SMM} alt="Social Media Management"/>
    <div class="service-content">
      <h2>Social Media Management</h2>
      <p>Managing and growing your brand presence on Instagram, Facebook, and other platforms. I handle content creation, scheduling, strategy, and engagement to keep your audience active and growing.</p>
      <ul>
        <li>Instagram, Facebook, LinkedIn</li>
        <li>Content Calendars, Reels, Captions</li>
        <li>Growth Strategy & Reports</li>
      </ul>
    </div>
  </div>

  {/* <!-- Digital Marketing --> */}
  <div class="service-box">
    <img src={DM} alt="Digital Marketing"/>
    <div class="service-content">
      <h2>Digital Marketing (Meta & Google Ads)</h2>
      <p>I design and run high-converting ad campaigns using Meta Ads (Facebook & Instagram) and Google Ads. Reach your target audience and get real results like leads, sales, and awareness.</p>
      <ul>
        <li>Ad Design & Copywriting</li>
        <li>Campaign Setup & Optimization</li>
        <li>Analytics & Performance Reports</li>
      </ul>
    </div>
  </div>

</section>

    </>
  )
}

export default Service;