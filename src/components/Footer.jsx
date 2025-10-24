import kolkataLandmarks from '@/assets/kolkata-landmarks.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">© 2025 UEM. ALL Rights Reserved</p>
          <div className="footer-illustration">
            <img src={kolkataLandmarks} alt="Kolkata Landmarks" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
