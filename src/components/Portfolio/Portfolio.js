import React from 'react'
import './Portfolio.css';
import chatpataweb from '../../assets/chatpataweb.png'
import chatpatasocial from '../../assets/chatpatasocial.png'
import RaushanYogantablog from '../../assets/RaushanYogantablog.png'
import YogantaAcademyweb from '../../assets/YogantaAcademyweb.png'
import MetaAds from '../../assets/metaAds.jpg'



function Portfolio() {
  return (
    <>
    <div class="portfolio-hero">
  <h1>My Portfolio</h1>
  <p>Explore my latest freelance projects in website development, social media management, and digital marketing.</p>
</div>

<section class="portfolio-section">

  {/* <!-- Project 1 --> */}
  <div class="project-card">
    <img src={chatpataweb} alt="Chatpata Affair Website" />
    <div class="project-info">
      <h2>ChatpataAffair.com</h2>
      <p><strong>Platform:</strong> Odoo</p>
      <p><strong>Description:</strong> Developed a full website for Chatpata Affair, a growing street food franchise chain.</p>
      <p><strong><span>Visit site:</span></strong>&nbsp;<a href="https://www.chatpataaffair.com" target="_blank" rel="noopener noreferrer">www.chatpataaffair.com</a> </p>
    </div>
  </div>

  {/* <!-- Project 2 --> */}
  <div class="project-card">
    <img src={chatpatasocial} alt="Chatpata Affair Social Media" />
    <div class="project-info">
      <h2>Social Media Management : Chatpata Affair</h2>
      <p>Managing Instagram & Facebook handles, posting regular updates, reels, and engagement campaigns.</p>
    </div>
  </div>

  {/* <!-- Project 3 --> */}
  <div class="project-card">
    <img src={RaushanYogantablog} alt="Raushan Yoganta Blog" />
    <div class="project-info">
      <h2>RaushanYoganta.com : Blog SEO</h2>
      <p>Wrote and optimized blog posts for SEO on a health and wellness site, improving organic visibility and traffic.</p>
      <p><strong><span>Visit site:</span></strong> &nbsp;<a  href="https://www.raushanyoganta.com" target="_blank" rel="noopener noreferrer">www.raushanyoganta.com</a> </p>

    </div>
  </div>

  {/* <!-- Project 4 --> */}
  <div class="project-card">
    <img src={YogantaAcademyweb} alt="Academy Yoganta Website" />
    <div class="project-info">
      <h2>Yoganta Academy</h2>
      <p><strong>Platform:</strong> WordPress</p>
      <p>Developed a clean, informative website for Yoganta Academy to manage course offerings.</p>
      <p><strong><span>Visit site:</span></strong> &nbsp;<a  href="https://academy.yoganta.in/" target="_blank" rel="noopener noreferrer">www.academy.yoganta.in</a> </p>

    </div>
  </div>

  {/* <!-- Project 5 --> */}
  <div class="project-card">
    <img src={MetaAds} alt="Yoganta Digital Ads" />
    <div class="project-info">
      <h2>Meta Ads Campaign : Yoganta</h2>
      <p>Running Facebook and Instagram ads to boost class bookings and brand awareness for Yoganta wellness programs.</p>
    </div>
  </div>

</section>

    </>
  )
}

export default Portfolio