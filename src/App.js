/* Front End Libraries Projects - Build a Drum Machine
Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/MJyNMd.

Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

User Story #2: Within #drum-machine I can see an element with a corresponding id="display".

User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).

User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

You can build your project by forking this CodePen pen. Or you can use this CDN link to run the tests in any environment you like: https://gitcdn.link/repo/freeCodeCamp/testable-projects-fcc/master/build/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

Remember to use the Read-Search-Ask method if you get stuck.
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const data = {
  baseUrl : "https://s3.amazonaws.com/freecodecamp/drums/",
  bank1: [
    {kbdKey: "Q", keyCode: 81, name: "Heater 1", sound: "Heater-1.mp3"},
    {kbdKey: "W", keyCode: 87, name: "Heater 2", sound: "Heater-2.mp3"},
    {kbdKey: "E", keyCode: 69, name: "Heater 3", sound: "Heater-3.mp3"},
    {kbdKey: "A", keyCode: 65, name: "Heater 4", sound: "Heater-4_1.mp3"},
    {kbdKey: "S", keyCode: 83, name: "Clap", sound: "Heater-6.mp3"},
    {kbdKey: "D", keyCode: 68, name: "Open HH", sound: "Dsc_Oh.mp3"},
    {kbdKey: "Z", keyCode: 90, name: "Kick n' Hat", sound: "Kick_n_Hat.mp3"},
    {kbdKey: "X", keyCode: 88, name: "Kick", sound: "RP4_KICK_1.mp3"},
    {kbdKey: "C", keyCode: 67, name: "Closed HH", sound: "Cev_H2.mp3"}
  ],
  bank2: [
    {kbdKey: "Q", keyCode: 81, name: "Chord 1", sound: "Chord_1.mp3"},
    {kbdKey: "W", keyCode: 87, name: "Chord 2", sound: "Chord_2.mp3"},
    {kbdKey: "E", keyCode: 69, name: "Chord 3", sound: "Chord_3.mp3"},
    {kbdKey: "A", keyCode: 65, name: "Shaker", sound: "Give_us_a_light.mp3"},
    {kbdKey: "S", keyCode: 83, name: "Open HH (Dry)", sound: "Dry_Ohh.mp3"},
    {kbdKey: "D", keyCode: 68, name: "Closed HH", sound: "Bld_H1.mp3"},
    {kbdKey: "Z", keyCode: 90, name: "Punchy Kick", sound: "punchy_kick_1.mp3"},
    {kbdKey: "X", keyCode: 88, name: "Side Stick", sound: "side_stick_1.mp3"},
    {kbdKey: "C", keyCode: 67, name: "Snare", sound: "Brk_Snr.mp3"}
  ]
}


class Pad extends Component {
  constructor(props) {
    super(props);
    this.audioElement = React.createRef();
  }
  
  componentDidMount() {
    this.audioElement.current.volume = this.props.volume;
  }

  componentDidUpdate() {
    this.audioElement.current.volume = this.props.volume;
  }

  render() {
    return (
      <button id={this.props.padId} className="drum-pad" name={this.props.name} onClick={this.props.handlePadClick}>{this.props.kbdKey}
        <audio id={this.props.audioId} src={this.props.source} className="clip" ref={this.audioElement}></audio>
      </button>
    )
  }
}


class PadBank extends Component {
  render() {
    let bank = (this.props.isBank1 ? data.bank1 : data.bank2);
    const baseUrl = "https://s3.amazonaws.com/freecodecamp/drums/";
    return (
      <div id="pad-bank">
        {bank.map(pad => (
          <Pad 
            key={pad.name.replace(/[^A-Za-z0-9]/g, '').toLowerCase()} 
            padId={pad.name.replace(/[^A-Za-z0-9]/g, '').toLowerCase()} 
            name={pad.name} 
            kbdKey={pad.kbdKey} 
            audioId={pad.kbdKey} 
            source={baseUrl + pad.sound} 
            volume={this.props.volume}
            handlePadClick={this.props.handlePadClick}
          />
        ))}
      </div>
    );
  }
}

class Controls extends Component {
  render() {
    return (
      <div id="controls">
        <p>Controls</p>
        <label className="switch">Power
          <input type="checkbox" name="power" defaultChecked onChange={this.props.handleChange}/>
          <span className="slider round"></span>
        </label>
        <div id="display">{this.props.display}</div>
        <div className="slidecontainer">
          <input type="range" min="0" max="1" step=".01" defaultValue={this.props.volume} className="slider" id="myRange" onChange={this.props.handleChange}/>
        </div>
        <label className="switch">Bank
          <input type="checkbox" name="bank" defaultChecked onChange={this.props.handleChange}/>
          <span className="slider round"></span>
        </label>
      </div>
    )
  }
}

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPwrOn: true,
      display: "Bank 1",
      isBank1: true,
      volume: "0.4",
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handlePadClick = this.handlePadClick.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "power") {
      // setState is asynchronous! Must wait for it to finish before using new state, hence the callback.
      this.setState((prevState) => ({
        isPwrOn: !prevState.isPwrOn,
        display: prevState.isPwrOn ? "Power Off" : "Power On"
        })
      );
    }
    else if (e.target.name === "bank") {
      this.setState((prevState) => ({
        isBank1: !prevState.isBank1,
        display: prevState.isBank1 ? "Bank 2" : "Bank 1"
        })
      );
    }
    else {
      let newVolume = e.target.value;
      this.setState(() => ({
        volume: newVolume,
        display: "Volume: " + Math.round(newVolume * 100) + "%"
        })
      );
    }
  }

  handlePadClick(e) {
    let element = e.target;
    if (!this.state.isPwrOn) return;
    element.firstElementChild.play();
    this.setState(() => ({
      display: element.name
    }));
  }

  render() {
    return (
      <div id="drum-machine">
        <PadBank 
          isPwrOn={this.state.isPwrOn} 
          volume={this.state.volume} 
          isBank1={this.state.isBank1} 
          handlePadClick={this.handlePadClick}
        />
        <Controls 
          isPwrOn={this.state.isPwrOn} 
          display={this.state.display} 
          volume={this.state.volume} 
          isBank1={this.state.isBank1} 
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Add these to the pads instead?
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    const kbdKeys = ["Q", "q", "W", "w",  "E", "e", "A", "a", "S", "s", "D", "d", "Z", "z", "X", "x", "C", "c"];
    const keyCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67];
    let keyUpperCase;
    let btn;
    if (e.key && kbdKeys.includes(e.key)) {
      keyUpperCase = e.key.toUpperCase();
    }
    else {
      // Accomodation for fcc testing suite that tests for .keyCode instead of .key even though the former is depreciated.
      if (keyCodes.includes(e.keyCode)) {
        keyUpperCase = String.fromCharCode(e.keyCode);
      }
    }

    if (keyUpperCase) {
      btn = document.querySelector("audio#" + keyUpperCase + ".clip").closest('button');
      btn.focus();
      btn.click();
    }
    
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <DrumMachine />
      </div>
    );
    
  }
}

export default App;
