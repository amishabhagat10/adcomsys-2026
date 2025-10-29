import { FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './TechnicalPrograms.css';

const TechnicalSchedule = () => {
  const sessions = [
    {
      title: 'Session 1 (Offline)',
      date: '26th June 2025',
      time: '2.15PM - 4.30PM',
      mode: 'Offline',
      venue: 'Board Room, University of Engineering and Management Kolkata',
      papers: [
        { id: '10', title: 'Deep Learning-Based Speech Emotion Recognition: Comparative Analysis of Neural Architectures and Feature Extraction Techniques', authors: 'Deepra Mazumder, Devarshi Gupta and Jhalak Dutta' },
        { id: '58', title: 'AI-Driven Business Intelligence for Optimizing Energy Efficiency in Smart Urban Systems: A Comparative Study', authors: 'Amit Kumar Mandal and Kisor Ray' },
        { id: '92', title: 'FitFinder: A Next-Gen Resume Analyzer for Data-Driven Talent Acquisition', authors: 'Pratik Kundu, Souvik Nandi, Nirmal Sana, Pabitra Kumar Dey, Pradipta Pal, Debasis Guha' }
      ]
    },
    {
      title: 'Session 2 (Online)',
      date: '27th June 2025',
      time: '2.00PM - 3.30PM',
      mode: 'Online',
      venue: 'University of Engineering and Management Kolkata',
      papers: [
        { id: '60', title: 'Private Schemes for Cybersecurity Certifications: An Experimental Modeling and Forecasting for Success', authors: 'Rachel Menda-Shabat-More, Spasova Veselina' },
        { id: '21', title: 'Sustainable Development Goals and Social Sector Expenditure in India: Using Tax Revenue as Moderator', authors: 'Samiksha Kashyap; Bhakti Agarwal; Shailesh Rastogi; Dr. Arpita Sharma; Rahul Sharma; Mr. Narender Singh' },
        { id: '88', title: 'Fine-Tuned MobileNetV2 for Robust Flower Species Classification: A Transfer Learning Approach', authors: 'Shahriar Arefin Zummon, Safwat Nusrat and Pushpita Dhar' }
      ]
    },
    {
      title: 'Session 3 (Online)',
      date: '27th June 2025',
      time: '2.00PM - 3.30PM',
      mode: 'Online',
      venue: 'University of Engineering and Management Kolkata',
      papers: [
        { id: '20', title: 'Nucleus Instance Segmentation and Metastatic Tissue Identification using Machine Learning', authors: 'Rahul Mehta, Ankita Chatterjee, Jayanta Mukherjee, Sudipta Ghosh' },
        { id: '22', title: 'A Study on Phylogenetic Trees: Generations and Applications', authors: 'Sumit Chakraborty, Saptaparna Kundu, Maumita Chakraborty, and Rajat Kumar Pal' },
        { id: '31', title: 'Innovative IoT-Based Healthcare Devices: A new Era of Patient Monitoring and Care', authors: 'Aayush Mishra, Niladri Das, Brambhananda Roy, Dr. Sangeeta Jana Mukhopadhyay' }
      ]
    },
    {
      title: 'Session 4 (Online)',
      date: '27th June 2025',
      time: '2.00PM - 3.30PM',
      mode: 'Online',
      venue: 'University of Engineering and Management Kolkata',
      papers: [
        { id: '25', title: 'Artificial Intelligence in Travel and Hospitality: A New Era for Visitor Engagement', authors: 'Mudang Tagiya & Odang Mara' },
        { id: '54', title: 'Exploring Diverse Techniques to Analyze Sentiments', authors: 'Kanchan Patil, Harsha Deshpande, Lizzen Camelo, Quisha Coutinho, Anusha Pai, Supriya Patil, Cynara Sliveira, Ramita Karpe' },
        { id: '81', title: 'Machine Learning-Based Analysis of Electricity Generation on Real-Time Data from Sikkim Regions', authors: 'Samir Limboo, Awashes Katel, Tawal Kumar Koirala, Aniruddha Nag and Nandan Banerji' }
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
