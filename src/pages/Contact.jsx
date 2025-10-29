import { Mail, MapPin, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="contact-page">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <h3 className="contact-card-title">Conference Convener</h3>
                
                <div className="contact-detail">
                  <Mail size={20} />
                  <div>
                    <p className="contact-label">Email</p>
                    <a href="mailto:adcomsys@uem.edu.in" className="contact-value">
                      adcomsys@uem.edu.in
                    </a>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <Phone size={20} />
                  <div>
                    <p className="contact-label">Phone</p>
                    <a href="tel:+919876543210" className="contact-value">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                
                <div className="contact-person">
                  <h4 className="person-name">Prof. (Dr.) Maumita Chakraborty</h4>
                  <p className="person-title">Convenor, AdComSys 2025</p>
                  <p className="person-affiliation">Department of CST & CSIT</p>
                  <p className="person-affiliation">University of Engineering & Management, Kolkata</p>
                </div>
              </div>
              
              <div className="location-card">
                <h3 className="contact-card-title">
                  <MapPin size={24} />
                  Location
                </h3>
                
                <div className="address">
                  <p className="address-line"><strong>University of Engineering & Management</strong></p>
                  <p className="address-line">University Area, Plot No. III – B/5</p>
                  <p className="address-line">New Town, Action Area III</p>
                  <p className="address-line">Kolkata - 700160</p>
                  <p className="address-line">West Bengal, India</p>
                </div>
              </div>
            </div>
            
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.512695861582!2d88.48732647507737!3d22.559920179500708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sUniversity%20of%20Engineering%20%26%20Management%2C%20Kolkata%20(UEM)!5e0!3m2!1sen!2sin!4v1729930085111!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UEM Kolkata Location"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
