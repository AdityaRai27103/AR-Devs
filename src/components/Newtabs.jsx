import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
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
import case_studi_6 from "../assets/case-studio-6.jpg";
import case_studi_7 from "../assets/case-studio-7.jpg";
import case_studi_8 from "../assets/case-studio-8.jpg";
import case_studi_9 from "../assets/case-studio-9.jpg";
import case_studi_10 from "../assets/case-studio-10.jpg";


export default function Newtabs() {
    return (
        <section className="case-studio-area">
            <div className="custom-container">
                <div className="case-studio-header text-center">
                    <h5 className="section-subtitle">CASE STUDIES</h5>
                    <h1 className="section-title">Detailing of our products</h1>
                </div>
                <div className="case-studio">
                    <Tab.Container id="tabs-example" defaultActiveKey="development">
                        <Nav className="nav nav-pills case-studio-tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="development">Development</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="woo_commerce">Woo Commerce</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="crm_solutions">CRM Solutions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="web_designing">Web Designing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="it_support">IT Support</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className="tab-content case-studio-tab-content">
                            <Tab.Pane eventKey="development">
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="woo_commerce">
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="crm_solutions">
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="web_designing">
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="it_support">
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
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
        </section>
    )
}