import React from 'react';
import ElementLetter from './letters';
import alphabet from './alphabet';
import randomPhrase from './phrases';
import ButtonRestart from './button';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: alphabet,
      phrase: randomPhrase()
    };
    this.computeDisplay = this.computeDisplay.bind(this);
    this.clicOnLetter = this.clicOnLetter.bind(this);
    this.restart = this.restart.bind(this);
  }

  clicOnLetter(letter) {
    const index = this.state.letters.findIndex(item => letter === item.value);
    let upToDateAlphabet = [...this.state.letters];
    upToDateAlphabet[index].isUsed = true;
    //on execute la fonction qui verifie la presence d'underscore APRES le setState
    this.setState({ letters: upToDateAlphabet }, () => {
      !document.querySelector('.guesseZone').innerHTML.includes('_')
        ? console.log('winn')
        : console.log('loose');
    });
  }

  restart() {
    alphabet.forEach(element =>
      element.isUsed === true ? (element.isUsed = false) : ' '
    );
    this.setState({ letter: alphabet });
    this.setState({ phrase: randomPhrase() });
  }

  computeDisplay() {
    const usedLetters = this.state.letters
      .filter(element => element.isUsed)
      .map(element => element.value);
    return this.state.phrase.replace(/\w/g, letter =>
      usedLetters.includes(letter) ? letter : '_'
    );
  }

  render() {
    return (
      <div className='gameArea'>
        <div>
          <p className='guesseZone'>{this.computeDisplay()}</p>
        </div>
        <div className='choiceLetter'>
          {this.state.letters.map(letter => (
            <ElementLetter
              key={letter.value}
              letter={letter.value}
              onClick={this.clicOnLetter}
              isUsed={letter.isUsed}
            />
          ))}
        </div>
        <ButtonRestart onClick={this.restart} />
      </div>
    );
  }
}

export default App;
