import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './AboutUEM.css';

const AboutUEM = () => {
  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="about-page">
        <div className="container">
          <h1 className="page-title">About UEM</h1>
          
          <div className="content-section">
            <h2 className="content-subtitle">University of Engineering & Management, Kolkata</h2>
            
            <p className="content-text">
              The University of Engineering & Management (UEM), Kolkata is a premier institution dedicated to excellence in technical education and research. Established with a vision to create world-class professionals, UEM has emerged as one of the leading universities in Eastern India.
            </p>
            
            <p className="content-text">
              UEM Kolkata offers a wide range of undergraduate, postgraduate, and doctoral programs in various disciplines including Computer Science, Electronics & Communication, Mechanical Engineering, Civil Engineering, and Management Studies. The university is known for its state-of-the-art infrastructure, experienced faculty, and strong industry connections.
            </p>
            
            <h3 className="content-heading">Our Vision</h3>
            <p className="content-text">
              To be a globally recognized university that fosters innovation, entrepreneurship, and holistic development of students through quality education and cutting-edge research.
            </p>
            
            <h3 className="content-heading">Our Mission</h3>
            <ul className="content-list">
              <li>Provide world-class technical education with emphasis on practical learning</li>
              <li>Promote research and innovation in emerging technologies</li>
              <li>Foster industry-academia collaboration for mutual growth</li>
              <li>Develop socially responsible professionals with ethical values</li>
              <li>Create a vibrant ecosystem for entrepreneurship and startups</li>
            </ul>
            
            <h3 className="content-heading">Academic Excellence</h3>
            <p className="content-text">
              UEM Kolkata is approved by AICTE and UGC, and offers programs that are designed to meet global standards. The university has established collaborations with leading international universities and industry partners, providing students with opportunities for exchange programs, internships, and placements.
            </p>
            
            <h3 className="content-heading">Research & Innovation</h3>
            <p className="content-text">
              The university actively promotes research activities across various domains. With well-equipped laboratories, research centers, and funding support, UEM encourages faculty and students to engage in cutting-edge research that addresses real-world challenges.
            </p>
            
            <h3 className="content-heading">Campus & Facilities</h3>
            <p className="content-text">
              Located in New Town, Kolkata, the UEM campus spans across acres of green landscape and features modern academic buildings, advanced laboratories, a central library with extensive digital resources, sports facilities, and comfortable hostel accommodations. The campus provides an ideal environment for learning, research, and overall personality development.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUEM;
