import { Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Authors.css';

const ImportantDates = () => {
  const deadlines = [
    { event: 'Full Paper Submission Deadline', date: 'February 15, 2025' },
    { event: 'Notification of Acceptance', date: 'February 28, 2025' },
    { event: 'Camera-Ready Paper Submission', date: 'March 5, 2025' },
    { event: 'Early Bird Registration Deadline', date: 'February 28, 2025' },
    { event: 'Regular Registration Deadline', date: 'March 10, 2025' },
    { event: 'Conference Start Date', date: 'March 15, 2025' },
    { event: 'Conference End Date', date: 'March 17, 2025' }
  ];

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="authors-page">
        <div className="container">
          <h1 className="page-title">
            <Calendar size={40} className="inline-icon" />
            Important Dates
          </h1>
          
          <div className="content-box">
            <p className="content-text center-text">
              Mark your calendars with these important deadlines for AdComSys 2025. All deadlines are 23:59 AoE (Anywhere on Earth).
            </p>
            
            <div className="dates-table-wrapper">
              <table className="dates-table">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {deadlines.map((item, index) => (
                    <tr key={index}>
                      <td className="event-cell">{item.event}</td>
                      <td className="date-cell">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="note-box">
              <p className="note-text">
                <strong>Note:</strong> All deadlines are firm. Late submissions will not be considered. 
                Please plan accordingly and submit well before the deadline to avoid any last-minute technical issues.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ImportantDates;
