import { Calendar, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Events.css';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Pre-Conference Workshop: AI and Machine Learning',
      description: 'Hands-on workshop covering the latest techniques in AI and ML. Participants will learn about deep learning frameworks, model training, and deployment strategies.',
      date: 'March 14, 2025',
      time: '10:00 AM - 05:00 PM',
      venue: 'Workshop Hall, UEM Kolkata',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Coders Brawl: Programming Competition',
      description: 'Test your coding skills in this exciting programming competition. Solve challenging algorithmic problems and compete with participants from around the world.',
      date: 'March 15, 2025',
      time: '02:00 PM - 06:00 PM',
      venue: 'Computer Lab 3, UEM Kolkata',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Research Poster Session',
      description: 'Interactive poster presentation session where researchers can showcase their work and engage in discussions with peers and experts.',
      date: 'March 16, 2025',
      time: '11:00 AM - 01:00 PM',
      venue: 'Exhibition Hall, UEM Kolkata',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Industry Panel Discussion',
      description: 'Panel discussion featuring industry leaders sharing insights on emerging technologies, career opportunities, and industry-academia collaboration.',
      date: 'March 16, 2025',
      time: '03:00 PM - 05:00 PM',
      venue: 'Main Auditorium, UEM Kolkata',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=250&fit=crop'
    }
  ];

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="events-page">
        <div className="container">
          <h1 className="page-title">Conference Events & Activities</h1>
          
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image" style={{ backgroundImage: `url(${event.image})` }}>
                  <div className="event-overlay"></div>
                </div>
                
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  
                  <div className="event-details">
                    <div className="event-detail">
                      <Calendar size={18} />
                      <span>{event.date}</span>
                    </div>
                    <div className="event-detail">
                      <Clock size={18} />
                      <span>{event.time}</span>
                    </div>
                    <div className="event-detail">
                      <MapPin size={18} />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  
                  <a href={`/event-registration-${event.id}`} className="btn btn-primary btn-full">
                    Register Now
                  </a>
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

export default Events;
