import React from 'react';

const phrases = [
  'VOITURE',
  'MAISON',
  'TABLE',
  'MIROIR',
  'PLACARD',
  'TABOURET',
  'HYPOCONDRIAQUE',
  'ORNITORYNQUE'
];

function randomPhrase() {
  let randomNumer = Math.floor(Math.random() * phrases.length);
  return phrases[randomNumer];
}

export default randomPhrase;
