import React from 'react'
import mentor from '../assets/bg-shape-mentors.svg'
import team4 from '../assets/team-4.jpg'
import team5 from '../assets/team-5.jpg'
import team6 from '../assets/team-6.jpg'
import team7 from '../assets/team-7.jpg'
import team8 from '../assets/team-8.jpg'
import team9 from '../assets/team9.png'
import team10 from '../assets/team10.png'
import team11 from '../assets/team11.png'


function CareerOurteam() {
    return (
        <>
            <section className="our-team-2-area our-team-3-area">
                <div className="custom-container">
                    <div className="our-team-inner">
                        <img src={mentor} alt="Shape" className="animation-slide-left bg-shape" />

                        <div className="section-header our-team-2-header d-flex align-items-center justify-content-between w-full">
                            {/* <!-- <img className="bg-shape" src="./assets/imgs/bg-shape-10.svg" alt="Shape" /> --> */}
                            <div className="left">
                                <h5 className="section-subtitle">MENTORS</h5>
                                <h1 className="section-title">Our leadership and mentors</h1>
                                <p>Our team is a collective force of top talents, experts, and
                                    visionaries from diverse fields.</p>
                            </div>

                            <a href="#" className="theme-btn">Meet our experts now</a>
                        </div>

                        <div className="our-team-2-lists our-team-3-lists">
                            <div className="our-team-2-card">
                                <div className="img-box">
                                    <img src={team4} alt="Team" />
                                </div>
                                <h2>Jennifer Linda</h2>
                                <span className="designation">Product Designer</span>
                            </div>
                            <div className="our-team-2-card">
                                <div className="img-box">
                                    <img src={team5} alt="Team" />
                                </div>
                                <h2>Merlin Bullock</h2>
                                <span className="designation">Business Analyst</span>
                            </div>
                            <div className="our-team-2-card">
                                <div className="img-box">
                                    <img src={team6} alt="Team" />
                                </div>
                                <h2>Beatrix Clara</h2>
                                <span className="designation">Front End Developer</span>
                            </div>
                            <div className="our-team-2-card">
                                <div className="img-box">
                                    <img src={team7} alt="Team" />
                                </div>
                                <h2>Richard Parker</h2>
                                <span className="designation">Back End Developer</span>
                            </div>
                            <div className="our-team-2-card">
                                <div className="img-box">
                                    <img src={team8} alt="Team" />
                                </div>
                                <h2>Aminul Ashfaq</h2>
                                <span className="designation">Devops Engineer</span>
                            </div>
                            <div className="our-team-2-card">
                                <div className="img-box">
                                    <img src={team9} alt="Team" />
                                </div>
                                <h2>Margeret Allan</h2>
                                <span className="designation">Cloud Expert</span>
                            </div>
                            <div className="our-team-2-card">
                                <div className="img-box">
                                    <img src={team10} alt="Team" />
                                </div>
                                <h2>Mason Williams</h2>
                                <span className="designation">System Engineer</span>
                            </div>
                            <div className="our-team-2-card">
                                <div className="img-box">
                                    <img src={team11} alt="Team" />
                                </div>
                                <h2>Emily Frida</h2>
                                <span className="designation">UX Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CareerOurteam