import elefanticon from '../photos/elefanticon.svg';
import addicon from '../photos/addicon-01.svg';
import Nav from '../components/Nav';
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Armbaand() {
  const location = useLocation();
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0); 

  useEffect(() => {
    setName(localStorage.getItem('name'));
    const storedBalance = localStorage.getItem('balance');
    if (storedBalance) {
      setBalance(parseInt(storedBalance));
    }
  }, [location]);

  return (
    <div className="armbaand app">
      <div className="categoryimage"></div>

      <h3 className="lightbeige space16">Aktive armbånd</h3>

      <NavLink to="/Barnsprofil">
        <button className="square space24">
          <img src={elefanticon} className="elefanticon" alt="elefantikon" />

          <div>
            <p className="orange">{name}</p>
            <p className="lightbeige">kl. 13.07 ved Abeburet</p>
            <p className="lightbeige">{balance} kr.</p> 
          </div>
        </button>
      </NavLink>

      <NavLink to="/Scanarmbaand">
        <button className="square space24">
          <img src={addicon} className="addicon" alt="tilføj ikon" />
          <p className="lightbeige">Tilføj armbånd</p>
        </button>
      </NavLink>

      <Nav />
    </div>
  );
}
