import { Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Authors.css';
import downloadIcon from "../assets/icons/download.svg";


const Submissions = () => {
  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="authors-page">
        <div className="container">
          <h1 className="page-title">Submission Guidelines</h1>
          
          <div className="content-box">
            <h3 className="content-heading">Guidelines For Submission:</h3>
            <p className="content-text">
              Prospective authors are invited to submit original technical papers that have not been submitted 
              elsewhere for publication (copyright infringement issues will be the author's responsibility) 
              in the <b>AdComSys 2025</b> Conference Proceedings. Papers must be written in good english.
              <b>The Conference Management Toolkit</b> (CMT) portal will be used for the submission link. 
              All manuscripts will be double-blind reviewed for technical content and scope by a technical 
              program committee. The authors must submit the paper without including their names and affiliation. 
              The organizers of AdComSys 2024 are strict about Plagiarism. The submitting authors should avoid 
              the deliberate or reckless representation of another’s words, thoughts, or ideas as one’s own 
              without attribution in connection with submitting academic work, whether graded or otherwise. 
              The Technical Program Committee will check the plagiarism level of all the submitted papers 
              to ensure the originality of the content using Turnitin (Turnitin) plagiarism checking software, 
              and any paper having a similarity score above 15% will not be processed further. 
              <b> Authors SHOULD NOT use generative AI and AI-assisted technologies in the writing process.</b>
            </p>
            
            <h3 className="content-heading">In order to submit the paper at AdComSys:</h3>
            <p className="content-list">
              Prospective authors are invited to submit manuscripts at <span style={{ color: "blue", fontWeight: "semibold" }}> 
                <a href="https://cmt3.research.microsoft.com/AdComSys2025">https://cmt3.research.microsoft.com/AdComSys2025</a> </span> 
                reporting original unpublished research and recent developments in the topics related to the SCOPE of the conference.
              <span style={{ color: "red", fontWeight: "bold" }}>The <i>Microsoft CMT</i> service was used for 
              managing the peer-reviewing process for this conference. This service was provided for free by Microsoft 
              and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</span>
            </p>
            
            <h3 className="content-heading">Camera Ready Submission:-</h3>
            <p className="content-list">
              The authors of the accepted papers are instructed to download the 
              template for the preparation of camera ready papers from the below-mentioned link:
              <ul>
                <li>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    Word template for the Manuscript submission:
                    <a
                      href="/src/assets/docs/splnproc2311.docm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={downloadIcon}
                        alt="Download Template"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </a>
                  </span>
                </li>
              <li>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  Latex template for the Manuscript submission:
                  <a
                    href="/src/assets/docs/LaTeX2e+Proceedings+Templates+download.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={downloadIcon}
                      alt="Download Template"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </a>
                </span>  
              </li>
              <li>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  The Springer guidelines for Conference Proceedings:
                  <a
                    href="/src/assets/docs/SPLNPROC-Technical-Instructions.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={downloadIcon}
                      alt="Download Template"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </a>
                </span>  
              </li>
              </ul>
              
            </p>
            
            <h3 className="content-heading">Mode of Presentation:-</h3>
            <p className="content-text">
              Mode of presentation AdComSys 2025 will be held in HYBRID MODE where authors shall present their 
              papers either in physical mode at the conference venue or through ONLINE as per their preference 
              and convenience. However, all matters related to publication and indexing will remain unchanged. 
              <b> Without registration and attending the conference online or offline, the organizing committee will 
              not include his/her paper in the book.</b><br />
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  PPT template for AdComSys 2026:-
                  <a
                    href="https://media.uemkcstcsit.in/adcomsys_2025_template.pptx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={downloadIcon}
                      alt="Download Template"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </a>
                </span>
            </p>
            
            <h3 className="content-heading">Submission Criteria:-</h3>
              <ul className="content-list">
                <li><span>Regular Paper 12 pages minimum and 14 pages maximum.</span></li>
                <li><span>To add more pages, an amout of ₹ 500 per page shall be charged upto 17 pages. 
                  THE MANUSCRIPTS HAVING MORE THAN 17 PAGES WILL BE DESK REJECTED.</span></li>
                <li><b>There is no provision for submitting short papers and posters.</b> <b><span style={{ color: "red", fontWeight: "semibold" }}>(4 – 6 pages)</span></b></li>
                <li><span>Regular papers should present novel perspectives within the general scope of the conference.</span></li> 
                <li>Without registration and attending the conference online or offline, the organizing committee will not include his/her paper in the conference proceedings.</li>
              </ul>
            
            
            <div className="action-center">
              <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FAdComSys2025" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                <Send size={24} />
                Click Here to Submit
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Submissions;
