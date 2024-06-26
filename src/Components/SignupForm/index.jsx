import React, { useState } from 'react';
import GirlwithLaptop from "../../assets/girlwithlaptop.jpg"
import './style.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [referred_email, setReferralEmail] = useState('');
  const [referral_code, setReferralCode] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/referral/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          referralEmail: referred_email,
          referralCode: referral_code,
        }),
      });
      if (response.ok) {
        console.log('Form submitted successfully!');
        setName('');
        setEmail('');
        setReferralEmail('');
        setReferralCode('');
        setShowSuccessMessage(true); 
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1 className="signin-page__title">Welcome to Tunzaa</h1>
      <p className='paragraph-container'>Transforming financial habits of everyday Africans</p>
      <div className='container'>
        <div className="image-container">
          <img src={GirlwithLaptop} alt="A girl with a laptop" />
        </div>
        <div className="form-container">
          <h2>New Customer Sign-up</h2>
          {showSuccessMessage ? (
            <div className="success-message">
              Successfully signed up! {}
            </div>
          ) : (
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
                <label htmlFor="referralEmail">Referral Email:</label>
                <input
                  type="text"
                  id="referralEmail"
                  value={referred_email}
                  onChange={(e) => setReferralEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="referralCode">Referral Code:</label>
                <input
                  type="text"
                  id="referralCode"
                  value={referral_code}
                  onChange={(e) => setReferralCode(e.target.value)}
                />
              </div>
              <button type="submit" className="btn">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
