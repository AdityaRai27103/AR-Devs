import React from 'react'
import bgshape10 from '../assets/bg-shape-10.svg'
import team4 from '../assets/team4.png'
import team5 from '../assets/team5.png'
import team6 from '../assets/team6.png'
import team7 from '../assets/team7.png'
import team8 from '../assets/team8.png'
import team9 from '../assets/team9.png'
import team10 from '../assets/team10.png'
import team11 from '../assets/team11.png'

const AboutOurTeam = () => {
  return (
    <section className="our-team-2-area">
            <div className="custom-container">
                <div className="section-header our-team-2-header d-flex align-items-center justify-content-between w-full">
                    <img className="animation-slide-right bg-shape" src={bgshape10} alt="Shape" />
                    <div className="left">
                        <h5 className="section-subtitle">OUR TEAM</h5>
                        <h1 className="section-title">Our professional experts</h1>
                        <p>Our team is a collective force of top talents, experts, and <br/>
                            visionaries from diverse fields.</p>
                    </div>

                    <a href="contact.html" className="theme-btn">Book an appointment with our expert now</a>
                </div>

                <div className="our-team-2-lists">
                    <div className="our-team-2-card">
                        <div className="img-box">
                            <img src={team4} alt="Team"/>
                        </div>
                        <h2>Jennifer Linda</h2>
                        <span className="designation">Product Designer</span>
                        <ul className="social-links d-flex align-items-center">
                            <li><a href="#">
                                <i class="iconoir-dribbble"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-twitter"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-instagram"></i>
                            </a></li>
                        </ul>
                    </div>
                    <div className="our-team-2-card">
                        <div className="img-box">
                            <img src={team5} alt="Team"/>
                        </div>
                        <h2>Merlin Bullock</h2>
                        <span className="designation">Business Analyst</span>
                        <ul className="social-links d-flex align-items-center">
                            <li><a href="#">
                                <i class="iconoir-dribbble"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-twitter"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-instagram"></i>
                            </a></li>
                        </ul>
                    </div>
                    <div className="our-team-2-card">
                        <div className="img-box">
                            <img src={team6} alt="Team"/>
                        </div>
                        <h2>Beatrix Clara</h2>
                        <span className="designation">Front End Developer</span>
                        <ul className="social-links d-flex align-items-center">
                            <li><a href="#">
                                <i class="iconoir-dribbble"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-twitter"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-instagram"></i>
                            </a></li>
                        </ul>
                    </div>
                    <div className="our-team-2-card">
                        <div className="img-box">
                            <img src={team7} alt="Team"/>
                        </div>
                        <h2>Richard Parker</h2>
                        <span className="designation">Back End Developer</span>
                        <ul className="social-links d-flex align-items-center">
                            <li><a href="#">
                                <i class="iconoir-dribbble"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-twitter"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-instagram"></i>
                            </a></li>
                        </ul>
                    </div>
                    <div className="our-team-2-card">
                        <div className="img-box">
                            <img src={team8} alt="Team"/>
                        </div>
                        <h2>Aminul Ashfaq</h2>
                        <span className="designation">Devops Engineer</span>
                        <ul className="social-links d-flex align-items-center">
                            <li><a href="#">
                                <i class="iconoir-dribbble"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-twitter"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-instagram"></i>
                            </a></li>
                        </ul>
                    </div>
                    <div className="our-team-2-card">
                        <div className="img-box">
                            <img src={team9} alt="Team"/>
                        </div>
                        <h2>Margeret Allan</h2>
                        <span className="designation">Cloud Expert</span>
                        <ul className="social-links d-flex align-items-center">
                            <li><a href="#">
                                <i class="iconoir-dribbble"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-twitter"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-instagram"></i>
                            </a></li>
                        </ul>
                    </div>
                    <div className="our-team-2-card">
                        <div className="img-box">
                            <img src={team10} alt="Team"/>
                        </div>
                        <h2>Mason Williams</h2>
                        <span className="designation">System Engineer</span>
                        <ul className="social-links d-flex align-items-center">
                            <li><a href="#">
                                <i class="iconoir-dribbble"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-twitter"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-instagram"></i>
                            </a></li>
                        </ul>
                    </div>
                    <div className="our-team-2-card">
                        <div className="img-box">
                            <img src={team11} alt="Team"/>
                        </div>
                        <h2>Emily Frida</h2>
                        <span className="designation">UX Designer</span>
                        <ul className="social-links d-flex align-items-center">
                            <li><a href="#">
                                <i class="iconoir-dribbble"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-twitter"></i>
                            </a></li>
                            <li><a href="#">
                                <i class="iconoir-instagram"></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default AboutOurTeam
