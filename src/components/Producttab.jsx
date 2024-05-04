import React from 'react'

import service_icon1 from "../assets/service-icon-1.svg";
import service_icon2 from "../assets/service-icon-2.svg";
import service_icon3 from "../assets/service-icon-3.svg";
import service_icon4 from "../assets/service-icon-4.svg";
import service_icon5 from "../assets/service-icon-5.svg";
// section5
import case_studi_1_1 from "../assets/case-studio-1-1.jpg";
import case_studi_1_2 from "../assets/case-studio-2-2.jpg";
import case_studi_1_3 from "../assets/case-studio-3.jpg";
import case_studi_1_4 from "../assets/case-studio-4.jpg";
import case_studi_1_5 from "../assets/case-studio-5.jpg";
import case_studi_6 from "../assets/case-studio-6.jpg"
import case_studi_7 from "../assets/case-studio-7.jpg";
import case_studi_8 from "../assets/case-studio-8.jpg";
import case_studi_9 from "../assets/case-studio-9.jpg";
import case_studi_10 from "../assets/case-studio-10.jpg";

export default function Producttab() {
    return (
        <section className="case-studio-area">
            <div className="custom-container">
                <div className="case-studio-header text-center">
                    <h5 className="section-subtitle">CASE STUDIES</h5>
                    <h1 className="section-title">Detailing of our products</h1>
                </div>


                <div className="case-studio">

                    <ul className="nav nav-pills case-studio-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <button className="nav-link active" id="development-tab" data-bs-toggle="tab" href="#development"
                                role="tab" aria-controls="development" aria-selected="true">Development</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="woo_commerce-tab" data-bs-toggle="tab" href="#woo_commerce" role="tab"
                                aria-controls="woo_commerce" aria-selected="false">Woo Commerce</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="crm_solutions-tab" data-bs-toggle="tab" href="#crm_solutions"
                                role="tab" aria-controls="crm_solutions" aria-selected="false">CRM Solutions</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="web_designing-tab" data-bs-toggle="tab" href="#web_designing"
                                role="tab" aria-controls="web_designing" aria-selected="false">Web Designing</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="it_support-tab" data-bs-toggle="tab" href="#it_support" role="tab"
                                aria-controls="it_support" aria-selected="false">IT Support</button>
                        </li>
                    </ul>
                    <div className="tab-content case-studio-tab-content">
                        <div className="tab-pane fade show active" id="development" role="tabpanel" aria-labelledby="development-tab">
                            <div className="case-studio-body d-flex">
                                <div className="left d-flex flex-1">
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">Web Development</a>
                                        <img src={case_studi_1_1} alt="Case Studio" />
                                    </div>
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">Mobile Development</a>
                                        <img src={case_studi_1_2} alt="Case Studio" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="case-studio-contents service-card card-h">
                                        <img src={service_icon1} alt="ICON" />
                                        <h3>Development</h3>
                                        <p>Software development is a dynamic and rapidly evolving field that plays a
                                            pivotal role in shaping the digital landscape we live in today. It
                                            encompasses the processes, methodologies, and practices used to design,
                                            create, deploy, and maintain software applications and systems.</p>
                                        <a href="#" className="theme-btn">
                                            <i className="iconoir-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="woo_commerce" role="tabpanel" aria-labelledby="woo_commerce-tab">
                            <div className="case-studio-body d-flex">
                                <div className="left d-flex flex-1">
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">electro.</a>
                                        <img src={case_studi_1_3} alt="Case Studio" />
                                    </div>
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">Visit Site Now</a>
                                        <img src={case_studi_1_4} alt="Case Studio" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="case-studio-contents service-card card-h">
                                        <img src={service_icon2} alt="ICON" />
                                        <h3>Woo Commerce</h3>
                                        <p>Software development is a dynamic and rapidly evolving field that plays a
                                            pivotal role in shaping the digital landscape we live in today. It
                                            encompasses the processes, methodologies, and practices used to design,
                                            create, deploy, and maintain software applications and systems.</p>
                                        <a href="#" className="theme-btn">
                                            <i className="iconoir-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="crm_solutions" role="tabpanel" aria-labelledby="crm_solutions-tab">
                            <div className="case-studio-body d-flex">
                                <div className="left d-flex flex-1">
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">CRM Solutions</a>
                                        <img src={case_studi_1_5} alt="Case Studio" />
                                    </div>
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">Mobile Development</a>
                                        <img src={case_studi_6} alt="Case Studio" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="case-studio-contents service-card card-h">
                                        <img src={service_icon3} alt="ICON" />
                                        <h3>CRM Solutions</h3>
                                        <p>Software development is a dynamic and rapidly evolving field that plays a
                                            pivotal role in shaping the digital landscape we live in today. It
                                            encompasses the processes, methodologies, and practices used to design,
                                            create, deploy, and maintain software applications and systems.</p>
                                        <a href="#" className="theme-btn">
                                            <i className="iconoir-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="web_designing" role="tabpanel" aria-labelledby="web_designing-tab">
                            <div className="case-studio-body d-flex">
                                <div className="left d-flex flex-1">
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">Web Designing</a>
                                        <img src={case_studi_7} alt="Case Studio" />
                                    </div>
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">Mobile Development</a>
                                        <img src={case_studi_8} alt="Case Studio" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="case-studio-contents service-card card-h">
                                        <img src={service_icon4} alt="ICON" />
                                        <h3>Web Designing</h3>
                                        <p>Software development is a dynamic and rapidly evolving field that plays a
                                            pivotal role in shaping the digital landscape we live in today. It
                                            encompasses the processes, methodologies, and practices used to design,
                                            create, deploy, and maintain software applications and systems.</p>
                                        <a href="#" className="theme-btn">
                                            <i className="iconoir-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="it_support" role="tabpanel" aria-labelledby="it_support-tab">
                            <div className="case-studio-body d-flex">
                                <div className="left d-flex flex-1">
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">IT Support</a>
                                        <img src={case_studi_9} alt="Case Studio" />
                                    </div>
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">Mobile Development</a>
                                        <img src={case_studi_10} alt="Case Studio" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="case-studio-contents service-card card-h">
                                        <img src={service_icon5} alt="ICON" />
                                        <h3>IT Support</h3>
                                        <p>Software development is a dynamic and rapidly evolving field that plays a
                                            pivotal role in shaping the digital landscape we live in today. It
                                            encompasses the processes, methodologies, and practices used to design,
                                            create, deploy, and maintain software applications and systems.</p>
                                        <a href="#" className="theme-btn">
                                            <i className="iconoir-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
