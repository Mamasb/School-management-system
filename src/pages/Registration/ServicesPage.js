import React, { useState } from 'react';
import './ServicesPage.css';

function ServicesPage({ userFullName }) {
  const [basicFees] = useState({
    tuition: 10000,
    uniform: 2000,
    activity: 500
  });

  const [optionalFees, setOptionalFees] = useState({
    transport: 0,
    admission: 0,
    interview: 0
  });

  const [totalAmount, setTotalAmount] = useState(basicFees.tuition + basicFees.uniform + basicFees.activity);

  const handleOptionalChange = (e) => {
    const { name, value } = e.target;
    setOptionalFees(prev => {
      const newFees = { ...prev, [name]: parseInt(value) || 0 };
      const total = basicFees.tuition + basicFees.uniform + basicFees.activity + Object.values(newFees).reduce((acc, curr) => acc + curr, 0);
      setTotalAmount(total);
      return newFees;
    });
  };

  const [showInvoice, setShowInvoice] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState(null);

  const handleCheckout = () => {
    setInvoiceDetails({
      userFullName,
      fees: { ...basicFees, ...optionalFees },
      totalAmount
    });
    setShowInvoice(true);
  };

  const handleEditInvoice = () => {
    setShowInvoice(false);
  };

  return (
    <div className="services-page">
      <div className="container">
        <h2 className="welcome-message">Welcome, {userFullName}!</h2>
        <h3 className="page-title">Here's your personalized service page for Baby Class</h3>
        <p className="intro-text">We are excited to have you join us!</p>
        <section className="fee-structure">
          <p>Below is the fee structure:</p>
          <div className="fee-list">
            <div className="fee-item">
              <span className="fee-label">Tuition Fee:</span>
              <span className="fee-amount">10,000 KSH</span>
            </div>
            <div className="fee-item">
              <span className="fee-label">Uniform Fee:</span>
              <span className="fee-amount">2,000 KSH</span>
            </div>
            <div className="fee-item">
              <span className="fee-label">Activity Fee:</span>
              <span className="fee-amount">500 KSH</span>
            </div>

            <h4 className="optional-title">Optional Fees</h4>
            <div className="optional-fees">
              <label>
                Transport Fee:
                <input
                  type="number"
                  name="transport"
                  value={optionalFees.transport || ''}
                  onChange={handleOptionalChange}
                />
              </label>
              <label>
                Admission Fee:
                <input
                  type="number"
                  name="admission"
                  value={optionalFees.admission || ''}
                  onChange={handleOptionalChange}
                />
              </label>
              <label>
                Interview Fee:
                <input
                  type="number"
                  name="interview"
                  value={optionalFees.interview || ''}
                  onChange={handleOptionalChange}
                />
              </label>
            </div>
          </div>
          <div className="total">
            <h3>Total Amount: {totalAmount} KSH</h3>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
        </section>
        
        {showInvoice && invoiceDetails && (
          <div className="invoice">
            <h3>Invoice for {invoiceDetails.userFullName}</h3>
            <ul>
              {Object.keys(invoiceDetails.fees).map((fee) => (
                <li key={fee}>
                  <strong>{fee.charAt(0).toUpperCase() + fee.slice(1)}:</strong> {invoiceDetails.fees[fee]} KSH
                </li>
              ))}
            </ul>
            <h4>Total Amount: {invoiceDetails.totalAmount} KSH</h4>
            <button onClick={handleEditInvoice} className="edit-button">Edit Invoice</button>
            <button className="confirm-button">Confirm and Proceed</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicesPage;
