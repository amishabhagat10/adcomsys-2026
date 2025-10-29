import { DollarSign, CreditCard } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Registration.css';

const Registration = () => {
  const fees = [
    { category: 'Regular Author (UG/PG)', inr: '₹5,500', usd: '$150', regularinr: '₹8000', regularusd: '$300' },
    { category: 'Regular Author Academician,PhD Scholars', inr: '₹6,000', usd: '$130', regularinr: '₹7000', regularusd: '$250' },
    { category: 'Regular Author from Industry', inr: '₹8,000', usd: '$250', regularinr: '₹9000', regularusd: '$300' },
    { category: 'Only Attending or Accompanying', inr: '₹3,500', usd: '$130', regularinr: '₹3500', regularusd: '$130' }
  ];

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="registration-page">
        <div className="container">
          <h1 className="page-title">
            <DollarSign size={40} className="inline-icon" />
            Registration Policy
          </h1>
          
          <div className="content-box">
            <p>According to the AdComSys 2025 conference registration policy, after obtaining the formal acceptance by e-mail, at least one author of each paper must complete regular registration formalities including payment of full registration fees.</p>
            
            <h3 className="content-heading">Registration Fees</h3>
            <div className="fees-table-wrapper">
              <table className="fees-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>India/ SAARC countries (Early Bird) (INR)*</th>
                    <th>Foreign Countries (Early Bird) (USD)</th>
                    <th>India/ SAARC countries (Regular) (INR)*</th>
                    <th>Foreign Countries (Regular) (USD)*</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((fee, index) => (
                    <tr key={index}>
                      <td className="category-cell">{fee.category}</td>
                      <td className="fee-cell">{fee.inr}</td>
                      <td className="fee-cell">{fee.usd}</td>
                      <td className="fee-cell">{fee.regularinr}</td>
                      <td className="fee-cell">{fee.regularusd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="note-box">
              <p className="note-text">
                <strong>Note:</strong> All rates are exclusive of GST and other monetary transaction charges..
              </p>
            </div>
            <br />
            <p>Final submissions can only be uploaded with regular registration and at least one author of each paper must register at the regular rate.</p><br />
            <p>This fee is only applicable for single author from each paper who will be coming to present his/her paper in the respective venue of the conference. Necessary details for the registration process will be intimidated to the corresponding authors of accepted papers through email.</p><br />
            <p>If an author has got more than one accepted papers, each paper has also to be registered.</p>


            <h3 className="content-heading">Payment Information for Indian Authors</h3>
            <div className="payment-info-box">
              <p>To register your paper, please <a href="https://uem.edu.in/uem-kolkata/adcomsys-2025/" style={{color:"#007bff",textDecoration:"underline"}} target="_blank" rel="noopener noreferrer"><b>click here</b></a></p>
              
              <p>
                After your paper get registered, the author will get an auto-generated e-mail, the auto-generated e-mail consist of an invoice having the amount you have paid to register your paper. Author has to e-mail that invoice to conference e-mail id (adcomsys uem.edu.in) along with their paper id and paper title. The file format should be typically in pdf format. The file name must be in this format:123_ Payment_Receipt.pdf. Where 123 is your <a href="https://cmt3.research.microsoft.com" style={{color:"#007bff",textDecoration:"underline"}} target="_blank" rel="noopener noreferrer">https://cmt3.research.microsoft.com</a> paper number (contained in the acknowledgement message to your submission). For example: if the submission ID is 87 and corresponding author name is Dr. Alex Simpson, then file name should be 87_Payment_Receipt.pdf If any author will not send the invoice to the conference email-id then their registration will not be granted or treated as invalid.
              </p>
            </div>
            
            <h3 className="content-heading">Payment Information for Foreign Authors</h3>
            <div className="payment-info-box">
              <p>Foreign authors are requested to pay the registration fees using the following details:</p>
              
              <div className="bank-details-box">
              <table className="bank-table">
                <tbody>
                  <tr>
                    <td><strong>Name of the Beneficiary: </strong></td>
                    <td>"University of Engineering and Management, Kolkata"</td>
                  </tr>
                  <tr>
                    <td><strong>Name of the Bank: </strong></td>
                    <td>Indian Overseas Bank, Sector - V, Salt Lake Branch</td>
                  </tr>
                  <tr>
                    <td><strong>Beneficiary A/c. No: </strong></td>
                    <td>164201000001924 (Savings A/c.)</td>
                  </tr>
                  <tr>
                    <td><strong>IFSC Code:</strong></td>
                    <td>IOBA0001642</td>
                  </tr>
                  <tr>
                    <td><strong>SWIFT Code:</strong></td>
                    <td>IOBAINBB893</td>
                  </tr>
                  
                </tbody>
              </table>
              
            </div>
            <ul>
                <li>The author has to email the TRANSACTION ID to the conference email ID (adcomsys@uem.edu.in) along with their paper ID and paper title.</li><br />
                <li>The file format of the transaction ID proof should be typically in pdf format.</li><br />
                <li>The file name must be in this format:123_ Payment_Receipt.pdf. Where 123 is your https://cmt3.research.microsoft.com/paper number (contained in the acknowledgement message to your submission).</li><br />
                <li>For example, if the submission ID is 87 and the corresponding author name is Dr. Alex Simpson, then the file name should be 87_Payment_Receipt.pdf. If any author does not send the invoice to the conference email ID, then their registration will not be granted and will be treated as invalid.</li><br />
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Registration;
