import React, { Component } from 'react';
import PadBank from './components/PadBank';
import Controls from './components/Controls';
import './App.css';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPwrOn: true,
      display: 'Bank 1',
      isBank1: true,
      volume: '0.4',
    };

    this.displaySoundName = this.displaySoundName.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  displaySoundName(name) {
    this.setState(() => ({ display: name }));
  }

  handleChange(e) {
    if (e.target.name === 'power') {
      // setState is asynchronous! Must wait for it to finish before using new state, hence the callback.
      this.setState(prevState => ({
        isPwrOn: !prevState.isPwrOn,
        display: prevState.isPwrOn ? '' : 'Power On',
      }));
    } else if (e.target.name === 'bank') {
      if (this.state.isPwrOn) {
        this.setState(prevState => ({
          isBank1: !prevState.isBank1,
          display: prevState.isBank1 ? 'Bank 2' : 'Bank 1',
        }));
      } else {
        this.setState(prevState => ({
          isBank1: !prevState.isBank1,
        }));
      }
    } else {
      let newVolume = e.target.value;
      if (this.state.isPwrOn) {
        this.setState(() => ({
          volume: newVolume,
          display: 'Volume: ' + Math.round(newVolume * 100) + '%',
        }));
      } else {
        this.setState(() => ({
          volume: newVolume,
        }));
      }
    }
  }

  render() {
    // console.log("DrumMachine render called");
    return (
      <div id="drum-machine">
        <PadBank
          isPwrOn={this.state.isPwrOn}
          volume={this.state.volume}
          isBank1={this.state.isBank1}
          displaySoundName={this.displaySoundName}
        />
        <Controls
          isPwrOn={this.state.isPwrOn}
          display={this.state.display}
          volume={this.state.volume}
          isBank1={this.state.isBank1}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

class App extends Component {
  render() {
    // console.log("App render called");
    return (
      <div className="App">
        <header className="App-header"></header>
        <main className="App-main">
          <DrumMachine />
        </main>
        <footer className="App-footer"></footer>
      </div>
    );
  }
}

export default App;
