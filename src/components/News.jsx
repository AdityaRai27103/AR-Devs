import React from 'react'
import news1 from '../assets/news-1.jpg'
import celebso from '../assets/celebso.png'
import thetriphike from '../assets/thetriphike.png'


export default function News() {
  return (
    <section className="news-area">
      <div className="custom-container">
        <div className="section-header d-flex align-items-end justify-content-between">
          <div className="left">
            <h5 className="section-subtitle">INTERESTING ARTICLES</h5>
            <h1 className="section-title">Read daily news about <br />
              startup companies</h1>
          </div>
          <p>In today's rapidly evolving world, technology is constantly shaping the way we live and interact. From artificial intelligence and automation to  virtual reality, the pace of technological advancements is staggering.</p>
        </div>
        <div className="sticky-news d-flex card-h">
          <div className="news-img-box">
            <img src={celebso} alt="News" />
          </div>
          <div className="news-content">
            <h5 className="section-subtitle section-subtitle1">WEB DEVELOPMENT </h5>
            <h1 className="section-title">
              <a href="/">Celebso is the ultimate for brands and influeners to connect, collaborate, and grow together.</a>
            </h1>
            <p>Celebso is revolutionizing the way brands and influencers connect in the digital age. Our platform provides a seamless and efficient solution for forging meaningful partnerships that drive results.</p>
            <ul>
              <li>
                <i className="las la-check" /> Collaboration Tools
              </li>
              <li>
                <i className="las la-check" /> Smart Reminders
              </li>
            </ul>
            <a href="/" className="theme-btn">
              <i className="iconoir-arrow-up-right" />
            </a>
          </div>
        </div>
        <div className="news-items d-flex align-items-start">
          <div className="news-item card-h">
            <div className="news-img-box">
              <img src={news1} alt="News" />
            </div>
            <div className="news-item-body">
              <h5 className="section-subtitle">MOBILE DEVELOPMENT</h5>
              <h1 className="section-title">
                <a href="/">OpenAI launches new alignment division to tackle risks of superintelligent AI.</a>
              </h1>
              <p>Small UK merchants, businesses, and other enterprises can now use  Tap to Pay on service to replace payment terminals at point of sale.</p>
              <ul>
                <li>
                  <i className="las la-check" /> Collaboration Tools
                </li>
                <li>
                  <i className="las la-check" /> Networking Platform
                </li>
                <li>
                  <i className="las la-check" /> Telented Individuals
                </li>
                <li>
                  <i className="las la-check" /> Team Management
                </li>
              </ul>
              <a href="/" className="theme-btn">
                <i className="iconoir-arrow-up-right" />
              </a>
            </div>
          </div>
          <div className="news-item card-h">
            <div className="news-img-box">
              <img src={thetriphike} alt="News" />
            </div>
            <div className="news-item-body">
              <h5 className="section-subtitle">BRANDING AND MARKETING</h5>
              <h1 className="section-title">
                <a href="/">TheTripHike is the ultimate platform for Trackers and Travel agency to Connect, Collaborate, and Grow Together</a>
              </h1>
              <p>TheTripHike is revolutionizing the way trackers and Travel agency connect in the digital age. Embark on a journey of unparalleled collaboration with TheTripHike</p>
              <ul>
                <li>
                  <i className="las la-check" /> Collaboration Tools
                </li>
                <li>
                  <i className="las la-check" /> Smart Reminders
                </li>
                <li>
                  <i className="las la-check" /> Requirement
                </li>
              </ul>
              <a href="/" className="theme-btn">
                <i className="iconoir-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
