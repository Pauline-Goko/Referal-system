import React, { useState } from 'react';
import './style.css'; 
import ReferAFriend from "../../assets/referfriend.jpg";

const LandingPage = () => {
  const [link, setLink] = useState('');

  const generateLink = async () => {
    const response = await fetch('http://localhost:8000/api/referral/generate/');
    const data = await response.json();
    setLink(data.link);
  };

  return (
    <div className="landing-page">
      <div className="landing-page__image">
        <img src={ReferAFriend} alt="Refer a Friend" />
      </div>
      <div className="landing-page__content">
        <h1>REFER A FRIEND</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <div className="landing-page__buttons">
          <button className="btn btn--primary" onClick={generateLink}>
            Generate Referral Code
          </button>
          {link && (
            <div>
              <p>Your referral link: {link}</p>
              <button
                className="btn btn--secondary"
                onClick={() => navigator.clipboard.writeText(link)}
              >
                Copy Link
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;