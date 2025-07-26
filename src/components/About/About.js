import React from 'react'
import './About.css';
import Shivam from '../../assets/ShivamKumar.jpg';
import ShivamMTB from '../../assets/ShivamMTB.jpeg';
import WebDev from '../../assets/wd.jpg';
import SMM from '../../assets/smm.jpg';
import DM from '../../assets/dm.jpg';
// import {helmet} from "react-helmet";

export default function About() {
  return (
   <>
   <div class="about-hero">
    <helmet>
    <title>About Shivam Kumar | Shivam Digital</title>
    <meta name="description" content="Learn about Shivam Kumar, a BCA student, national-level mountain biker, and freelance website developer & digital marketer based in Dehradun." />
    <meta name="keywords" content="Shivam Kumar, About Shivam Digital, BCA Student Developer, Freelancer in Dehradun, Digital Marketer, Website Developer, MTB Athlete" />


    </helmet>
  <div class="about-hero-content">
    <img src={Shivam} alt="Shivam Kumar" class="profile-image" />
    <div>
      <h1>Shivam Kumar</h1>
      <p>BCA Student at Graphic Era Deemed to be University, Dehradun</p>
    </div>
  </div>
</div>

<section class="about-main">

  {/* <!-- Services --> */}
  <div class="about-block">
    <h2>What I Do</h2>
    <div class="services-grid">
      <div class="service-item">
        <img src={WebDev} alt="Website Development" />
        <h3>Website Development</h3>
        <p>End-to-end websites using WordPress & custom coding.</p>
      </div>
      <div class="service-item">
        <img src={SMM} alt="Social Media Management" />
        <h3>Social Media Management</h3>
        <p>Handle Instagram, Facebook, LinkedIn & more.</p>
      </div>
      <div class="service-item">
        <img src={DM} alt="Digital Marketing" />
        <h3>Digital Marketing</h3>
        <p>Meta & Google Ads campaigns for business growth.</p>
      </div>
    </div>
  </div>

  {/* <!-- Skills --> */}
  <div class="about-block">
    <h2>Skills</h2>
    <ul class="skills-list">
    <li>Website Development</li>
      <li>Digital Marketing</li>
      <li>Social Media Marketing</li>
      <li>Video Editing</li>
    <li>SEO</li>
      
    </ul>
  </div>

  {/* <!-- Hobby & Achievement --> */}
  <div class="about-block hobby">
    <h2>My Passion: Mountain Biking</h2>
    <div class="hobby-content">
      <img src={ShivamMTB} alt="Shivam Kumar in full biking look with his Mountain Bike" />
      <div>
        <p>I'm an avid mountain biker and national-level cross-country (XC) racer.</p>
        <ul>
          <li><strong>🏆 State Champion</strong> – XC MTB Bihar</li>
          <li><strong>🇮🇳 National Player</strong> – XC MTB 2023</li>
        </ul>
      </div>
    </div>
  </div>

</section>

   </>
  )
}
