import React from 'react'
import smallimg1 from '../assets/small-img-1.png';
import smallimg2 from '../assets/small-img-2.png';
import smallimg3 from '../assets/small-img-3.png';
import smallimg4 from '../assets/small-img-4.png';
import shape from '../assets/bg-shape-11.svg'

function CareerCta() {
    return (
        <>
            <section className="cta-area cta-style-3">
                <div className="custom-container">
                    <div className="cta-body text-center">
                        <img src={shape} alt="Shape" className="animation-slide-left bg-shape" />
                        <div className="our-expert-team-box">
                            <div className="our-expert-team-box-inner d-flex align-items-center">
                                <div className="imgs d-flex align-items-center">
                                    <img src={smallimg4} alt="team" />
                                    <img src={smallimg3} alt="team" />
                                    <img src={smallimg2} alt="team" />
                                    <img src={smallimg1} alt="team" />
                                </div>
                            </div>
                        </div>
                        <h2>Need any further assitance?</h2>
                        <p>Feel free to reach out for any inquiries or assistance.</p>
                        <a href="Contact" className="theme-btn">Book an appointment now</a>

                    </div>
                </div>
            </section>

        </>
    )
}

export default CareerCta