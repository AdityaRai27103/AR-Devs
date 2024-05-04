import React from 'react'
import questionicon from '../assets/question-icon.svg'


const FaqHero2 = () => {
    return (
        <section className="faq-area  faq-style-2-area">
            <div className="custom-container">
                <div className="faq-inner">

                    <h5 className="section-subtitle">FAQ SECTION</h5>
                    <h1 className="section-title">Frequently asked questions</h1>

                    <div className="faq-items-box">
                        <div className="faq-col">
                            <div id="accordion">
                                <div className="faq-box">
                                    <h5 className="card-header" id="headingOne">
                                        <button data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            <div className="icon">
                                                <img src={questionicon} alt="Icon" />
                                            </div> What does your company will provide?
                                        </button>
                                    </h5>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                        data-parent="#accordion">
                                        <div className="card-body">
                                            At our IT service company, we give offer a comprehensive range of server solutions,
                                            including managed IT in services, network infrastructure setup.
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-box">
                                    <h5 className="card-header" id="headingTwo">
                                        <button data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            <div className="icon">
                                                <img src={questionicon} alt="Icon" />
                                            </div> Do you offer training for employees?
                                        </button>
                                    </h5>

                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                        data-parent="#accordion">
                                        <div className="card-body">
                                            Yes, we provide IT training tailored to your business needs. Our training is programs cover various IT aspects, our high including software usage, cybersecurity
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-box">
                                    <h5 className="card-header" id="headingThree">
                                        <button data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            <div className="icon">
                                                <img src={questionicon} alt="Icon" />
                                            </div> Do you offer 24/7 support for services?
                                        </button>
                                    </h5>

                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                        data-parent="#accordion">
                                        <div className="card-body">
                                            Yes, we provide IT training tailored to your business needs. Our training is programs cover various IT aspects, our high including software usage, cybersecurity
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="faq-col">
                            <div id="accordion2">
                                <div className="faq-box">
                                    <h5 className="card-header" id="headingFour">
                                        <button data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                            aria-expanded="true" aria-controls="collapseFour">
                                            <div className="icon">
                                                <img src={questionicon} alt="Icon" />
                                            </div> Can you assist with recovery planning?
                                        </button>
                                    </h5>

                                    <div id="collapseFour" className="collapse show" aria-labelledby="headingFour"
                                        data-parent="#accordion2">
                                        <div className="card-body">
                                            Yes, we provide IT training tailored to your business needs. Our training is programs cover various IT aspects, our high including software usage, cybersecurity
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-box">
                                    <h5 className="card-header" id="headingFive">
                                        <button data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                            aria-expanded="false" aria-controls="collapseFive">
                                            <div className="icon">
                                                <img src={questionicon} alt="Icon" />
                                            </div> Can you help with cloud management?
                                        </button>
                                    </h5>

                                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive"
                                        data-parent="#accordion2">
                                        <div className="card-body">
                                            Yes, we provide IT training tailored to your business needs. Our training is programs cover various IT aspects, our high including software usage, cybersecurity
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-box">
                                    <h5 className="card-header" id="headingSix">
                                        <button data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                            aria-expanded="false" aria-controls="collapseSix">
                                            <div className="icon">
                                                <img src={questionicon} alt="Icon" />
                                            </div> How can get started with your services?
                                        </button>
                                    </h5>

                                    <div id="collapseSix" className="collapse" aria-labelledby="headingSix"
                                        data-parent="#accordion2">
                                        <div className="card-body">
                                            Yes, we provide IT training tailored to your business needs. Our training is programs cover various IT aspects, our high including software usage, cybersecurity
                                        </div>
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

export default FaqHero2
