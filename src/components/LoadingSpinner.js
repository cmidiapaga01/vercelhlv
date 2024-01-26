// LoadingSpinner.js
import React from 'react';
import './LoadingSpinner.css'; // Importando o CSS

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="orbit-spinner">
        <div className="planet-spinner"></div>
        <div className="stars"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
