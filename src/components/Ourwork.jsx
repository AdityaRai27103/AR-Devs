import React from 'react';
// import project1 from '../../images/home/project-1.png'
// import project2 from '../../images/home/project-2.png'
// import project3 from '../../images/home/project-3.png'
// import project4 from '../../images/home/project-4.png'
// import project5 from '../../images/home/project-5.png'
// import project6 from '../../images/home/project-6.png'
import Workslider from './Workslider';

export default function Ourwork() {
  return (
    <section className="project-area">
      <div className="custom-container">
        <div className="custom-row justify-content-between">
          <div className="project-left-details">
            <h5 className="section-subtitle">PROJECTS</h5>
            <h1 className="section-title">Showcase of
              our recognized
              work</h1>
            <p>Our collaborative approach ensures that we truly understand our clients unique requirements and challenges.</p>
            <ul>
              <li>
                <i className="las la-check" /> Managed Services and Products
              </li>
              <li>
                <i className="las la-check" /> Flexibility and Adaptability
              </li>
              <li>
                <i className="las la-check" /> Competitive Advantage
              </li>
            </ul>
          </div>
          {/* <div className="project-right-slider">
        <div className="project-right-slider-inner">
          <div className="swiper project-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide project-item">
                <div className="project-item-inner">
                  <h2><a href="portfolio-details.html">E-commerce <br />
                      platform <br />
                      development.</a></h2>
                  <img src={project1} alt="Project" />
                </div>
              </div>
              <div className="swiper-slide project-item">
                <div className="project-item-inner">
                  <h2><a href="portfolio-details.html">Software as a <br />
                      Service <br />
                      integration</a></h2>
                  <img src={project2} alt="Project" />
                </div>
              </div>
              <div className="swiper-slide project-item">
                <div className="project-item-inner">
                  <h2><a href="portfolio-details.html">Mobile <br />
                      Platform <br />
                      Development</a></h2>
                  <img src={project3} alt="Project" />
                </div>
              </div>
              <div className="swiper-slide project-item">
                <div className="project-item-inner">
                  <h2><a href="portfolio-details.html">
                      Enter into a <br />
                      Virtual Reality <br />
                      World.</a></h2>
                  <img src={project4} alt="Project" />
                </div>
              </div>
              <div className="swiper-slide project-item">
                <div className="project-item-inner">
                  <h2><a href="portfolio-details.html">
                      Custom CRM <br />
                      system for a <br />
                      sales team.</a></h2>
                  <img src={project5} alt="Project" />
                </div>
              </div>
              <div className="swiper-slide project-item">
                <div className="project-item-inner">
                  <h2><a href="portfolio-details.html">
                      Wrist App<br />
                      For Your <br />
                      Productivity.</a></h2>
                  <img src={project6} alt="Project" />
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </div> */}
          <Workslider />
        </div>
      </div>
    </section>

  )
}
