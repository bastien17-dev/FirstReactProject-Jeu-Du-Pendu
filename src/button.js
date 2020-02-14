import React from 'react';

function ButtonRestart({ onClick }) {
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      Rejouer
    </button>
  );
}

export default ButtonRestart;
