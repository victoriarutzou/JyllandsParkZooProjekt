import React, { useState, useEffect } from 'react';
import cross from '../photos/cross.svg';
import { NavLink } from 'react-router-dom';

export default function Barnsprofil() {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleAddMoney = () => {
    const amount = parseInt(inputValue);
    if (!isNaN(amount)) {
      const newBalance = balance + amount;
      setBalance(newBalance);
      setInputValue('');
      localStorage.setItem('balance', newBalance.toString());
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  useEffect(() => {
    setName(localStorage.getItem('name'));
    const storedBalance = localStorage.getItem('balance');
    if (storedBalance) {
      setBalance(parseInt(storedBalance));
    }
  }, []);

  return (
    <div className="barnsprofil app">
      <NavLink to="/Armbaand">
        <img className="cross" src={cross} alt="kryds" />
      </NavLink>
      <h1 className="space8">{name}</h1>
      <h3 className="lightbeige">Lokation</h3>
      <p className="beige space16">Sidst set kl. 13.07 ved Abeburet</p>
      <div className="categoryimagebarnprofil"></div>

      <h3 className="lightbeige">Penge på Armbåndet</h3>

      <h2 className="orange space24">{balance} kr.</h2>

      <h3 className="lightbeige space8">Tilføj penge</h3>

      <div className="add-money-container">
        <input
          type="text"
          placeholder="kr."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="add-money-btn orangebtn" onClick={handleAddMoney}>
          Tilføj penge
        </button>
      </div>
    </div>
  );
}
