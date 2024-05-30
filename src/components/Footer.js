import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Beauty & Wellness (Rutuja Ainapure | Credomortal). All rights reserved.</p>
                <ul className="social-icons">
                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                    <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                    <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
