import { Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './TechnicalPrograms.css';

const BestPapers = () => {
  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="technical-page">
        <div className="container">
          <h1 className="page-title">
            <Award size={40} className="inline-icon" />
            Best Papers
          </h1>
          
          <div className="coming-soon-box">
            <h2 className="coming-soon-title">COMING SOON</h2>
            <p className="coming-soon-text">
              Best paper awards will be announced after the conference evaluation process is complete.
              Please check back later for the list of award-winning papers.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BestPapers;
