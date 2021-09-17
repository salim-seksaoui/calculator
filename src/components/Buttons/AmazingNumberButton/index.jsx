import React from 'react';
import '../Button.css';

const AmazingNumberButton = ({ symbol, color, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className="button-wrapper"
      style={{ backgroundColor: color }}
      value={symbol}
    >
      {symbol}
    </div>
  );
};

export default AmazingNumberButton;
