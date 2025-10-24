import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Committee.css';

const CommitteeOrganizing = () => {
  const members = {
    chiefPatron: [
      { name: 'Prof. Banani Chakrabarti', title: 'Chancellor', affiliation: 'University of Engineering & Management, Kolkata' }
    ],
    patrons: [
      { name: 'Prof. Dr. Sajal Dasgupta', title: 'Vice Chancellor', affiliation: 'University of Engineering & Management, Kolkata' },
      { name: 'Prof. Dr. Satyajit Chakrabarti', title: 'Pro Vice Chancellor', affiliation: 'University of Engineering & Management, Kolkata' },
      { name: 'Prof. Dr. Sukalyan Goswami', title: 'Registrar', affiliation: 'University of Engineering & Management, Kolkata' },
      { name: 'Prof. Dr. Rajashree Paul', title: 'Deputy-Dean (Research), Director(IQAC)', affiliation: 'University of Engineering & Management, Kolkata' },
      { name: 'Prof. Dr. Kamakhya Prasad Ghatak', title: 'Dean-Engineering', affiliation: 'University of Engineering & Management, Kolkata' },
      { name: 'Prof. Dr. Rajiv Ganguly', title: 'Dean-Science', affiliation: 'University of Engineering & Management, Kolkata' },
      { name: 'Prof. Dr. Abir Chatterjee', title: 'Dean-Research', affiliation: 'University of Engineering and Management, Kolkata' }
    ],
    generalChair: [
      { name: 'Prof. Dr. Weiping Ding', title: 'Deputy Dean of School of Information Science and Technology', affiliation: 'Nantong University, Nantong, Jiangsu, China' },
      { name: 'Prof. Dr. Amlan Chakrabarti', affiliation: 'A.K.Choudhury School of Information Technology , University of Calcutta' },
      { name: 'Prof. Dr. Maumita Chakraborty', title: 'Department of Computer Science and Technology & Computer Science and Information Technology', affiliation: 'University of Engineering and Management, Kolkata' },
      { name: 'Prof. Dr. Shouvik Chakraborty', title: 'Department of Computer Science & Technology', affiliation: 'Government of West Bengal, Chandannagar, Hooghly, West Bengal, India' }
    ],
    convenor: [
      { name: 'Prof. Dr. Maumita Chakraborty', affiliation: 'University of Engineering and Management, Kolkata' }
    ],
    coConvenors: [
      { name: 'Prof. Dr. Subhalaxmi Chakraborty', affiliation: 'University of Engineering and Management, Kolkata' },
      { name: 'Prof. Dr. Sudipta Basu Pal', affiliation: 'University of Engineering and Management, Kolkata' },
      { name: 'Prof. Dr. Chiradeep Mukherjee', affiliation: 'University of Engineering and Management, Kolkata' },
      { name: 'Prof. Dr. Sankhadeep Chatterjee', affiliation: 'University of Engineering and Management, Kolkata' }
    ],
    technicalChair: [
      { name: 'Prof. Dr. Danilo Pelusi', affiliation: 'University of Teramo, Faculty of Communication Sciences, Teramo, Italy' },
      { name: 'Prof. Dr. Asit Kumar Das', affiliation: 'Department of Computer Science and Technology, Indian Institute of Engineering Science and Technology, Shibpur' }
    ],
    industrialChair: [
      { name: 'Dr. Tanushyam Chattopadhyay', affiliation: 'Techno Functional Head, Computer Vision, Adani Enterprise Limited.' }
    ],
    financeChair: [
      { name: 'Mr. Indranil Banerjee', affiliation: 'University of Engineering and Management Kolkata' }
    ],
    organizingMembers: [
      { name: 'Prof. Dr. Srilekha Mukherjee',  affiliation: 'University of Engineering and Management Kolkata' },
      { name: 'Prof. Dr. Anirban Ganguly',  affiliation: 'University of Engineering and Management Kolkata' },
      { name: 'Prof. Dr. Rajendrani Mukherjee',  affiliation: 'University of Engineering and Management Kolkata' },
      { name: 'Prof. Dr. Debanjana Datta Mitra',  affiliation: 'University of Engineering and Management Kolkata' },
      { name: 'Prof. Pradipta Sarkar',  affiliation: 'University of Engineering and Management Kolkata' },
      { name: 'Prof. Sanjukta Mishra',  affiliation: 'University of Engineering and Management Kolkata' },
      { name: 'Prof. Kamalika Bhowal',  affiliation: 'University of Engineering and Management Kolkata' },
      { name: 'Prof. Dr. Suvaditya Majumdar',  affiliation: 'University of Engineering and Management Kolkata' },
      { name: 'Prof. Ayan Das',  affiliation: 'University of Engineering and Management Kolkata' },
      { name: 'Prof. Arpita Saha Chowdhury',  affiliation: 'University of Engineering and Management Kolkata' }
    ]
  };

  const CommitteeSection = ({ title, members }) => (
    <div className="committee-section">
      <h3 className="committee-section-title">{title}</h3>
      <div className="committee-grid">
        {members.map((member, index) => (
          <div key={index} className="committee-card">
            <h4 className="member-name">{member.name}</h4>
            <p className="member-title">{member.title}</p>
            <p className="member-affiliation">{member.affiliation}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="committee-page">
        <div className="container">
          <h1 className="page-title">Organizing Committee</h1>
          
          <div className="committee-content">
            <CommitteeSection title="Chief Patron" members={members.chiefPatron} />
            <CommitteeSection title="Patrons" members={members.patrons} />
            <CommitteeSection title="General Chair" members={members.generalChair} />
            <CommitteeSection title="Convenor" members={members.convenor} />
            <CommitteeSection title="Co-Convenors" members={members.coConvenors} />
            <CommitteeSection title="Technical Chair" members={members.technicalChair} />
            <CommitteeSection title="Industrial Chair" members={members.industrialChair} />
            <CommitteeSection title="Finance Chair" members={members.financeChair} />
            <CommitteeSection title="Organizing Committee Members" members={members.organizingMembers} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommitteeOrganizing;
