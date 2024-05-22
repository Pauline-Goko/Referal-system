import React, { useState } from 'react';
import GirlwithLaptop from "../../assets/girlwithlaptop.jpg"
import './style.css';
const SharingApp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Referral Code:', referralCode);
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={GirlwithLaptop} alt="A girl with a laptop" />
        <h2>Welcome to Tunzaa</h2>
        <p>'Coz your friends deserves to Live Life Better'</p>
      </div>
      <div className="form-container">
        <h2>New Customer Sign-up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="referralCode">Referral Code:</label>
            <input
              type="text"
              id="referralCode"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SharingApp;