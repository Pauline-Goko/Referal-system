import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 
import ReferAFriend from "../../assets/referafriend3.jpg";
import ReferralStatus from '../ReferralStatus';

const LandingPage = () => {
  const [link, setLink] = useState('');

  const generateLink = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/referral/generate/');
    const data = await response.json();
    setLink(data.link);
  };

  return (
    <div className="landing-page">
      <h1 className="landing-page__title">Referral System</h1>
      <div className="landing-page__content-wrapper">
        <div className="landing-page__image">
          <img src={ReferAFriend} alt="Refer a Friend" />
        </div>
        <div className="landing-page__content">
          <h2>REFER A FRIEND <br/> & EARN!</h2>
          <p>Your Network, Your Reward – Share the Joy of Our Services and Get Rewarded for Every Friend Who Joins</p>
          <div className="landing-page__buttons">
            <button className="btn--primary" onClick={generateLink}>
              Generate Referral Code
            </button>
            <Link to={`/signin`}>
            <button className="btn--secondary" >
              Sign Up
            </button>
            </Link>

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
      <ReferralStatus />
    </div>
  );
};

export default LandingPage;
