import React, { useState } from "react";

const ReferralLinkGenerator = () => {
  const [referralCode, setReferralCode] = useState('');

  const generateLink = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/referral/generate/');
    if (!response.ok) {
      console.error('Failed to fetch referral code');
      return; 
    }
    const data = await response.json();
    setReferralCode(data.unique_code);
  };

  return (
    <div>
      <button onClick={generateLink}>Generate Referral Code</button>
      {referralCode && (
        <div>
          <p>Your referral code: {referralCode}</p>
          <button onClick={() => navigator.clipboard.writeText(referralCode)}>Copy Code</button>
        </div>
      )}
    </div>
  );
};

export default ReferralLinkGenerator;
