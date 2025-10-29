import { FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './TechnicalPrograms.css';

const AcceptedPapers = () => {
  const papers = [
    { id: '10', title: 'Deep Learning-Based Speech Emotion Recognition: Comparative Analysis of Neural Architectures and Feature Extraction Techniques', authors: 'Deepra Mazumder, Devarshi Gupta and Jhalak Dutta' },
    { id: '58', title: 'AI-Driven Business Intelligence for Optimizing Energy Efficiency in Smart Urban Systems: A Comparative Study', authors: 'Amit Kumar Mandal and Kisor Ray' },
    { id: '92', title: 'FitFinder: A Next-Gen Resume Analyzer for Data-Driven Talent Acquisition', authors: 'Pratik Kundu, Souvik Nandi, Nirmal Sana, Pabitra Kumar Dey, Pradipta Pal, Debasis Guha' },
    { id: '93', title: 'A Deep Learning-Based Method for the Categorization of Different Skin Diseases', authors: 'Manashi De, Rasham Lal Chhetri, Meghna Konar, Aditya Narayan Joardar, Ayush Jain, Ekarsi Lodh, Tapan Chowdhury' },
    { id: '96', title: 'Community Detection in Dynamic Social Networks Using Time Stamp-Based Leiden', authors: 'Debarshi Choudhury, Kaustav Doari, Ayan Banerjee, Indranil Patra, Mrinal Kanti Nath, and Tapan Chowdhury' },
  ];

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="technical-page">
        <div className="container">
          <h1 className="page-title">List of Accepted and Registered Papers</h1>
          
          <div className="papers-header">
            <p className="papers-info">
              Total of {papers.length} papers have been accepted and registered for AdComSys 2025.
            </p>
            <a href="/accepted-papers.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FileText size={20} />
              View PDF
            </a>
          </div>
          
          <div className="papers-table-wrapper">
            <table className="papers-table">
              <thead>
                <tr>
                  <th>Paper ID</th>
                  <th>Paper Title</th>
                  <th>Authors</th>
                </tr>
              </thead>
              <tbody>
                {papers.map((paper, index) => (
                  <tr key={index}>
                    <td className="paper-id">{paper.id}</td>
                    <td className="paper-title">{paper.title}</td>
                    <td className="paper-authors">{paper.authors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AcceptedPapers;
