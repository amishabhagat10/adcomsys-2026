import { FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './TechnicalPrograms.css';

const AcceptedPapers = () => {
  const papers = [
    { id: 'P001', title: 'Deep Learning for Image Classification: A Comprehensive Study', authors: 'John Doe, Jane Smith, Robert Brown' },
    { id: 'P002', title: 'IoT-Based Smart Agriculture System', authors: 'Alice Johnson, Michael Chen' },
    { id: 'P003', title: 'Blockchain for Supply Chain Management', authors: 'David Wilson, Sarah Lee, Tom Anderson' },
    { id: 'P004', title: 'Machine Learning in Healthcare Diagnostics', authors: 'Emma Davis, James Miller' },
    { id: 'P005', title: 'Cybersecurity Threats in Cloud Computing', authors: 'Richard Taylor, Laura White' },
    { id: 'P006', title: 'Natural Language Processing for Sentiment Analysis', authors: 'Chris Martin, Amy Clark' },
    { id: 'P007', title: 'Edge Computing for Real-Time Applications', authors: 'Kevin Harris, Lisa Moore' },
    { id: 'P008', title: 'Quantum Computing: Current State and Future Prospects', authors: 'Daniel Garcia, Nancy Rodriguez' },
    { id: 'P009', title: 'AI in Robotics and Automation', authors: 'Paul Martinez, Jennifer Hernandez' },
    { id: 'P010', title: 'Privacy Preservation in Social Networks', authors: 'Thomas Lee, Sandra Kim' },
    { id: 'P011', title: 'Big Data Analytics for Business Intelligence', authors: 'Andrew Thompson, Maria Lopez' },
    { id: 'P012', title: 'Cloud-Native Application Development', authors: 'Brian Jackson, Emily White' }
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
