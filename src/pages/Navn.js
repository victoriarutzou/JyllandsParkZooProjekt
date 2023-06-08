import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navn() {
    const [name, setName] = useState('');

    // Event handler for input change
    const handleChange = (e) => {
        const newName = e.target.value;
        setName(newName);

        // Gemmer 'name' i localStorage, så den kan bruges på andre sider
        localStorage.setItem('name', newName);
    };

    return (
        <div className="onboarding navn">
            <div>
                <h1>Hvem har armbåndet på?</h1>
                <p className="lightbeige space32">Skriv navnet på bæreren af armbåndet.</p>

                <form>
                    <label className="beige space8">Navn</label> 
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={handleChange}
                    />
                </form>
            </div>

            <div className="btnandhelp">
                <NavLink to={'/Aktivearmbaand'}>
                    <button className="orangebtn space16">Tilføj Armbånd</button>
                </NavLink>
                <p className="orange">Hjælp?</p>
            </div>
        </div>
    );
}
