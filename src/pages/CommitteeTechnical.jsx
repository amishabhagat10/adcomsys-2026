import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Committee.css';

const CommitteeTechnical = () => {
  const members = [
    { name: 'Prof. (Dr.) Rajat Kumar Pal', affiliation: 'University of Calcutta, Kolkata, India' },
    { name: 'Prof. (Dr.) Mokbul Morshed Ahmad', affiliation: 'Asian Institute of Technology, Thailand' },
    { name: 'Prof. (Dr.) Nabendu Chaki', affiliation: 'University of Calcutta, India' },
    { name: 'Prof. (Dr.) Mohd Syuhaimi Ab Rahman', affiliation: 'National University of Malaysia, Malaysia' },
    { name: 'Prof. (Dr.) Rajitha B', affiliation: 'Motilal Nehru National Institute of Technology Allahabad, Prayagraj, India' },
    { name: 'Prof. (Dr.) Shirley Devapriya Dewasurendra', affiliation: 'University of Peradeniya, Sri Lanka' },
    { name: 'Prof. (Dr.) Anirban Mukhopadhyay', affiliation: 'University of Kalyani, Kalyani, India' },
    { name: 'Prof. (Mr.) Bidit Pakrashi', affiliation: 'Comcast, USA' },
    { name: 'Prof. (Dr.) Debashish De', affiliation: 'Maulana Abul Kalam Azad University of Technology, West Bengal' },
    { name: 'Prof. (Dr.) Sheng-Lung Peng', affiliation: 'National Dong Hwa University, Hualien, Taiwan' },
    { name: 'Prof. (Dr.) Indrajit Banerjee', affiliation: 'Indian Institute of Engineering Science and Technology, Shibpur, India' },
    { name: 'Prof. (Dr.) Shivendra Shivani', affiliation: 'Thapar University, Patiala' },
    { name: 'Prof. (Dr.) Ekramul Hamid', affiliation: 'Thapar University, Patiala' },
    { name: 'Prof. (Dr.) Chintan Kumar Mandal', affiliation: 'Jadavpur University' },
    { name: 'Prof. (Dr.) Media Anugerah Ayu', affiliation: 'Sampoerna University, Indonesia' },
    { name: 'Prof. (Dr.) Santi Prasad Maity', affiliation: 'Indian Institute of Engineering Science and Technology, Shibpur, Indiaa' },
    { name: 'Prof. (Dr.) Fatima Isiaka', affiliation: 'Sheffield Halam University, United Kingdom' },
    { name: 'Prof. (Dr.) Peter Loh Kok Keong', affiliation: 'Nanyang Technological University, Singapore' },
    { name: 'Prof. (Dr.) Asish Kumar Mukhopadhyay', affiliation: 'Professor Emeritus, IET, Bundelkhand University, Jhansi, U.P' },
    { name: 'Prof. (Dr.) Apurba Sarkar', affiliation: 'Indian Institute of Engineering Science and Technology, Shibpur, India' },
    { name: 'Prof. (Dr.) Jaya Sil', affiliation: 'Indian Institute of Engineering Science and Technology, Shibpur, India' },
    { name: 'Prof. (Dr.) Hamid Abdullah Jalab al-Tulea', affiliation: 'University of Malaya, Kuala Lumpur, Malaysia' },
    { name: 'Prof. (Dr.) Chang-Biau Yang', affiliation: 'University of Malaya, Kuala Lumpur, Malaysia' },
    { name: 'Prof. (Dr.) Surajit Kumar Roy', affiliation: 'Indian Institute of Engineering Science and Technology, Shibpur, India' },
    { name: 'Prof. (Dr.) Lei Zhu', affiliation: 'National Renewable Energy Laboratory, USA' },
    { name: 'Prof. (Dr.) Nidul Sinha', affiliation: 'National Institute of Technology, Silchar, Assam, India' },
    { name: 'Prof. (Dr.) Annapa B', affiliation: 'National Institute of Technology Karnataka, Surathkal, India' },
    { name: 'Prof. (Dr.) Malay Kule', affiliation: 'Indian Institute of Engineering Science and Technology, Shibpur, India' },
    { name: 'Prof. (Dr.) Sankhayan Choudhury', affiliation: 'University of Calcutta, India' },
    { name: 'Prof. (Dr.) Sunirmal Khatua', affiliation: 'University of Calcutta, India' },
    { name: 'Prof. (Dr.) Pritha Banerjee', affiliation: 'University of Calcutta, India' },
    { name: 'Prof. (Dr.) Rajib Das', affiliation: 'University of Calcutta, India' },
    { name: 'Prof. (Dr.) Bansibadan Maji', affiliation: 'National Institute of Technology, Durgapur, India' },
    { name: 'Prof. (Dr.) Tanvi Agrawal', affiliation: 'Indian Institute of Technology, Mumbai' },
    { name: 'Prof. (Dr.) Sahil Neelam', affiliation: 'Punjab Institute of Technology Kapurthala, India' },
    { name: 'Prof. (Dr.) Parag Kumar Guha Thakurta', affiliation: 'National Institute of Technology Durgapur, India' },
    { name: 'Prof. (Dr.) Abdulnasir Hossen', affiliation: 'Sultan Qaboos University, Oman' },
    { name: 'Prof. (Dr.) Padmalochan Bera', affiliation: 'Indian Institute of Technology, Bhubaneswar' },
    { name: 'Prof. (Dr.) Himadri Shekhar Dutta', affiliation: 'Kalyani Govt. Engineering College' },
    { name: 'Prof. (Dr.) Ahmad Zaidi bin Abdullah', affiliation: 'Universiti Malaysia Perlis, Malaysia' },
    { name: 'Prof. (Dr.) Roy Eagleson', affiliation: 'Western University, Canada' },
    { name: 'Prof. (Dr.) Soumya Sen', affiliation: 'University of Calcutta, India' },
    { name: 'Prof. (Dr.) K.K. Shukla', affiliation: 'Indian Institute of Technology, Banaras Hindu University, India' },
    { name: 'Prof. (Dr.) Julia Johnson', affiliation: 'Laurentian University, Sudbury, Ontario, Canada' },
    { name: 'Prof. (Dr.) Rinki Sharma Ramaiah', affiliation: 'University of Applied Sciences, Karnataka, India' },
    { name: 'Prof. (Dr.) Tapas Si', affiliation: 'University of Engineering & Management, Jaipur' },
    { name: 'Prof. (Dr.) Normi Sham bt. Awang Abu Bakar', affiliation: 'International Islamic University, Malaysia' },
    { name: 'Prof. Adrian Schmidt', affiliation: 'Burman University, Canada' },
    { name: 'Prof. (Dr.) Ke-Lin Du', affiliation: 'Concordia University, Montreal, Canada' },
    { name: 'Prof. (Dr.) Hamed Sadat Mehrizi', affiliation: 'Qazvin Azad University, Iran' },
    { name: 'Prof. (Dr.) Rosli Bin Besar', affiliation: 'Multimedia University, Malaysia' },
    { name: 'Prof. (Dr.) Saradindu Panda', affiliation: 'Narula Institute of Technology Kolkata, India' },
    { name: 'Prof. (Dr.) Nirnay Ghosh', affiliation: 'Indian Institute of Engineering Science and Technology, Shibpur, India' },
    { name: 'Prof. (Dr.) Indranil Chakrabarty', affiliation: 'International Institute of Information Technology, Hyderabad' },
    { name: 'Prof. (Dr.) Arijit Banerjee', affiliation: 'Federated Wireless, USA' },
    { name: 'Prof. (Dr.) Konika Das Bhattacharya', affiliation: 'Indian Institute of Engineering Science and Technology, Shibpur, India' },
    { name: 'Prof. (Mr.) Sanjay Saha', affiliation: 'SAMSUNG, India' },
    { name: 'Prof. (Dr.) Rudra Pratap Ojha', affiliation: 'G. L. Bajaj Institute of Technology and Management, Greater Noida, India' },
    { name: 'Prof. (Dr.) Soumya Ranjan Mishra', affiliation: 'School of Computer Engineering, KIIT University, Bhubaneswar, India' },
    { name: 'Prof. (Dr.) Dhananjoy Bhakta', affiliation: 'Indian Institute of Information Technology Ranchi, India' },
    { name: 'Prof. (Dr.) Mandeep K. Chawla', affiliation: 'MCM DAV College for Women, Chandigarh, India' },
    { name: 'Prof. (Dr.) Karl F. Bohringer', affiliation: 'University of Washington, USA' },
    { name: 'Prof. (Dr.) Gitosree Khan', affiliation: 'BP Poddar Institute of Management and Technology, Kolkata, India' },
    { name: 'Prof. (Dr.) Chandan Kumar', affiliation: 'Department of Electrical Engineering, IIEST, Shibpur' },
    { name: 'Prof. (Dr.) Anirban Mitra', affiliation: 'Department of Computer Science, Amity University, Kolkata, India' },
    { name: 'Prof. (Dr.) Samya Muhuri', affiliation: 'Thapar Institute of Engineering and Technology, Patiala, India' },
    { name: 'Prof. (Dr.) Kousik Dasgupta', affiliation: 'Kalyani Government Engineering College, Kalyani, Nadia, West Bengal, India' },
    { name: 'Prof. (Dr.) Samir Kr Borgohain', affiliation: 'National Institute of Technology, Silchar, Assam, India' },
    { name: 'Prof. (Dr.) Sahil Neelam', affiliation: 'Punjab Institute of Technology Kapurthala, India' },
    { name: 'Prof. (Dr.) Rik Das', affiliation: 'Xavier Institute of Social Service, India' },
    { name: 'Prof. (Dr.) Simon Stieber', affiliation: 'University of Augsburg, UNA' },
    { name: 'Prof. (Dr.) Abdulnasir Hossen', affiliation: 'Sultan Qaboos University, Oman' },
    { name: 'Prof. (Dr.) Nassir Jabir Farhan AL-Khafaji', affiliation: 'Technical Institute of Nasiriyah, Iraq' },
    { name: 'Prof. (Dr.) Bhaskar Karn', affiliation: 'Birla Institute of Technology, Mesra, India' },
    { name: 'Prof. (Dr.) Dhruba Jyoti Bora', affiliation: 'Madanapalle Institute of Technology, Chittoor, Andhra Pradesh, India' },
    { name: 'Prof. (Dr.) Debashree Devi', affiliation: 'Indian Institute of Information Technology, Guwahati, Assam, India' },
    { name: 'Prof. (Mr.) Subham Bid', affiliation: 'Associate at CB Tech, Deutsche Bank, Pune, India' },
    { name: 'Prof. (Ms.) Shirsha Chakraborty', affiliation: 'Senior Software Engineer, Marsh Mclennan, USA' },
    { name: 'Prof. (Dr.) Sandip Das', affiliation: 'Geetanjali Institute of Technical Studies, Udaipur, Rajasthan, India' },
    { name: 'Prof. (Dr.) Riya Sen', affiliation: 'Geetanjali Institute of Technical Studies, Udaipur, Rajasthan, India' },
    { name: 'Prof. (Dr.) Sumana Kundu', affiliation: 'Dr. B. C. Roy Engineering College, Durgapur, India' },
    { name: 'Prof. (Dr.) Ravi Kant Kumar', affiliation: 'SRM University, Andhra Pradesh, India' },
    { name: 'Prof. (Dr.) Prabhat Kumar Upadhyay', affiliation: 'Birla Institute of Technology, India' },
    { name: 'Prof. (Dr.) Ayan Banerjee', affiliation: 'Indian Institute of Engineering Science and Technology, Shibpur, India' },
    { name: 'Prof. (Mr.) Shashwata Banerjee', affiliation: 'HCL Technologies' },
    { name: 'Prof. (Ms.) Rishmita Saha', affiliation: 'Capgemini' },
    { name: 'Prof. (Mr.) Aritra Dutta', affiliation: 'Accenture' },
    { name: 'Prof. (Mr.) Aninda Sankar Shukla', affiliation: 'Mindshare Global' },
    { name: 'Prof. (Dr.) Chandan Kumar', affiliation: 'Department of Electrical Engineering, IIEST, Shibpur' },
    { name: 'Prof. (Dr.) Konika Das (Bhattacharya)', affiliation: 'Professor of Department of Electrical Engineering, IIEST, Shibpur' },
    { name: 'Prof. (Dr.) Sovan Dalai', affiliation: 'Professor, Electrical Engineering, Jadavpur University' },
    { name: 'Prof. (Dr.) Sivaji Chakrabortyn', affiliation: 'Professor, Jadavpur University' },
    { name: 'Prof. (Dr.) Monojit Mitra', affiliation: 'Professor Electronics and Telecommunication Engineering' },
    { name: 'Prof. (Dr.) Hiranmay Saha', affiliation: 'Visiting Professor, School of Advanced Materials, Green Energy and Sensor Systems, IIEST, Shibpur' },
    { name: 'Prof. (Dr.) Partha Chaudhuri', affiliation: 'Visiting Professor, School of Advanced Materials, Green Energy and Sensor Systems, IIEST, Shibpur' },
    { name: 'Prof. (Dr.) Syed Minhaz Hossain', affiliation: 'Associate Professor, Department of Physics, IIEST, Shibpur' },
    { name: 'Prof. (Dr.) Sumita Mukhopadhyay', affiliation: 'Assistant Professor, School of Advanced Materials, Green Energy and Sensor Systems, IIEST, Shibpur' },
    { name: 'Prof. (Dr.) Sujit K. Biswas', affiliation: 'Dean (Academic) & Professor, Dept. of Electrical Engg., St. Thomas’ College of Engineering and Technology, Kolkata, India and Former Professor & Head, Dept. of Electrical Engg., Jadavpur University' },
    { name: 'Prof. (Dr.) Samarjit Sengupta', affiliation: 'Ex-Professor (Applied Physics Department), University of Calcutta and Visiting Professor, School of Advanced Materials, Green Energy and Sensor Systems, IIEST Shibpur' },
    { name: 'Prof. (Dr.) Siddhartha Sankar Thakur', affiliation: 'Professor, Department of Electrical Engineering, NIT Durgapur' },
    { name: 'Prof. (Dr.) Pradip Kumar Sadhu', affiliation: 'Professor (HAG) and Ex-Head, Department Of Electrical Engineering, IIT (ISM), DHANBAD' },
    { name: 'Prof. (Dr.) Prithwiraj Purkait', affiliation: 'Professor, Department of Power Engineering, Jadavpur University' },
    { name: 'Prof. (Dr.) Ankush Bag', affiliation: 'Assistant Professor, Department of Electronics and Electrical Engineering, Indian Institute of Technology Guwahati' },
    { name: 'Prof. (Dr.) Pritam Kumar Das', affiliation: 'Associate Professor, Department of Mechanical Engineering, Aditya University' },
    { name: 'Prof. (Dr.) Mithun Das', affiliation: 'Assistant Professor, School of Nuclear Studies, Jadavpur University' },
    { name: 'Prof. (Dr.) Arindam K. Sil', affiliation: 'Associate Professor, Department of Electrical Engineering, Jadavpur University' },
    { name: 'Prof. (Dr.) Sajjan Kumar', affiliation: 'Assistant Professor, Department of Electrical and Electronics Engineering, SSN College of Engineering, Chennai' },
    { name: 'Prof. (Dr.) Suman Chakraborty', affiliation: 'Professor, Department of Mechanical Engineering & Sir J. C. Bose National Fellow, IIT Kharagpur' },
    { name: 'Prof. (Dr.) Ranjan Gangulyy', affiliation: 'Professor, Department of Power Engineering, Jadavpur University' },
    { name: 'Prof. (Dr.) Amitava Datta', affiliation: 'Pro Vice-Chancellor, Jadavpur University' },
    { name: 'Prof. (Dr.) Niladri Chakraborty', affiliation: 'Professor, Department of Power Engineering, Jadavpur University' },
    { name: 'Prof. (Dr.) Kaustuv Kanti Ganguli', affiliation: 'Associate Professor, College of Interdisciplinary Studies in Zayed University' },
    { name: 'Prof. (Dr.) Joydeep Munshi', affiliation: 'Lead Scientist at GE Aerospace Research, AI/ML and Computer Vision group, Pennsylvania, United States' },
    { name: 'Prof. (Dr.) Amit Kumar Singh', affiliation: 'Assistant Professor, RAJKIYA ENGINEERING COLLEGE, AMBEDKAR NAGAR' },
    { name: 'Prof. (Dr.) Kedar Nath Das', affiliation: 'Associate Professor, NIT Silchar' },
    { name: 'Prof. (Dr.) Anjan Bandyopadhyay', affiliation: 'Assistant Professor, KIIT University' },
    { name: 'Prof. (Dr.) Prantosh K. Paul', affiliation: 'Assistant Professor CIS, Raiganj University' },
    { name: 'Prof. (Dr.) Souvik Pal', affiliation: 'Associate Professor, Sister Nivedita University' },
    { name: 'Prof. (Dr.) Sudip Sinha', affiliation: 'Technical Manager, The Linde Group' },
    { name: 'Prof. (Dr.) Rahul Kumar Ghosh', affiliation: 'Associate Professor, Brainware University' },
    { name: 'Prof. (Dr.) Avijit Kumar Chaudhuri', affiliation: 'Associate Professor, Brainware University' },
    { name: 'Prof. (Dr.) Bikramjit Sarkar', affiliation: 'HOD CSE, JIS College of Engineering' },
    { name: 'Prof. (Dr.) Anirban Mitra', affiliation: 'HOD CSE, Amity University Kolkata' },
    { name: 'Prof. (Dr.) Chirasree Roy Chowdhury', affiliation: 'Associate Professor, Electronics and Telecommunication Engineering' },
    { name: 'Prof. (Dr.) Ankita Pramanik', affiliation: 'Associate Professor, Electronics and Telecommunication Engineering' },
    { name: 'Prof. (Dr.) Prasun Chakrabarti', affiliation: 'Dean - Engineering and Professor CSE' },
    { name: 'Prof. Padampat Singhania', affiliation: 'University, Udaipur' },
    { name: 'Prof. (Dr.) Dilip K. Banerjee', affiliation: 'Former Pro VC, Central University of Jharkhand, Ranchi' },
    { name: 'Prof. (Dr.) Goutam Panigrahi', affiliation: 'Assistant Professor, NIT Durgapur' },
    { name: 'Prof. (Dr.) Biswapati Jana', affiliation: 'HOD Computer Science, Vidyasagar University' },
    { name: 'Prof. (Dr.) Samarjit Kar', affiliation: 'Professor, NIT Durgapur' },
    { name: 'Prof. (Dr.) Amar Kishore', affiliation: 'Assistant Professor, Magadh University' },
    { name: 'Prof. (Dr.) Jagdish Chand Bansal', affiliation: 'Associate Professor, South Asian University, New Delhi' },
    { name: 'Prof. (Dr.) Rajneesh Talwar', affiliation: 'Dean, Chitkara University' },
    { name: 'Prof. (Dr.) Pawanesh Abrol', affiliation: 'Professor and Head, Computer Science and IT, University of Jammu' },
    { name: 'Prof. (Dr.) A. Lenin Fred', affiliation: 'Principal at Mar Ephraem College of Engineering & Technology, Kanyakumari' },
    { name: 'Prof. (Dr.) Narendra Gupta', affiliation: 'Director Education, SKN Agriculture University, Rajasthan' },
    { name: 'Prof. (Dr.) G.L. Sharma', affiliation: 'Director, Sikkim Manipal Institute of Technology, Sikkim' },
    { name: 'Prof. Anjan Saha', affiliation: 'Scientist, DRDO' },
    { name: 'Prof. (Dr.) Abhishek Das', affiliation: 'Associate Professor, CSE, Aliah University, New Town, Kolkata, West Bengal' },
    { name: 'Prof. (Dr.) Anirban Chakraborty', affiliation: 'DRDO, Bangalore, Scientist C' }
  ];

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="committee-page">
        <div className="container">
          <h1 className="page-title">Technical Program Committee</h1>
          
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

export default CommitteeTechnical;
