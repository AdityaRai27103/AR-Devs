import React from 'react'
import shape1 from "../assets/bg-shape-1.svg";
import hwd_icon1 from "../assets/hwd-icon-1.svg";
import hwd_icon2 from "../assets/hwd-icon-2.svg";
import hwd_icon3 from "../assets/hwd-icon-3.svg";
import hwd_icon4 from "../assets/hwd-icon-4.svg";
import hwd_icon5 from "../assets/hwd-icon-5.svg";
import hwd_icon6 from "../assets/hwd-icon-6.svg";

export default function Servicemodal() {
  return (
    <section className="how-we-do-area">
      <div className="custom-container">
        <div className="custom-row">
          <img
            src={shape1}
            alt="Shape"
            className="animation-slide-left how-we-do-bg"
          />
          <div className="how-we-do-left-content">
            <div className="top">
              <h5 className="section-subtitle">Our Model</h5>
              <h1 className="section-title">How we do</h1>
              <p>Save time and money with our powerful method.</p>
            </div>
            <a href="how-we-do.html" className="theme-btn">
              Learn More
              <i className="iconoir-arrow-up-right"></i>
            </a>
          </div>
          <div className="how-we-do-right-content">
            <div className="how-we-do-items d-flex align-items-center justify-content-center">
              <div className="how-we-do-card">
                <div className="circle-shape"></div>
                <div className="line-shape"></div>

                <div className="how-we-do-icon">
                  <img src={hwd_icon1} alt="How we do" />
                </div>
                <div className="how-we-do-content">
                  <h4>Brainstroming</h4>
                  <p>Ideas</p>
                </div>
              </div>

              <div className="how-we-do-card">
                <div className="circle-shape"></div>
                <div className="line-shape"></div>

                <div className="how-we-do-icon">
                  <img src={hwd_icon2} alt="How we do" />
                </div>
                <div className="how-we-do-content">
                  <h4>Product</h4>
                  <p>Design</p>
                </div>
              </div>

              <div className="how-we-do-card">
                <div className="circle-shape"></div>
                <div className="line-shape"></div>

                <div className="how-we-do-icon">
                  <img src={hwd_icon3} alt="How we do" />
                </div>
                <div className="how-we-do-content">
                  <h4>Front-End</h4>
                  <p>Development</p>
                </div>
              </div>
            </div>

            <div className="how-we-do-items d-flex align-items-center justify-content-center">
              <div className="how-we-do-card">
                <div className="circle-shape"></div>
                <div className="line-shape"></div>

                <div className="how-we-do-icon">
                  <img src={hwd_icon4} alt="How we do" />
                </div>
                <div className="how-we-do-content">
                  <h4>SEO</h4>
                  <p>Optimization</p>
                </div>
              </div>

              <div className="how-we-do-card">
                <div className="circle-shape"></div>
                <div className="line-shape"></div>

                <div className="how-we-do-icon">
                  <img src={hwd_icon5} alt="How we do" />
                </div>
                <div className="how-we-do-content">
                  <h4>Back-End</h4>
                  <p>Development</p>
                </div>
              </div>
            </div>

            <div className="how-we-do-items d-flex align-items-center justify-content-center">
              <div className="how-we-do-card">
                <div className="circle-shape"></div>
                <div className="line-shape"></div>

                <div className="how-we-do-icon">
                  <img src={hwd_icon6} alt="How we do" />
                </div>
                <div className="how-we-do-content">
                  <h4>Digital</h4>
                  <p>Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
