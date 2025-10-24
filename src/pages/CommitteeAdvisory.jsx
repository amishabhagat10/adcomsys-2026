import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Committee.css';

const CommitteeAdvisory = () => {
  const members = [
    { name: 'Prof. Barna Cornel', affiliation: 'Department of Informatics, Aurel Vlaicu University of Arad, Romania' },
    { name: 'Dr. Lawrence Dalmarie', affiliation: 'University of District of Columbia, USA' },
    { name: 'Dr. Karina Aragon Gaxiola', affiliation: 'University of Waterloo, Canada' },
    { name: 'Dr. Mohammad Al Azawi', affiliation: 'Oman College of Management & Technology, Oman' },
    { name: 'Dr. Mohammed Beitsuwaflim', affiliation: 'Sultan Qaboos University, Oman' },
    { name: 'Dr. Dena McMartin', affiliation: 'University of Saskatchewan, Canada' },
    { name: 'Dr. David deMontigny', affiliation: 'University of Regina, Canada' },
    { name: 'Dr. Mohd Hafiz Bin Fazalul Rahiman', affiliation: 'University Malaysia Perlis, Malaysia' },
    { name: 'Dr. Nathalie Tourigny', affiliation: 'University of Waterloo, Canada' },
    { name: 'Dr. Marian Langbridge', affiliation: 'School of Engineering & Material Science, UK' },
    { name: 'Dr. March Shannon', affiliation: 'University of Newfoundland, Canada' },
    { name: 'Dr. Lei Zhu', affiliation: 'National Renewable Energy Laboratory, USA' },
    { name: 'Dr. Michael Osborne', affiliation: 'University of Oxford, UK' },
    { name: 'Dr. Robert F. Davis', affiliation: 'Carnegie Mellon University, USA' },
    { name: 'Dr. Burak O. Ozdoganlar', affiliation: 'Carnegie Mellon University, USA' },
    { name: 'Dr. Mathieu Boudreault', affiliation: 'Montreal Heart Institute, Canada' },
    { name: 'Dr. Klaus Obermayer', affiliation: 'Technische University, Netherlands' },
    { name: 'Dr. A. Mounir Boukadoum', affiliation: 'Montreal Heart Institute, Canada' },
    { name: 'Dr. Richard Linley', affiliation: 'University of Cambridge, UK' },
    { name: 'Dr. Qusay Mahmoud', affiliation: 'Ontario Tech University, Canada' },
    { name: 'Dr. Gashaw Mekonnen', affiliation: 'College of Health Sciences, Addis Ababa University, Ethiopia' },
    { name: 'Dr. Gregory Dudek', affiliation: 'McGill University, Canada' },
    { name: 'Dr. Sylvie Thiebaux', affiliation: 'ANU College of Computer Science, Australia' },
    { name: 'Dr. Adam W. Skorek', affiliation: 'University of Québec at Trois-Rivières, Canada' },
    { name: 'Dr. Michel Plaisent', affiliation: 'University of Quebec in Montreal, Canada' },
    { name: 'Dr. Jörg Sandert', affiliation: 'University of Alberta, Canada' },
    { name: 'Dr. Erik Cambria', affiliation: 'Nanyang Technological University, Singapore' },
    { name: 'Dr. Nathalie Japkowicz', affiliation: 'American University, USA' },
    { name: 'Dr. Liming Zhang', affiliation: 'University of California, USA' },
    { name: 'Dr. Wudhichart Sawangphol', affiliation: 'Mahidol University, Thailand' },
    { name: 'Dr. Noraisyah Binti Mohamed Shah', affiliation: 'University of Malaya, Malaysia' },
    { name: 'Dr. Raj Jain', affiliation: 'Washington University, USA' },
    { name: 'Dr. Hadj Bourdoucen', affiliation: 'Sultan Qaboos University, Oman' },
    { name: 'Dr. Vincenzo Piuri', affiliation: 'Universita’ degli Studi di Milano, Italy' },
    { name: 'Dr. Nor Ashidi Mat Isa', affiliation: 'Universiti Sains Malaysia, Malaysia' },
    { name: 'Dr. V.G. Tharinda Nishantha Vidanagama', affiliation: 'Wayamba University of Sri Lanka, Sri Lanka' },
    { name: 'Om B. Khadka', affiliation: 'Project Lead & IT Development Expert, HELVETAS Swiss' },
    { name: 'Prof. Dr. Sandeep Poddar', affiliation: 'Deputy Vice Chancellor (Research & Innovation), Lincoln University College, Malaysia' },
    { name: 'Dr. Chong Wen Tong', affiliation: 'Department of Mechanical Engineering, Universiti Malaya, Malaysia' }
  ];

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="committee-page">
        <div className="container">
          <h1 className="page-title">International Advisory Committee</h1>
          
          <div className="committee-content">
            <div className="committee-members-grid">
              {members.map((member, index) => (
                <div key={index} className="committee-card">
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-affiliation">{member.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommitteeAdvisory;
