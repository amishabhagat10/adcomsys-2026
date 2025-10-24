import { FileText, Calendar, Send, FileDown, DollarSign, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '@/assets/hero-video.mp4'; 
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Dashboard.css';

const Dashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="dashboard">
        {/* Hero Section */}
        <section className="hero-section">
          {/* 🎥 Background Video */}
          <video
            className="hero-video"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="hero-overlay">
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">AdComSys 2025</h1>
                <h2 className="hero-subtitle">Third International Conference on Advanced Computing and Systems</h2>
                <div className="hero-organizer">
                  <p>Organized By:</p>
                  <p>Department of Computer Science and Technology &amp; Computer Science and Information Technology (CST &amp; CSIT)</p>
                  <p>University of Engineering and Management, Kolkata</p>
                </div>
              </div>
            </div>
          </div>
          <div className="marquee-container">
            <div className="marquee-content">
              <span>AdComSys 2025 will be organized by University of Engineering and Management, Kolkata on 26th and 27th June 2025</span>
              <span>AdComSys 2025 will be organized by University of Engineering and Management, Kolkata on 26th and 27th June 2025</span>
              <span>AdComSys 2025 will be organized by University of Engineering and Management, Kolkata on 26th and 27th June 2025</span>
              <span>AdComSys 2025 will be organized by University of Engineering and Management, Kolkata on 26th and 27th June 2025</span>
              <span>AdComSys 2025 will be organized by University of Engineering and Management, Kolkata on 26th and 27th June 2025</span>
              <span>AdComSys 2025 will be organized by University of Engineering and Management, Kolkata on 26th and 27th June 2025</span>
              <span>AdComSys 2025 will be organized by University of Engineering and Management, Kolkata on 26th and 27th June 2025</span>
              <span>AdComSys 2025 will be organized by University of Engineering and Management, Kolkata on 26th and 27th June 2025</span>
            </div>
          </div>
        </section>

        {/* Publication Info */}
        <section className="section">
          <div className="container">
            <div className="publication-box">
              <p className="publication-text">
                All Presented and accepted Papers will be published by the SCOPUS Indexed Lecture Notes in Networks and Systems.
              </p>
              <a href="https://www.springer.com/series/15179" className="publication-link">https://www.springer.com/series/15179</a>
            </div>
          </div>
        </section>

        {/* Quick Access Buttons */}
        <section className="section section-gray">
          <div className="container">
            <div className="quick-access">
              <a href="/registered-papers.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FileText size={20} />
                List of Registered Papers
              </a>
              <a href="/program-schedule.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Calendar size={20} />
                Program Schedule
              </a>
            </div>
          </div>
        </section>

        {/* Conference Objectives */}
        <section className="section">
          <div className="container">
            <div className="objectives-box">
              <h3 className="section-title">Conference Overview</h3>
              <p className="objectives-text">
                The second edition of the International Conference on Advanced Computing and Systems (AdComSys 2025) will foster an 
                excellent international forum for exchanging knowledge and the recent developments in theory, methodologies, and 
                applications in artificial intelligence (AI) systems, Internet of Things (IoT) systems, 
                cybersecurity and blockchain systems, and emerging computing techniques. AdComSys 2025 aims to foster intense 
                dialogues between academia and industry, bridging the gaps between scholarly research, industrial initiatives, 
                and governmental policymaking. AdComSys 2025 will contribute to the diverse spectrum of keynote addresses, 
                technical tracks, panel discussions, and industry exhibits where academia can view state-of-the-art findings 
                from the trials and interoperability experiments. Furthermore, the industry will benefit from exposure to 
                leading-edge research and an opportunity to interact and fraternize with academic researchers on real-world 
                issues. AdComSys 2025 invites original research and technical papers from researchers, scientists, academicians, 
                industry professionals, and students. These papers are intended to share the experiences, new ideas, and 
                research results related to advanced computing and systems, as well as to discuss the practical challenges 
                faced and solutions implemented. The Department of Computer Science and Technology (CST) & Computer Science 
                and Information Technology (CSIT), University of Engineering and Management in Kolkata, India will host the 
                second International Conference on Advanced Computing and Systems (AdComSys 2025) on the 26th and 27th of June 2025.
              </p>
              
              <div className="action-buttons">
                <Link to="/authors/submissions" className="btn btn-outline">
                  <Send size={20} />
                  Submissions
                </Link>
                <Link to="/authors/call-for-papers" className="btn btn-outline">
                  <FileDown size={20} />
                  Call for Papers
                </Link>
                <Link to="/registration" className="btn btn-outline">
                  <DollarSign size={20} />
                  Registration Info
                </Link>
                <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <Download size={20} />
                  Brochure
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Image Carousel */}
        <section className="section section-gray">
          <div className="container">
            <h3 className="section-title">Conference Highlights</h3>
            <div className="carousel-container">
              <button className="carousel-control carousel-control-left" onClick={prevSlide}>
                <ChevronLeft size={32} />
              </button>
              <div className="carousel-track">
                <div className="carousel-item active">
                  <div className="carousel-content">
                    Conference Highlight Image {currentSlide + 1}
                  </div>
                </div>
              </div>
              <button className="carousel-control carousel-control-right" onClick={nextSlide}>
                <ChevronRight size={32} />
              </button>
            </div>
            <div className="carousel-indicators">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Combined Section */}
        <section className="section">
          <div className="container">
            <div className="info-grid">
              {/* Announcements */}
              <div className="info-card">
                <h3 className="info-title">Announcements</h3>
                <p className="info-description">
                  Stay updated with the latest conference announcements and important updates. Check back regularly for new information.
                </p>
                <a href="#" className="info-link">Submit Manuscript</a>
                <div className="info-buttons">
                  <a href="/program-schedule.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                    Program Schedule
                  </a>
                  <a href="/camera-ready.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                    Camera Ready Papers
                  </a>
                </div>
              </div>

              {/* Important Deadlines */}
              <div className="info-card">
                <h3 className="info-title">Important Deadlines</h3>
                <table className="deadlines-table">
                  <tbody>
                    <tr>
                      <td>Full Paper Submission</td>
                      <td>February 15, 2025</td>
                    </tr>
                    <tr>
                      <td>Acceptance Notification</td>
                      <td>February 28, 2025</td>
                    </tr>
                    <tr>
                      <td>Camera-Ready Submission</td>
                      <td>March 5, 2025</td>
                    </tr>
                    <tr>
                      <td>Early Bird Registration</td>
                      <td>February 28, 2025</td>
                    </tr>
                    <tr>
                      <td>Conference Dates</td>
                      <td>March 15-17, 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Past Conferences */}
              <div className="info-card">
                <h3 className="info-title">Past Conferences</h3>
                <div className="past-conf-logo">
                  [Previous Conference Logo/Image Placeholder]
                </div>
                <p className="info-description">
                  AdComSys 2024 was successfully organized with participation from 25+ countries and 150+ paper presentations. 
                  The conference proceedings were published by Springer LNNS series.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
