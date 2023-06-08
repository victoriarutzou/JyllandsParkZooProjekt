import React from 'react';
import { NavLink } from 'react-router-dom';
import safariman from '../photos/safariman-01.svg';
import safari from '../photos/safari-01.svg';

export default function Velkommen() {
  return (
    <div className="onboarding velkommen">
      <div className="mobile">
        <h1 className="white">VELKOMMEN!</h1>
        <p className="white space32">Er du ny bruger eller har du allerede en profil?</p>

        <NavLink to="/Lavprofil">
          
          <button className="square space24">
            <img src={safari} className="elefanticon" alt="safariudstyr"/>
            <h3 className="beige">Ny bruger</h3>
          </button>
        </NavLink>

        <NavLink to="/Fejlsideintro">
          <button className="square space24">
            <img src={safariman} className="elefanticon" alt="safariman"/>
            <h3 className="beige">Login</h3>
          </button>
        </NavLink>
      </div>

      <div className="computer">
        <div className="computertext">
          <h1 className="orange">Hejsa!</h1>
          
          <p className='beige'>Vi kan godt forstå at du er spændt på at bruge Jyllands Park Zoos nye app... Den er ret cool!</p>
          <p className='beige'>Dog er den kun til mobiltelefoner.</p>
          <p className='beige'>Så frem med din telefon og nyd App'en</p>
        </div>
      </div>
    </div>
  );
}
