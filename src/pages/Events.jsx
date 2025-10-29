import { Calendar, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Events.css';
import img1 from '@/assets/events/1.png';
import img2 from '@/assets/events/2.png';
import img3 from '@/assets/events/3.png';
import img4 from '@/assets/events/4.png';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Post-It',
      description: 'Driven by art, design, or the power of visual storytelling ? POST-IT is your platform. Transform your ideas into striking visuals that captivate, inspire, and communicate beyond words.',
      date: 'June 26, 2025',
      time: '11:00 AM',
      venue: 'Buddha Auditorium',
      image: img1,
      register: 'https://bit.ly/AdComSys25-PostIt'
    },
    {
      id: 2,
      title: 'Techniche',
      description: 'Techniche 2025, platform to showcase innovation and creativity! A Project Competition inviting budding tech minds to present their unique solutions to real-world challenges.',
      date: 'June 26, 2025',
      time: '11:00 AM',
      venue: 'Buddha Auditorium',
      image: img4,
      register: 'https://bit.ly/AdComSys25-Techniche'
    },
    {
      id: 3,
      title: 'Workshop',
      description: 'Dive deep into the world of cloud infrastructures, cybersecurity strategies, and enterprise-grade protection techniques. AdComSys 2025 presents the Enterprise Cloud Security Workshop',
      date: 'June 26, 2025',
      time: '2:00 PM to 4:00 PM',
      venue: 'CCFL-3, University of Engineering and Management Kolkata',
      image: img3,
      register: 'https://bit.ly/AdComSys25-ECS'
    },
    {
      id: 4,
      title: 'Coders Brawl',
      description: 'Step into the ultimate online coding arena, where sharp minds collide in a high-stakes showdown of DSA-driven challenges designed to stretch your skills and ignite your competitive spirit. Are you fast enough? Are you sharp enough? This isn’t just another contest — it’s a digital battleground, and only the best will rise.',
      date: 'June 27, 2025',
      time: '7:00 PM to 9:00 PM',
      venue: 'Online',
      image: img2,
      register: 'https://bit.ly/AdComSys25-CodersBrawl'
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
                  
                  <a href={event.register} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full">
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
