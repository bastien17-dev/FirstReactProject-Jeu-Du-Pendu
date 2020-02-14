const phrases = [
  'VOITURE',
  'MAISON',
  'TABLE',
  'MIROIR',
  'PLACARD',
  'TABOURET',
  'HYPOCONDRIAQUE',
  'ORNITORYNQUE',
  'PISCINE',
  'SURF',
  'COMBINAISON',
  'FOOTBALL',
  'NATATION',
  'IMMEUBLE',
  'RESTAURANT'
];

function randomPhrase() {
  let randomNumer = Math.floor(Math.random() * phrases.length);
  return phrases[randomNumer];
}

export default randomPhrase;
