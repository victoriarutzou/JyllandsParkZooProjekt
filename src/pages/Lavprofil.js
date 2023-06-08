import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Lavprofil() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        navigate('/Scanarmbaand');
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="onboarding lavprofil">
            <div className="topcontent">
                <h1 className="orange">OPRET EN PROFIL</h1>
                <p className="space32 lightbeige">
                    Med en profil kan du se dine børns lokation, købe billetter, bruge kortet og meget mere.
                </p>
                <form onSubmit={handleSubmit}>
                    <label className="beige bold space8">Email:</label>
                    <input type="text" required value={email} onChange={handleEmailChange} />
                    <label className="beige bold space8">Password</label>
                    <input type="password" required value={password} onChange={handlePasswordChange} />
                    <button type="submit" className="orangebtn space16">
                        Opret profil
                    </button>
                </form>
            </div>
        </div>
    );
}
