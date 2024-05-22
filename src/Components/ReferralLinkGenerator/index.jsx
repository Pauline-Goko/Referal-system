import React, { useState} from "react";

const ReferralLinkGenerator = () => {
    const [link, setLink] = useState('');

    const generateLink = async () =>{
        const response = await fetch('http:/localhost:8000/api/referral/generate/');
        const data = await response.json()
        setLink(data.link);
    
    };

    return(
        <div>
            <button onClick={generateLink}>Generate Referral</button>
            {link && (
                <div>
                    <p>Your referral link: {link}</p>
                    <button onClick={() => navigator.clipboard.writeText(link)}>Copy Link</button>
                </div>
            )}
        </div>
    );
};

export default ReferralLinkGenerator;