import React from 'react';
import './App.css';
import ReferralLinkGenerator from './Components/ReferralLinkGenerator';
import SignupForm from './Components/SignupForm';
import ReferralStatus from './Components/ReferralStatus';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <h1>Referral System</h1>
      <LandingPage />
      <ReferralLinkGenerator />
      <SignupForm />
      <ReferralStatus />
      
    </div>
  );
}

export default App;
