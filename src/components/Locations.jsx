import React from 'react'
import shape from '../assets/bg-shape-7.svg';

const Locations = () => {
    return (
        <section className="contact-location-area">
            <img className="animation-slide-left bg-shape" src={shape} alt="Shape" />
            <div className="custom-container">
                <div className="custom-row justify-content-between align-items-center">
                    <div className="contact-location-left-content">
                        <div className="contact-location-left-body">
                            <h5 className="section-subtitle">Locations</h5>
                            <h1 className="section-title">Visit our store all around the  world </h1>
                            <p>Our location is strategically situated at the heart of City, making it an ideal destination for businesses and visitors alike.</p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="contact-locations-list">

                            <div className="contact-location-box">
                                <div className="number">
                                    #1
                                </div>
                                <div className="content">
                                    <h3>New York, USA</h3>
                                    <p>720/5, Starc Street,
                                        North View, New York</p>
                                </div>
                            </div>
                            <div className="contact-location-box">
                                <div className="number">
                                    #2
                                </div>
                                <div className="content">
                                    <h3>Edinburgh, UK</h3>
                                    <p>5/3, Hilton Clinch, NS
                                        Bay Low, Aberdeen</p>
                                </div>
                            </div>
                            <div className="contact-location-box">
                                <div className="number">
                                    #3
                                </div>
                                <div className="content">
                                    <h3>Cape Town, SA</h3>
                                    <p>Marco Street, Seventh
                                        Road, Cape Town</p>
                                </div>
                            </div>
                            <div className="contact-location-box">
                                <div className="number">
                                    #4
                                </div>
                                <div className="content">
                                    <h3>Madras, IND</h3>
                                    <p>3/5, Geils Street
                                        Mannady, Madras</p>
                                </div>
                            </div>
                            <div className="contact-location-box">
                                <div className="number">
                                    #5
                                </div>
                                <div className="content">
                                    <h3>Tokyo, JAP</h3>
                                    <p>77, Xiong Street, Main
                                        Town, Tokyo, Japan</p>
                                </div>
                            </div>
                            <div className="contact-location-box">
                                <div className="number">
                                    #6
                                </div>
                                <div className="content">
                                    <h3>Canberra, AUS</h3>
                                    <p>458, Highland Street,
                                        Sydney, Australia</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Locations
