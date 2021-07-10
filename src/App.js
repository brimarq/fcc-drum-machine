import React, { Component, PureComponent } from 'react';
import './App.css';

const data = {
  baseUrl: 'https://s3.amazonaws.com/freecodecamp/drums/',
  bank1: [
    { kbdKey: 'Q', keyCode: 81, name: 'Heater 1', sound: 'Heater-1.mp3' },
    { kbdKey: 'W', keyCode: 87, name: 'Heater 2', sound: 'Heater-2.mp3' },
    { kbdKey: 'E', keyCode: 69, name: 'Heater 3', sound: 'Heater-3.mp3' },
    { kbdKey: 'A', keyCode: 65, name: 'Heater 4', sound: 'Heater-4_1.mp3' },
    { kbdKey: 'S', keyCode: 83, name: 'Clap', sound: 'Heater-6.mp3' },
    { kbdKey: 'D', keyCode: 68, name: 'Open HH', sound: 'Dsc_Oh.mp3' },
    { kbdKey: 'Z', keyCode: 90, name: "Kick n' Hat", sound: 'Kick_n_Hat.mp3' },
    { kbdKey: 'X', keyCode: 88, name: 'Kick', sound: 'RP4_KICK_1.mp3' },
    { kbdKey: 'C', keyCode: 67, name: 'Closed HH', sound: 'Cev_H2.mp3' },
  ],
  bank2: [
    { kbdKey: 'Q', keyCode: 81, name: 'Chord 1', sound: 'Chord_1.mp3' },
    { kbdKey: 'W', keyCode: 87, name: 'Chord 2', sound: 'Chord_2.mp3' },
    { kbdKey: 'E', keyCode: 69, name: 'Chord 3', sound: 'Chord_3.mp3' },
    { kbdKey: 'A', keyCode: 65, name: 'Shaker', sound: 'Give_us_a_light.mp3' },
    { kbdKey: 'S', keyCode: 83, name: 'Open HH Dry', sound: 'Dry_Ohh.mp3' },
    { kbdKey: 'D', keyCode: 68, name: 'Closed HH', sound: 'Bld_H1.mp3' },
    {
      kbdKey: 'Z',
      keyCode: 90,
      name: 'Punchy Kick',
      sound: 'punchy_kick_1.mp3',
    },
    { kbdKey: 'X', keyCode: 88, name: 'Side Stick', sound: 'side_stick_1.mp3' },
    { kbdKey: 'C', keyCode: 67, name: 'Snare', sound: 'Brk_Snr.mp3' },
  ],
};

const defaultPadClassName = 'drum-pad';
const clickedPadClassName = 'drum-pad drum-pad-clicked';

class Pad extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      padClassName: defaultPadClassName,
    };
    this.audioElement = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setPadClassName = this.setPadClassName.bind(this);
  }

  componentDidMount() {
    this.audioElement.current.volume = this.props.volume;
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    this.audioElement.current.volume = this.props.volume;
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  setPadClassName(str) {
    this.setState(() => ({ padClassName: str }));
  }

  handleClick() {
    if (this.props.isPwrOn) {
      this.audioElement.current.play();
      this.props.displaySoundName(this.props.name);
      this.setPadClassName(clickedPadClassName);
      setTimeout(this.setPadClassName, 80, defaultPadClassName);
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === this.props.keyCode) {
      this.audioElement.current.click();
    }
  }

  render() {
    // console.log("Pad " + this.props.kbdKey + " render called");
    return (
      <div
        id={this.props.padId}
        className={this.state.padClassName}
        name={this.props.name}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        {this.props.kbdKey}
        <audio
          id={this.props.audioId}
          className="clip"
          src={this.props.source}
          type="audio/mpeg"
          ref={this.audioElement}
        ></audio>
      </div>
    );
  }
}

class PadBank extends PureComponent {
  render() {
    // console.log("PadBank render called");
    let bank = this.props.isBank1 ? data.bank1 : data.bank2;
    const baseUrl = 'https://s3.amazonaws.com/freecodecamp/drums/';
    return (
      <div id="pad-bank">
        {bank.map(pad => (
          <Pad
            key={pad.name.replace(/[^A-Za-z0-9]/g, '').toLowerCase()}
            padId={pad.name.replace(/[^A-Za-z0-9]/g, '').toLowerCase()}
            name={pad.name}
            kbdKey={pad.kbdKey}
            keyCode={pad.keyCode}
            audioId={pad.kbdKey}
            source={baseUrl + pad.sound}
            volume={this.props.volume}
            displaySoundName={this.props.displaySoundName}
            isPwrOn={this.props.isPwrOn}
          />
        ))}
      </div>
    );
  }
}

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
