import { FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './TechnicalPrograms.css';

const TechnicalSchedule = () => {
  const sessions = [
    {
      title: 'Session 1 (Offline)',
      date: 'March 15, 2025',
      time: '09:00 AM - 12:00 PM',
      mode: 'Offline',
      venue: 'Main Auditorium, UEM Kolkata',
      papers: [
        { id: 'P001', title: 'Deep Learning for Image Classification: A Comprehensive Study', authors: 'John Doe, Jane Smith, Robert Brown' },
        { id: 'P002', title: 'IoT-Based Smart Agriculture System', authors: 'Alice Johnson, Michael Chen' },
        { id: 'P003', title: 'Blockchain for Supply Chain Management', authors: 'David Wilson, Sarah Lee, Tom Anderson' }
      ]
    },
    {
      title: 'Session 2 (Online)',
      date: 'March 15, 2025',
      time: '02:00 PM - 05:00 PM',
      mode: 'Online',
      venue: 'Zoom Meeting',
      papers: [
        { id: 'P004', title: 'Machine Learning in Healthcare Diagnostics', authors: 'Emma Davis, James Miller' },
        { id: 'P005', title: 'Cybersecurity Threats in Cloud Computing', authors: 'Richard Taylor, Laura White' },
        { id: 'P006', title: 'Natural Language Processing for Sentiment Analysis', authors: 'Chris Martin, Amy Clark' }
      ]
    },
    {
      title: 'Session 3 (Offline)',
      date: 'March 16, 2025',
      time: '09:00 AM - 12:00 PM',
      mode: 'Offline',
      venue: 'Conference Hall B, UEM Kolkata',
      papers: [
        { id: 'P007', title: 'Edge Computing for Real-Time Applications', authors: 'Kevin Harris, Lisa Moore' },
        { id: 'P008', title: 'Quantum Computing: Current State and Future Prospects', authors: 'Daniel Garcia, Nancy Rodriguez' },
        { id: 'P009', title: 'AI in Robotics and Automation', authors: 'Paul Martinez, Jennifer Hernandez' }
      ]
    }
  ];

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="technical-page">
        <div className="container">
          <h1 className="page-title">Technical Paper Schedule</h1>
          
          <div className="sessions-container">
            {sessions.map((session, index) => (
              <div key={index} className="session-block">
                <div className="session-header">
                  <h3 className="session-title">{session.title}</h3>
                  <a href={`/session-${index + 1}.pdf`} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                    <FileText size={18} />
                    View PDF
                  </a>
                </div>
                
                <div className="session-info">
                  <span><strong>Date:</strong> {session.date}</span>
                  <span><strong>Time:</strong> {session.time}</span>
                  <span><strong>Mode:</strong> {session.mode}</span>
                  <span><strong>Venue:</strong> {session.venue}</span>
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
                      {session.papers.map((paper, paperIndex) => (
                        <tr key={paperIndex}>
                          <td className="paper-id">{paper.id}</td>
                          <td className="paper-title">{paper.title}</td>
                          <td className="paper-authors">{paper.authors}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TechnicalSchedule;
