import React from 'react'
import featurimg1 from '../assets/feature-img-1.png'
import featurimg2 from '../assets/feature-img-2.png'

export default function Feature() {
  return (
    <section className="feature-area">
      <div className="custom-container">
        <div className="custom-row align-items-center">
          <div className="feature-left d-flex">
            <div className="feature-img-card">
              <h3>Start your <br />
                project from <br />
                your pocket.</h3>
              <img src={featurimg1} alt="Feature" />
            </div>
            <div className="feature-img-card">
              <h3>Available on <br />
                all responsive <br />
                devices.</h3>
              <img src={featurimg1} alt="Feature" />
            </div>
          </div>
          <div className="feature-right">
            <div className="feature-content">
              <h5 className="section-subtitle">FEATURED PRODUCT</h5>
              <h1 className="section-title">Seamless productivity with our new app</h1>
              <p>Download Slack and experience a new era of organization and accomplishment.</p>
              <ul>
                <li>
                  <i className="las la-check" /> PPD Development
                </li>
                <li>
                  <i className="las la-check" /> Easy to Use
                </li>
              </ul>
              <div className="btns-group">
                <a href="#" className="theme-simple-btn">
                  <i className="lab la-apple" />
                  Get it on App Store
                </a>
                <a href="#" className="theme-simple-btn">
                  <i className="lab la-google-play" />
                  Get it on Play Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
