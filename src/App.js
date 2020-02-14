import React from 'react';
import ElementLetter from './letters';
import alphabet from './alphabet';
import randomPhrase from './phrases';
import ButtonRestart from './button';
import RemaningAttemps from './remaning-attemps';
import './App.css';

let howManyAttemps = 10;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: alphabet,
      phrase: randomPhrase(),
      buttonRestartVisible: false,
      attempsNumber: howManyAttemps
    };

    this.computeDisplay = this.computeDisplay.bind(this);
    this.clicOnLetter = this.clicOnLetter.bind(this);
    this.restart = this.restart.bind(this);
    this.checkVictory = this.checkVictory.bind(this);
    this.buttonRestartIsVisible = this.buttonRestartIsVisible.bind(this);
    this.remaningAttemps = this.remaningAttemps.bind(this);
  }

  clicOnLetter(letter) {
    const index = this.state.letters.findIndex(item => letter === item.value);
    let upToDateAlphabet = [...this.state.letters];
    upToDateAlphabet[index].isUsed = true;
    //on execute la fonction qui verifie la presence d'underscore APRES le setState
    this.setState({ letters: upToDateAlphabet }, () => {
      this.checkVictory();
    });
    this.remaningAttemps(letter);
  }

  checkVictory() {
    if (!document.querySelector('.guesseZone').innerHTML.includes('_')) {
      this.buttonRestartIsVisible();
    }
  }

  buttonRestartIsVisible() {
    this.setState({ buttonRestartVisible: true });
  }

  restart() {
    alphabet.forEach(element =>
      element.isUsed === true ? (element.isUsed = false) : ' '
    );
    this.setState({ letter: alphabet });
    this.setState({ phrase: randomPhrase() });
    this.setState({ buttonRestartVisible: false });
    this.setState({ attempsNumber: howManyAttemps });
  }

  computeDisplay() {
    const usedLetters = this.state.letters
      .filter(element => element.isUsed)
      .map(element => element.value);
    return this.state.phrase.replace(/\w/g, letter =>
      usedLetters.includes(letter) ? letter : '_'
    );
  }

  remaningAttemps(letter) {
    if (!this.state.phrase.includes(letter)) {
      this.setState({ attempsNumber: this.state.attempsNumber - 1 });
    }
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
        <RemaningAttemps number={this.state.attempsNumber} />
        <ButtonRestart
          onClick={this.restart}
          isVisible={this.state.buttonRestartVisible}
        />
      </div>
    );
  }
}

export default App;
