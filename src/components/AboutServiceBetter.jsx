import React from 'react'
import group from '../assets/about-service-3.png'

const AboutServiceBetter = () => {
  return (
    <section className="about-service3-area">
                <div className="custom-container">
                    <div className="custom-row align-items-center">
                        <div className="img-box">
                            <img src={group} alt="About" />
                        </div>

                        <div className="content-box">
                            <h1>Why our services are
                                better than others?</h1>
                            <p>We don't believe in a one-size-fit-all approach. Our services are carefully customized to suit your specific need, ensuring you to achieve your goals.</p>
                            <p>We believe in delivering value that extends  your beyond the immediate project. Our services are designed to provide a long-term benefits.</p>
                            <ul>
                                <li>
                                    <i class="las la-check"></i> PPD Development
                                </li>
                                <li>
                                    <i class="las la-check"></i> Quick Response
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default AboutServiceBetter
