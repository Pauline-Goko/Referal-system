import React, { useEffect, useState} from "react";

const ReferralStatus = () => {
    const [status, setStatus] = useState({ referrals: 0, rewards: 0 });

    useEffect(() => {
    const fetchStatus = async () =>{
        const response = await fetch ('http://localhost:8000/api/referral/status');
        const data = await response.json()
        setStatus(data);
    };
    fetchStatus();

}, []);

return (
    <div>
        <p>Referrals: {status.referrals}</p>
        <p>Rewards: {status.rewards}</p>
    </div>
);

};

export default ReferralStatus;