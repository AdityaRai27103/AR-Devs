import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.png'
import project3 from '../assets/project-3.png'
import project4 from '../assets/project-4.png'
import project5 from '../assets/project-5.png'
import project6 from '../assets/project-6.png'

export default function Workslider() {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        cssEase: "Linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {

                    slidesToShow: 1
                }
            }
        ],
        customPaging: function (i) {
            return (
                <div
                    className="custom-dot"
                    style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "dark",
                        marginTop: 10
                    }}
                />
            );
        }
    };
    return (
        <div className="project-right-slider">
            <div className="project-right-slider-inner">
                <div className="swiper project-slider">
                    <Slider {...settings}>
                        <div className="swiper-slide project-item">
                            <div className="project-item-inner">
                                <h2><a href="portfolio-details.html">E-commerce <br />
                                    platform <br />
                                    development.</a></h2>
                                <img src={project1} alt="Project" />
                            </div>
                        </div>
                        <div className="swiper-slide project-item">
                            <div className="project-item-inner">
                                <h2><a href="portfolio-details.html">Software as a <br />
                                    Service <br />
                                    integration</a></h2>
                                <img src={project2} alt="Project" />
                            </div>
                        </div>
                        <div className="swiper-slide project-item">
                            <div className="project-item-inner">
                                <h2><a href="portfolio-details.html">Mobile <br />
                                    Platform <br />
                                    Development</a></h2>
                                <img src={project3} alt="Project" />
                            </div>
                        </div>
                        <div className="swiper-slide project-item">
                            <div className="project-item-inner">
                                <h2><a href="portfolio-details.html">
                                    Enter into a <br />
                                    Virtual Reality <br />
                                    World.</a></h2>
                                <img src={project4} alt="Project" />
                            </div>
                        </div>
                        <div className="swiper-slide project-item">
                            <div className="project-item-inner">
                                <h2><a href="portfolio-details.html">
                                    Custom CRM <br />
                                    system for a <br />
                                    sales team.</a></h2>
                                <img src={project5} alt="Project" />
                            </div>
                        </div>
                        <div className="swiper-slide project-item">
                            <div className="project-item-inner">
                                <h2><a href="portfolio-details.html">
                                    Wrist App<br />
                                    For Your <br />
                                    Productivity.</a></h2>
                                <img src={project6} alt="Project" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}
