import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import elefanticon from '../photos/elefanticon.svg';
import addicon from '../photos/addicon-01.svg';

export default function Aktivearmbaand() {
    const location = useLocation();
    const [name, setName] = useState('');

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        if (storedName) {
            setName(decodeURIComponent(storedName));
        }
    }, [location]);

    return (
        <div className="aktivearmbaand onboarding">
            <div>
                <h1 className="orange space32">Tilføj flere?</h1>
                <p className="lightbeige space16">Aktive armbånd</p>
                <button className="square space24">
                    <img src={elefanticon} className="elefanticon" alt="elefantikon"></img>
                    <p className="beige">{name}</p>
                </button>

                <NavLink to="/Scanarmbaand">
                    <button className="square space24">
                        <img src={addicon} className="addicon" alt="tilføj ikon"></img>
                        <p className="beige">Tilføj armbånd</p>
                    </button>
                </NavLink>
            </div>

            <div className="btnandhelp">
                <NavLink to="/Armbaand">
                    <button className="orangebtn space16">Færdig</button>
                </NavLink>
                <p className="orange">Hjælp?</p>
            </div>
        </div>
    );
}
