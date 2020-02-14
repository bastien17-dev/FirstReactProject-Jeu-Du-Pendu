import React from 'react';

function ButtonRestart({ onClick, isVisible }) {
  return (
    <button
      className={`buttonRestart ${isVisible ? 'isVisible' : ''}`}
      onClick={() => {
        onClick();
      }}
    >
      Rejouer
    </button>
  );
}

export default ButtonRestart;
