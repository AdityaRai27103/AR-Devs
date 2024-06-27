import React from 'react'
import bgshape11 from '../assets/bg-shape-11.svg'
import small1 from '../assets/small-img-1.png'
import small2 from '../assets/small-img-2.png'
import small3 from '../assets/small-img-3.png'
import small4 from '../assets/small-img-4.png'

const AboutCTA = () => {
  return (
    <section className="cta-area">
            <div clasNameclassNames="custom-container">
                <div className="cta-body text-center">
                    <img src={bgshape11} alt="Shape" className="animation-slide-left bg-shape"/>
                    <div className="our-expert-team-box">
                        <div className="our-expert-team-box-inner d-flex align-items-center">
                            <div className="imgs d-flex align-items-center">
                                <img src={small4} alt="team" />
                                <img src={small3} alt="team" />
                                <img src={small2} alt="team" />
                                <img src={small1} alt="team" />
                            </div>
                        </div>
                    </div>
                    <h2>Need any further assitance?</h2>
                    <p>Feel free to reach out for any inquiries or assistance.</p>
                    <a href="contact.html" className="theme-btn">Book an appointment now</a>

                </div>
            </div>
        </section>
  )
}

export default AboutCTA
