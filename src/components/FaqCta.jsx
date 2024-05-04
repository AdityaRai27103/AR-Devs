import React from 'react'
import bgshape12 from '../assets/bg-shape-12.png';
import smallimg1 from '../assets/small-img-1.png';
import smallimg2 from '../assets/small-img-2.png';
import smallimg3 from '../assets/small-img-3.png';
import smallimg4 from '../assets/small-img-4.png';


const FaqCta = () => {
    return (

        <section className="cta-area cta-area2">
            <div className="custom-container">
                <div className="cta-body text-center d-flex align-items-center justify-content-between">
                    <img src={bgshape12} alt="Shape" className="animation-slide-right bg-shape" />
                    <div className="left">
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
                        <h2>Build your project with us, Make it world class</h2>
                        <p>Our projects are born from a passion for innovation that knows no bounds.</p>
                    </div>
                    <a href="Contact" className="theme-btn">Book an appointment now</a>

                </div>
            </div>
        </section>
    )
}

export default FaqCta
