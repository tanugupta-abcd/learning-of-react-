import React from 'react';
import './toggle.css'


const Toggle = () => {

   const handleToggle = () => {
    document.body.classList.toggle('dark-mode');
    
  };

  return (
    <div>
      <h2>Toggle Body Class Example</h2>
      <button onClick={handleToggle}>Toggle Dark Mode</button>
    </div>
  );
};

export default Toggle;