import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../components/Nav';

export default function Underholdningimorgen() {
  const [showPanda, setShowPanda] = useState(true);
  const [showFlamingo, setShowFlamingo] = useState(true);
  const [showGiraf, setShowGiraf] = useState(true);
  const [showSloth, setShowSloth] = useState(true);

  const today = new Date();
  const weekdays = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
  const months = [
    'januar',
    'februar',
    'marts',
    'april',
    'maj',
    'juni',
    'juli',
    'august',
    'september',
    'oktober',
    'november',
    'december',
  ];

  const todayIndex = today.getDay();
  const todayDate = today.getDate();
  const currentMonth = months[today.getMonth()];

  const nextDays = [
    { day: 'I dag', date: todayDate, path: '/underholdning' },
    { day: weekdays[(todayIndex + 1) % 7], date: todayDate + 1, path: '/Underholdningimorgen' },
    { day: weekdays[(todayIndex + 2) % 7], date: todayDate + 2, path: '/Underholdningiovermorgen' },
  ];

  const handlePandaClick = () => {
    setShowPanda(!showPanda);
  };

  const handleFlamingoClick = () => {
    setShowFlamingo(!showFlamingo);
  };

  const handleGirafClick = () => {
    setShowGiraf(!showGiraf);
  };

  const handleSlothClick = () => {
    setShowSloth(!showSloth);
  };

  return (
    <div className="underholdning app">
      <div className="weekdays-container space32">
        {nextDays.map((day, index) => (
          <NavLink
          key={index}
          to={day.path}
          exact  // Remove the condition from here
          activeClassName="active-button"
          className={`weekday-button beige ${index === 1 ? 'active-button' : ''}`}
        >
          {index === 0 ? day.day : `${day.day} ${day.date}. ${currentMonth}`}
       </NavLink>

        ))}
      </div>

      <h3 className="lightbeige space16">Shows og fodringer i morgen</h3>

      {showPanda ? (
        <div className="categoryimageunderholdning tiger" onClick={handlePandaClick}>
          <p className="white cardtext">Tigerne fodres</p>
        </div>
      ) : (
        <div className="solid-background" onClick={handlePandaClick}>
          <h4 className="white">Tigerne fodres</h4>
          <p className="white">kl. 09.00 - 09.30</p>
          <p className="white">Ved Tigerburet</p>
        </div>
      )}

      {showFlamingo ? (
        <div className="categoryimageunderholdning abekat" onClick={handleFlamingoClick}>
          <p className="white cardtext">Aberne får ny legeplads</p>
        </div>
      ) : (
        <div className="solid-background" onClick={handleFlamingoClick}>
          <h4 className="white">Aberne får ny legeplads</h4>
          <p className="white">kl. 10.00 - 10.15</p>
          <p className="white">Ved Abeburet</p>
        </div>
      )}

      {showGiraf ? (
        <div className="categoryimageunderholdning giraf" onClick={handleGirafClick}>
          <p className="white cardtext">Giv snacks til girafferne</p>
        </div>
      ) : (
        <div className="solid-background" onClick={handleGirafClick}>
          <h4 className="white">Giv snacks til girafferne</h4>
          <p className="white">kl. 11.00 - 12.00</p>
          <p className="white">Ved Safariburet</p>
        </div>
      )}

      {showSloth ? (
        <div className="categoryimageunderholdning sloth space100" onClick={handleSlothClick}>
          <p className="white cardtext">Dovendyret fodres</p>
        </div>
      ) : (
        <div className="solid-background space100" onClick={handleSlothClick}>
          <h4 className="white">Dovendyret fodres</h4>
          <p className="white">kl. 13.00 - 14.30</p>
          <p className="white">Ved Safariburet</p>
        </div>
      )}

      <Nav />
    </div>
  );
}

