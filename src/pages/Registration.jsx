import { DollarSign, CreditCard } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './Registration.css';

const Registration = () => {
  const fees = [
    { category: 'Indian Authors (Early Bird)', inr: '₹5,000', usd: '$100' },
    { category: 'Indian Authors (Regular)', inr: '₹6,500', usd: '$130' },
    { category: 'Foreign Authors (Early Bird)', inr: '₹15,000', usd: '$300' },
    { category: 'Foreign Authors (Regular)', inr: '₹18,000', usd: '$360' },
    { category: 'Attendees Only (Indian)', inr: '₹2,500', usd: '$50' },
    { category: 'Attendees Only (Foreign)', inr: '₹7,500', usd: '$150' }
  ];

  return (
    <div className="page-wrapper">
      <Header />
      
      <main className="registration-page">
        <div className="container">
          <h1 className="page-title">
            <DollarSign size={40} className="inline-icon" />
            Registration Information
          </h1>
          
          <div className="content-box">
            <h3 className="content-heading">Registration Guidelines</h3>
            <ul className="content-list">
              <li>Registration is mandatory for all accepted papers</li>
              <li>At least one author must register for each accepted paper</li>
              <li>Early bird registration deadline: February 28, 2025</li>
              <li>Regular registration deadline: March 10, 2025</li>
              <li>Registration includes conference kit, meals, and proceedings</li>
              <li>Certificates will be provided to all registered participants</li>
            </ul>
            
            <h3 className="content-heading">Registration Fees</h3>
            <div className="fees-table-wrapper">
              <table className="fees-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>INR</th>
                    <th>USD</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((fee, index) => (
                    <tr key={index}>
                      <td className="category-cell">{fee.category}</td>
                      <td className="fee-cell">{fee.inr}</td>
                      <td className="fee-cell">{fee.usd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="note-box">
              <p className="note-text">
                <strong>Note:</strong> All fees are inclusive of 18% GST for Indian authors. 
                Foreign authors are exempt from GST.
              </p>
            </div>
            
            <h3 className="content-heading">Author Registration Instructions</h3>
            <ol className="content-list">
              <li>Complete the online registration form</li>
              <li>Make payment through the designated payment gateway</li>
              <li>Upload proof of payment and paper acceptance</li>
              <li>Wait for confirmation email with registration ID</li>
              <li>Submit camera-ready paper using your registration ID</li>
            </ol>
            
            <div className="action-center">
              <a href="https://registration-portal.example.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                <CreditCard size={24} />
                Register Now
              </a>
            </div>
            
            <h3 className="content-heading">Payment Information for Indian Authors</h3>
            <div className="payment-info-box">
              <h4>Online Payment</h4>
              <p>Pay directly through our secure payment gateway using Credit Card, Debit Card, UPI, or Net Banking.</p>
              
              <h4>Bank Transfer (NEFT/RTGS)</h4>
              <p>For bank transfer, please send payment proof to <a href="mailto:payment@adcomsys2025.org">payment@adcomsys2025.org</a></p>
            </div>
            
            <h3 className="content-heading">Payment Information for Foreign Authors</h3>
            <div className="payment-info-box">
              <h4>International Wire Transfer</h4>
              <p>Foreign authors can make payment through international wire transfer. Details will be provided after registration.</p>
              
              <h4>Online Payment</h4>
              <p>International credit/debit cards are accepted through our secure payment gateway.</p>
            </div>
            
            <h3 className="content-heading">Bank Account Details</h3>
            <div className="bank-details-box">
              <table className="bank-table">
                <tbody>
                  <tr>
                    <td><strong>Account Name:</strong></td>
                    <td>AdComSys 2025 Conference</td>
                  </tr>
                  <tr>
                    <td><strong>Bank Name:</strong></td>
                    <td>[Bank Name Placeholder]</td>
                  </tr>
                  <tr>
                    <td><strong>Account Number:</strong></td>
                    <td>[Account Number Placeholder]</td>
                  </tr>
                  <tr>
                    <td><strong>IFSC Code:</strong></td>
                    <td>[IFSC Code Placeholder]</td>
                  </tr>
                  <tr>
                    <td><strong>SWIFT Code:</strong></td>
                    <td>[SWIFT Code Placeholder]</td>
                  </tr>
                  <tr>
                    <td><strong>Branch:</strong></td>
                    <td>[Branch Name Placeholder]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Registration;
