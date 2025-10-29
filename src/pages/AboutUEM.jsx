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
              University of Engineering and Management (UEM) aims to provide an international ambience and exposure with innovative teaching techniques and courses which are tailor-made (technical & soft skills) for the job market giving the students the winning edge and competitive advantage during placements.
            </p>
            
            
            <h3 className="content-heading">Who we are</h3>
            <ul className="content-list">
              <li>UEM Kolkata has won "AAA" category (first 10 institutes nationally among all institutes of India including all IITs and NITs) in NPTEL program (IIT Kharagpur and IIT Chennai)</li>
              <li>UEM Kolkata student has stood 1st amongst all students of India in NPTEL program</li>
              <li>UEM Kolkata and UEM Jaipur organized UEMCON-2016 in Columbia University, New York, USA in association with IEEE New York, IEEE USA and IEEE Region </li>
              <li>Highest salary offer at UEM Kolkata is Rs 72 lakhs per annum.</li>
              <li>The University is a partner institution in the prestigious European Union sponsored project 'FRACTION' & 'UNNAT BHARAT ABHIYAAN' of Govt. of India.</li>
              <li>UEMK has been recognised in the band "Performer" under the category "University & Deemed to be University (Private/Self Financed) (Technical)" in ATAL RANKING OF INSTITUTIONS ON INNOVATION ACHIEVEMENTS (ARIIA) 2021, a flagship program of the Ministry of Education, Government of India.</li>
            </ul>
            
            <h2 className="content1-heading">Vision Mission Values</h2>
            <h3 className="content-heading">Vision</h3>
            <p className="content-text">
              To be a globally recognized educational institution known for outcome based education and application oriented research.
            </p>
            
            <h3 className="content-heading">Mission</h3>
            <p className="content-text">
              To assist students to understand and enjoy seamless nature of knowledge and encourage them to apply acquired knowledge to practical use, so that they become worthy, socially responsible good human beings sought after their leadership qualities. To foster creativity, innovation and excellence through example based teaching-learning process imparted in the most simple and easily comprehensible way. To continuously upgrade knowledge base of our man power, improve infrastructure and use of latest technology/ pedagogical tools, and update curriculum through periodic feedback from stakeholders to enable students to meet professional requirements and their expectations.
            </p>
            
            <h3 className="content-heading">Values</h3>
            <p className="content-text">
              Graduate, Postgraduate and Doctoral Students known for their hard work, competence, disciplined life, socially responsible, professional conduct & intellectual and moral integrity.
            </p>
            
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUEM;
