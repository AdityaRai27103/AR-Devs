import React from 'react'
import bgshape1 from '../assets/bg-shape-1.svg';

function Careerhero() {
    return (
        <>
            <section className="hero-service-wrap hero-section-wrap hero-career-wrap">
                <div className="hero-section-content-wrap">
                    <img src={bgshape1} alt="Shape" className="animation-slide-left bg-shape" />
                    <div className="custom-container">
                        <div className="hero-portfolio-body">
                            <div className="hero-section-content text-center">
                                <h5 className="section-subtitle">Career</h5>
                                <h1 className="section-title fade-in">You have great opportunities</h1>
                                <p>If you are a talented and ambitious individual looking to make a mark in your career,
                                    we invite you to explore our career opportunities.</p>
                                <a href="Contact" className="theme-btn">Book an appointment now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Careerhero