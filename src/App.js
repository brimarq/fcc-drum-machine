import React, { Component, PureComponent } from 'react';
import PadBank from './components/PadBank';
import './App.css';

class Controls extends PureComponent {
  render() {
    // console.log("Controls render called");
    return (
      <div id="controls">
        <p>FCC DrumMachine</p>
        <div id="display">{this.props.display}</div>

        <div className="switch-container">
          <span className="switch-title">Power</span>
          <div className="switch">
            <input
              type="checkbox"
              name="power"
              id="switch-power"
              className="switch-checkbox"
              defaultChecked
              onChange={this.props.handleChange}
            />
            <label className="switch-label" htmlFor="switch-power">
              <span className="switch-inner"></span>
              <span className="switch-switch"></span>
            </label>
          </div>
        </div>

        <div className="switch-container">
          <span className="switch-title">Bank</span>
          <div className="switch">
            <input
              type="checkbox"
              name="bank"
              id="switch-bank"
              className="switch-checkbox"
              defaultChecked
              onChange={this.props.handleChange}
            />
            <label className="switch-label" htmlFor="switch-bank">
              <span className="switch-inner"></span>
              <span className="switch-switch"></span>
            </label>
          </div>
        </div>

        <div className="slider-container">
          <span className="slider-title">Volume</span>
          <input
            type="range"
            min="0"
            max="1"
            step=".01"
            defaultValue={this.props.volume}
            className="slider"
            id="myRange"
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}

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
