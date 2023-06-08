import React, { useState, useEffect } from 'react';

export default function ScanningPage() {
  const [status, setStatus] = useState('Scanner');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('Gennemført');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (status === 'Gennemført') {
      setTimeout(() => {
        window.location = "https://zooprojekt.dk/Navn";
      }, 2000);
    }
  }, [status]);

  return (
    <div className="scanning-page">
      <div className="animation-container">
        <div className="circle"></div>
        {status === 'Gennemført' && <div className="tick"></div>}
      </div>
      <h1>{status}</h1>
    </div>
  );
}
