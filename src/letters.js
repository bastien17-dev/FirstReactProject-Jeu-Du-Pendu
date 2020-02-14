import React from 'react';

function ElementLetter({ isUsed, onClick, letter }) {
  return (
    <div
      onClick={() => {
        onClick(letter);
      }}
      className={`letterTouch ${isUsed ? 'gray' : ''}`}
    >
      {letter}
    </div>
  );
}

export default ElementLetter;
