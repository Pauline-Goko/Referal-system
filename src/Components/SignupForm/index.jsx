import React, { useState} from "react";

const SignupForm = () => {
    const [formData, setFormData] = useState({name: '', email: '',referralCode: '' });

    const handleChange = async (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch ('http://localhost:8000/api/referral/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required/>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
            <input type="text" name="referralCode" placeholder="Referral Code" value={formData.referralCode} onChange={handleChange} required/>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm