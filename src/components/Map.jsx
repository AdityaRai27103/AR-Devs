import React from 'react'
import flag from '../assets/flag.png'
import map from '../assets/map.svg'




const Map = () => {
    return (
        <div className="contact-area2">
            <div className="custom-container">
                <div className="contact-inner">
                    <div className="contact-map-wrap">
                        <h4>Connect Us</h4>


                        <div id="map">
                            <div className="map-location-item">
                                <div className="map-location-item-inner">
                                    <img src={flag} alt="Flag" />
                                    <div className="content">
                                        <h3>New York, USA</h3>
                                        <p>720/5, Starc Street,
                                            North View, New York</p>
                                    </div>
                                </div>
                                <span className="circle"></span>
                            </div>
                            <div className="map-location-item">
                                <div className="map-location-item-inner">
                                    <img src={flag} alt="Flag" />
                                    <div className="content">
                                        <h3>New York, USA</h3>
                                        <p>720/5, Starc Street,
                                            North View, New York</p>
                                    </div>
                                </div>
                                <span className="circle"></span>
                            </div>
                            <div className="map-location-item">
                                <div className="map-location-item-inner">
                                    <img src={flag} alt="Flag" />
                                    <div className="content">
                                        <h3>New York, USA</h3>
                                        <p>720/5, Starc Street,
                                            North View, New York</p>
                                    </div>
                                </div>
                                <span className="circle"></span>
                            </div>
                            <div className="map-location-item">
                                <div className="map-location-item-inner">
                                    <img src={flag} alt="Flag" />
                                    <div className="content">
                                        <h3>New York, USA</h3>
                                        <p>720/5, Starc Street,
                                            North View, New York</p>
                                    </div>
                                </div>
                                <span className="circle"></span>
                            </div>
                            <div className="map-location-item">
                                <div className="map-location-item-inner">
                                    <img src={flag} alt="Flag" />
                                    <div className="content">
                                        <h3>New York, USA</h3>
                                        <p>720/5, Starc Street,
                                            North View, New York</p>
                                    </div>
                                </div>
                                <span className="circle"></span>
                            </div>
                            <div className="map-location-item">
                                <div className="map-location-item-inner">
                                    <img src={flag} alt="Flag" />
                                    <div className="content">
                                        <h3>New York, USA</h3>
                                        <p>720/5, Starc Street,
                                            North View, New York</p>
                                    </div>
                                </div>
                                <span className="circle"></span>
                            </div>
                            <img src={map} alt="Map" />
                        </div>
                    </div>
                    <div className="contact-inner-info-box align-items-center d-flex">
                        <div className="contact-info-box simple-shadow">
                            <div className="icon"><i class="bi bi-headset"></i></div>
                            <h4>Support</h4>
                            <p>Contact our fast support team</p>
                            <h6><a href="mailto:info@ooglesoft.com">info@ooglesoft.com</a></h6>

                        </div>
                        <div class="contact-info-box simple-shadow">
                            <div className="icon"><i class="bi bi-telephone"></i></div>
                            <h4>Phone</h4>
                            <p>Mon-Sat from 9am to 6pm.</p>
                            <h6><a href="tel:+919784626443">+91-978-462-6443</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map