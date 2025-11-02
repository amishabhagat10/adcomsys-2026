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
            keynote
          </h1>
          
          <div className="coming-soon-box">
            <h2 className="coming-soon-title">COMING SOON</h2>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BestPapers;
