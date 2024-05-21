import React from 'react';
import './style.css'; 
import ReferAFriend from "../../assets/referfriend2.jpg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__image">
        <img src={ReferAFriend} alt="Refer a Friend" />
      </div>
      <div className="landing-page__content">
        <h1>REFER A FRIEND</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <div className="landing-page__buttons">
          <button className="btn btn--primary">Sign In</button>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
