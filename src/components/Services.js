import React from 'react';
import '../styles/Services.css';
import serviceImage1 from '../assets/images/service1.jpg';
import serviceImage2 from '../assets/images/service2.jpg';
import serviceImage3 from '../assets/images/service3.jpg';

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2>Our Services</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="service-box">
                            <img src={serviceImage1} alt="Service 1" className="img-fluid" />
                            <h3>Facials</h3>
                            <p>Experience our rejuvenating facials designed to refresh and brighten your skin.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box">
                            <img src={serviceImage2} alt="Service 2" className="img-fluid" />
                            <h3>Massages</h3>
                            <p>Relax and unwind with our range of massage therapies that relieve stress and tension.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box">
                            <img src={serviceImage3} alt="Service 3" className="img-fluid" />
                            <h3>Manicures & Pedicures</h3>
                            <p>Pamper your hands and feet with our luxurious manicure and pedicure services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
