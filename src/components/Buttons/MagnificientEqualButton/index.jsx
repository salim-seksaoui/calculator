import React from 'react';
import '../Button.css';

const MagnificientEqualButton = ({ symbol, color, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="button-wrapper"
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
};

export default MagnificientEqualButton;