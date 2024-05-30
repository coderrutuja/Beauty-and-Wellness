import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Contact Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h3>Get in Touch</h3>
                        <p>If you have any questions or would like to schedule an appointment, please feel free to contact us. We're here to help you look and feel your best!</p>
                        <ul className="contact-info">
                            <li><i className="bi bi-geo-alt"></i> 123 Wellness St, Beauty City</li>
                            <li><i className="bi bi-telephone"></i> (123) 456-7890</li>
                            <li><i className="bi bi-envelope"></i> info@beautyandwellness.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;