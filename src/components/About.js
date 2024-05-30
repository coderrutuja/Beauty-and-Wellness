import React from 'react';
import '../styles/About.css';
import aboutImage from '../assets/images/about.png'; // Ensure the path is correct

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="overlay">
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>At Beauty & Wellness, we believe in holistic care for your body and mind. Our team of experts is dedicated to providing top-notch services that cater to your unique needs. We use the best products and techniques to ensure you feel rejuvenated and beautiful.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
