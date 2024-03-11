import React from 'react';
import '../components/styles/Service.css'; // Import the Service.css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon from the react-fontawesome library
import { faLayerGroup, faChartBar, faDatabase, faCogs, faChartPie, faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // Import necessary FontAwesome icons

const Service = () => {
    return (
        <section className="service-grid pb-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 text-center mb-4">
                        <div className="service-title">
                            <h4>Our Services</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 text-center mb-3">
                        <div className="service-wrap">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faLayerGroup} />
                            </div>
                            <h4>Web Application</h4>
                            <p> Accessible, scalable, and versatile solution offering seamless user experiences across various devices and platforms...</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center mb-3">
                        <div className="service-wrap">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faChartBar} />
                            </div>
                            <h4>Highly customizable</h4>
                            <p>Personalize your food orders with ease, adjust preferences, ingredients, and dietary requirements effortlessly...</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center mb-3">
                        <div className="service-wrap">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faDatabase} />
                            </div>
                            <h4>Responsive design</h4>
                            <p>Enjoy seamless access to our food delivery app from any device, ensuring a smooth and user-friendly experience on the go...</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center mb-3">
                        <div className="service-wrap">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faCogs} />
                            </div>
                            <h4>Service & Plugins</h4>
                            <p>Explore a wide range of services and plugins tailored to enhance your experience and meet your specific needs...</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center mb-3">
                        <div className="service-wrap">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faChartPie} />
                            </div>
                            <h4>Optimized for Speed</h4>
                            <p>Our platform is engineered to deliver swift performance, ensuring quick loading times and seamless user interactions...</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center mb-3">
                        <div className="service-wrap">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faThumbsUp} />
                            </div>
                            <h4>Dedicated Support</h4>
                            <p> Our team is committed to providing personalized assistance and resolving any queries or issues promptly for a smooth experience...</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
