import React from 'react';
import PadBank from './PadBank';
import Controls from './Controls';
import './DrumMachine.css';

interface DrumMachineState {
  isPwrOn: boolean;
  display: string;
  isBank1: boolean;
  volume: number;
}

export default class DrumMachine extends React.Component<{}, DrumMachineState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isPwrOn: true,
      display: 'Bank 1',
      isBank1: true,
      volume: 0.4,
    };

    this.displaySoundName = this.displaySoundName.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  displaySoundName(name: string) {
    this.setState(() => ({ display: name }));
  }

  handleChange(e: any) {
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
