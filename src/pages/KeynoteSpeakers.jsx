import { useState } from "react";
import { Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import speakerImg from "@/assets/speaker-placeholder.jpg";
import gautamImg from "@/assets/images/keynotes/gautam.jpg";
import "./KeynoteSpeakers.css";

const KeynoteSpeakers = () => {
  const [expandedSpeaker, setExpandedSpeaker] = useState(null);

  const toggleExpand = (id) => {
    setExpandedSpeaker(expandedSpeaker === id ? null : id);
  };

  const chiefGuests = [
    {
      id: 1,
      name: "Prof. (Dr.) Gautam Bhattacharyya",
      title: "Chief Guest",
      affiliation:
        "Director, Saha Institute of Nuclear Physics, Kolkata, India",
      image: gautamImg,
      linkedIn: "https://linkedin.com/in/chief-guest",
      shortBio:
        "Dr. Gautam Bhattacharyya has had a distinguished career in theoretical physics...",
      fullBio:
        "Dr. Gautam Bhattacharyya has had a distinguished career in theoretical physics, marked by leadership, international collaboration, and numerous honors. He is serving as the Director of the Saha Institute of Nuclear Physics (SINP), Kolkata, from March 2020, following a year as Acting Director. A recipient of the prestigious J.C. Bose National Fellowship (2017–2022), he is a Fellow of all three premier science academies in India: the Indian Academy of Sciences (IASc), the Indian National Science Academy (INSA), and the National Academy of Sciences, India (NASI). His academic journey includes postdoctoral research at CERN and the University of Pisa, and sabbaticals as a Mercator Visiting Professor at TU Dortmund and a Scientific Associate at CERN. He has been a Regular Associate of ICTP, Trieste, and served as Adjunct Faculty at TIFR, Mumbai. Among his many accolades is the B.M. Birla Science Prize in Physics (2005), and he earned a Gold Medal from Calcutta University for topping the M.Sc. Physics examination in 1989. His career reflects a deep commitment to both research excellence and institutional leadership.",
    },
    {
      id: 2,
      name: "Dr. Mahuya Hom Choudhury",
      title: "Guest of Honour",
      affiliation:
        "Honourable Vice-Chancellor, University of Engineering & Management, Kolkata, India",
      image: "https://i1.rgstatic.net/ii/profile.image/278866955390985-1443498471176_Q512/Mahuya-Hom-Choudhury-2.jpg",
      linkedIn: "https://www.linkedin.com/in/dr-mahuya-hom-choudhury-4818a227/?originalSubdomain=in",
      shortBio:
        "Senior Scientist and Nodal Officer in Patent Information Centre, West Bengal State Council of Science & Technology (WBSCST), Department of Science & Technology and Biotechnology (DSTBT) , Govt. of West Bengal.",
      fullBio:
        "Dr. Mahuya Hom Choudhury is Scientist C(Senior Scientist) and Nodal Officer in Patent Information Centre, West Bengal State Council of Science & Technology (WBSCST), Department of Science & Technology (DST) and Biotechnology , Govt. of West Bengal. She graduated in Chemistry from Calcutta University and did his B.Tech and Integrated Ph.D (Engg.) from Jadavpur .University. She holds Ph.D in Engg. (Food Technology and Biochemical Engg.) from Jadavpur University.She is the Coordinator of G.I project of West Bengal and Nodal Officer, coordinator of Patent Information Centre, WBSCST,DST-GoWB. She coordinated filing of 24 G.Is of the State, registration of 17 G.Is, 92 G.I authorised user protection special mention Banglar Rasogolla. She is registered Patent and Trademark Agent (Attorney) and facilitated filing of more than 150 patents; she was also associated with plant variety protection of 24 rice varieties of the state, mentored 30 start-ups of the state. She is engaged with the IPR activities of the state for last 22 years in Patent Information Centre, West Bengal State Council of Science & Technology. Patent Information Centre of West Bengal is being designated as Category I centre in all over India among 26 State PIC under her leadership. She is engaged with Department of Biotechnology and Molecular Biology, Kalyani University as visiting faculty and is a member of State Biodiversity Board, advisor of Intellectual Property Facilitation programme of MSME, GoI, Advisory member of Innovation Council of Jadavpur University, Member in Intellectual Property Facilitation Centre at Rajib Gandhi School of Intellectual Property Law, IIT-Kharagpur. She published more than 40 papers , articles , Book chapters on IPR , G.I and in the field of Biochemical Engg. in National and International Journal and owned Indian Patent on his research. She has coordinated 30 projects on Geographical Indication registration of the State, 92 authorised user protection. She also coordinated Patentability assessment of 770 projects of the state. Presently she is the coordinator of PG diploma courses on Intellectual Property Rights and Technology Business Management and Technology Development and Adaptation Centre, Department of Science and Technology and Biotechnology, Government of West Bengal.",
    },
  ];

  const speakers = [
    {
      id: 3,
      name: "Prof. Dr. Amlan Chakrabarti",
      title: "KeyNote Speaker",
      affiliation: "A.K. Choudhury School of Information Technology University of Calcutta Kolkata, India",
      image: "src/assets/images/keynotes/amlan.jpeg",
      linkedIn: "https://www.linkedin.com/in/prof-amlan-chakrabarti-7006323a",
      shortBio:
        "Prof. Dr. Amlan Chakrabarti received his doctoral degree from the...",
      fullBio:
        "Prof. Dr. Amlan Chakrabarti received his doctoral degree from the Università Ca Foscari Venezia, Italy, in 2012. He is an associate professor in the Department of Computer Science and Engineering at IIT Patna, India. Before joining IIT Patna, he served as a post-doctoral researcher at Macquarie University, Australia. He worked with the Robotics team at HASLab (University of Minho), Portugal, in 2016. Prior to his PhD, he also worked as an associate system engineer at IBM India Pvt. Ltd. from 2007 to 2008. His areas of research interest include formal methods, blockchain technology, program analysis and verification, and AI/ML.",
    },
    {
      id: 4,
      name: "Prof. Dr. Santi Prasad Maity",
      title: "KeyNote Speaker",
      affiliation: "Department of Information Technology,Indian Institute of Engineering Science and Technology, Shibpur, India",
      image: "https://www.iiests.ac.in/assets/images/faculty/64cfb3c37f802spmaity1.jpg",
      linkedIn: "https://www.linkedin.com/in/prof-santi-prasad-maity-123456789",
      shortBio: "Prof. Santi Prasad Maity has a broad and impactful...",
      fullBio:
        "Prof. Santi Prasad Maity has a broad and impactful research portfolio spanning wireless communication, signal processing, and medical imaging. In cognitive radio networks, his work has advanced cooperative spectrum sensing, joint spectrum sensing and data transmission, and the design of energy- and spectrum-efficient systems. His contributions to MC-CDMA include power- and spectral-efficient system design, multi-user detection, and optimal power control. He has also developed innovative techniques in digital watermarking and secret sharing, using optimization, communication-theoretic and wavelet-based methods, soft computing, and VLSI architecture, with applications in access control, error concealment, and reversible watermarking. In the domain of compressed sensing, he has addressed image reconstruction, segmentation, and efficient transmission over radio channels, employing LDPC and MIMO frameworks. Furthermore, Prof. Santi Prasad Maity has contributed to biomedical imaging, particularly in diabetic retinopathy, focusing on vessel extraction, lesion detection, and stage classification of the disease.",
    },
    {
      id: 5,
      name: "Prof. Dr. Raju Halder",
      title: "KeyNote Speaker",
      affiliation: "Associate Professor, Department of Computer Science and Engineering,Indian Institute of Technology Patna",
      image: "https://www.iitp.ac.in/~planrlab/_static/people/halder.jpg",
      linkedIn: "https://www.linkedin.com/in/raju-halder-03623816/",
      shortBio: "Prof. Santi Prasad Maity has a broad and impactful...",
      fullBio:
        "Raju Halder received his doctoral degree from the Università Ca Foscari Venezia, Italy, in 2012. He is an associate professor in the Department of Computer Science and Engineering at IIT Patna, India. Before joining IIT Patna, he served as a post-doctoral researcher at Macquarie University, Australia. He worked with the Robotics team at HASLab (University of Minho), Portugal, in 2016. Prior to his PhD, he also worked as an associate system engineer at IBM India Pvt. Ltd. from 2007 to 2008. His areas of research interest include formal methods, blockchain technology, program analysis and verification, and AI/ML.",
    },
    {
      id: 6,
      name: "Prof. Dr. Anirban Mukhopadhyay",
      title: "KeyNote Speaker",
      affiliation: "Associate Professor, Department of Computer Science and Engineering, Kalyani University",
      image: "https://klyuniv.ac.in/wp-content/uploads/facultyprofiledir/1649091593-Anirban_photo_large.png",
      linkedIn: "https://www.anirbanm.in",
      shortBio: "Prof. Santi Prasad Maity has a broad and impactful...",
      fullBio:
        "Dr. Anirban Mukhopadhyay holds a Ph.D. in Engineering with a specialization in Computer Science from Jadavpur University, Kolkata, India, awarded in 2009. His doctoral research focused on Algorithms for Data Clustering: Application to Knowledge Discovery. He earned his Masters degree in Computer Science and Engineering from Jadavpur University in 2004, graduating with First Class and securing the First Rank. Prior to that, he completed his Bachelor of Engineering in Computer Science and Engineering from the National Institute of Technology (formerly Regional Engineering College), Durgapur, India, in 2002, with First Class Honors and achieved the Fifth Rank in his class.",
    },
    
  ];

  const renderCard = (person) => (
    <div key={person.id} className="speaker-card">
      <div className="speaker-image">
        <img src={person.image} alt={person.name} />
      </div>

      <div className="speaker-content">
        <h3 className="speaker-name">{person.name}</h3>
        <p className="speaker-title">{person.title}</p>
        <p className="speaker-affiliation">{person.affiliation}</p>

        <p className="speaker-bio">
          {expandedSpeaker === person.id ? person.fullBio : person.shortBio}
        </p>

        <div className="speaker-actions">
          <button
            className="btn btn-outline btn-sm"
            onClick={() => toggleExpand(person.id)}
          >
            {expandedSpeaker === person.id ? (
              <>
                <ChevronUp size={16} />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                Read More
              </>
            )}
          </button>

          <a
            href={person.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-wrapper">
      <Header />

      <main className="speakers-page">
        {/* Chief Guest Section */}
        <div className="container">
          <h1 className="page-title">Chief Guest and Guest of Honour</h1>
          <div className="speakers-grid">{chiefGuests.map(renderCard)}</div>
        </div>

        <hr className="section-divider" />

        {/* Keynote Speakers Section */}
        <div className="container">
          <h1 className="page-title">Keynote Speakers</h1>
          <div className="speakers-grid">{speakers.map(renderCard)}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KeynoteSpeakers;
