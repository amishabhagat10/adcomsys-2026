import { Download, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Authors.css';

const CallForPapers = () => {
  const tracks = [
    {
      title: 'Track 1: Artificial Intelligence & Machine Learning',
      topics: [
        "Cloud Computing",
        "Fog Computing",
        "Dew Computing",
        "Parallel Computing",
        "Mobile Computing",
        "Pervasive Computing",
        "Green Computing",
        "Cognitive Computing",
        "Evolutionary Computation",
        "Geoscience and Remote Sensing",
        "Grid Computing",
        "Industrial Informatics",
        "Human Centric Computing",
        "Quantum Cryptography",
        "Digital Forensics",
        "Cognitive Intelligence",
        "Fuzzy Systems",
        "Affective Computing",
        "Audio, Speech and Video Processing",
        "Biomedical and Health Informatics",
        "Bioinformatics",
        "Quantum Computing",
        "Bio-inspired Computing",
        "Neuromorphic Computing",
        "High Performance Computing",
        "Distribued Computing",
        "Edge Computing",
        "DNA Computing Reversible Computing",
        "Optical Computing",
        "Analog Computing"
      ]
    },
    {
      title: 'Track 2: Internet of Things & Smart Systems',
      topics: [
        "Intelligent Systems",
        "AI with Robotics",
        "AI-based Image Processing",
        "Explainable AI",
        "Deep Learning",
        "Reinforcement Learning",
        "Active Learning",
        "Featured Learning",
        "Meta Learning",
        "Generative Models",
        "Generative Adversarial Network",
        "Soft Computing",
        "NLP-based Smart Systems",
        "Robotics Systems",
        "Data Analytics Systems",
        "Big Data",
        "Data Mining",
        "Automation",
        "AI-Systems in Autonomous Vehicles",
        "Fuzzy Systems",
        "Hybrid AI"
      ]
    },
    {
      title: 'Track 3: Cybersecurity & Blockchain',
      topics: [
        "IoT in Healthcare",
        "IoT in Vehicular Network",
        "Industrial IOT",
        "IoT in Industry",
        "IoT in Agriculture",
        "IoT in Underwater Surveillance",
        "IoT in Smart City",
        "Human Activity Recognition",
        "Wireless Sensor Networks",
        "5G & beyond 5G",
        "IoT in Everything",
        "AI IoT",
        "Industry 4.0",
        "Consumer IOT",
        "Infrastructure IOT",
        "Commercial IOT",
        "Fog IOT",
        "Short and Long Range IOT",
        "Environmental IOT",
        "Security in IOT"
      ]
    },
    {
      title: 'Track 4: Cloud & Distributed Computing',
      topics: [
        "Various types of Security Systems",
        "Malware Protection Systems",
        "Phising Protection Systems",
        "DoS/DDoS Protection Systems",
        "Preventive and Detective Security Systems",
        "Corrective Security Systems",
        "Blockchain Authentication",
        "Consensus Mechanisms",
        "Blockchain Types and Networks",
        "Smart Contacts",
        "Decentralized Applications",
        "Blockchain Scalability Solutions",
        "Blockchain Governance",
        "Blockchain Interoperability",
        "Blockchain Security",
        "Cryptocurrencies and Tokens",
        "Non-Fungible Tokes",
        "Security, Privacy, Attacks, and Forensics",
        "Smart Contracts",
        "Encryption Techniques",
        "Security in IoT",
        "Crypt Analysis",
        "Blockchain-based Machine Learning",
        "Dependable and Secure Computing",
        "Cybernetics"
      ]
    }
  ];

  return (
    <div className="page-wrapper">
      <Header />

      <main className="authors-page">
        <div className="container">
          <h1 className="page-title">Call for Papers</h1>

          <div className="content-box">
            <div className="highlight-box">
              <p className="highlight-text">
                Best Paper Awards will be presented in each track
              </p>
            </div>

            <p className="content-text">
              AdComSys 2025 invites original research contributions addressing theoretical, practical, and experimental 
              aspects of advanced computing systems. We welcome submissions from academia and industry that present novel 
              ideas, research findings, and practical experiences.
            </p>

            <div className="button-group">
              <a
                href="/cfp.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Download size={20} />
                Download CFP (PDF)
              </a>
              <a
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FAdComSys2025"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Send size={20} />
                Submit Paper
              </a>
            </div>

            <h3 className="content-heading">Research Tracks & Topics</h3>

            {/* === FIXED FULL-WIDTH 4-COLUMN GRID === */}
            <div
              className="tracks-section"
              style={{
                width: "100%",
                backgroundColor: "#abebeb7e",
                borderRadius: "20px",
                padding: "40px 30px",
                marginTop: "30px",
              }}
            >
              <div
                className="tracks-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "25px",
                  width: "100%",
                }}
              >
                {tracks.map((track, index) => (
                  <div
                    key={index}
                    className="track-card"
                    style={{
                      backgroundColor: "#fafafaff",
                      borderRadius: "16px",
                      padding: "20px",
                      boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = "0 5px 12px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.1)";
                    }}
                  >
                    <h4
                      className="track-title"
                      style={{
                        color: "#008c8c",
                        fontSize: "1.1rem",
                        fontWeight: "700",
                        marginBottom: "12px",
                      }}
                    >
                      {track.title}
                    </h4>
                    <ul
                      className="track-topics"
                      style={{
                        listStyleType: "none",
                        paddingLeft: "0",
                        lineHeight: "1.7",
                      }}
                    >
                      {track.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span
                            style={{
                              color: "#e67e22",
                              fontWeight: "bold",
                              fontSize: "1rem",
                            }}
                          >
                            
                          </span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CallForPapers;
