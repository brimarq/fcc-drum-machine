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

function DrumMachine(props: any) {
  const [isPwrOn, setIsPwrOn] = React.useState(true);
  const [display, setDisplay] = React.useState('Bank 1');
  const [isBank1, setIsBank1] = React.useState(true);
  const [volume, setVolume] = React.useState(0.4);

  function displaySoundName(name: string) {
    setDisplay(name);
  }

  function handleChange(event: any) {
    if (event.target.name === 'power') {
      setDisplay(isPwrOn ? '' : 'Power On');
      setIsPwrOn(prevIsPwrOn => !prevIsPwrOn);
    } else if (event.target.name === 'bank') {
      if (isPwrOn) {
        setDisplay(isBank1 ? 'Bank 2' : 'Bank 1');
        setIsBank1(prevIsBank1 => !prevIsBank1);
      } else {
        setIsBank1(prevIsBank1 => !prevIsBank1);
      }
    } else {
      let newVolume = event.target.value;

      if (isPwrOn) {
        setVolume(newVolume);
        setDisplay(`Volume: ${Math.round(newVolume * 100)}%`);
      } else {
        setVolume(newVolume);
      }
    }
  }

  return (
    <div id="drum-machine">
      <PadBank
        isPwrOn={isPwrOn}
        volume={volume}
        isBank1={isBank1}
        displaySoundName={displaySoundName}
      />
      <Controls
        isPwrOn={isPwrOn}
        display={display}
        volume={volume}
        isBank1={isBank1}
        handleChange={handleChange}
      />
    </div>
  );
}

// class DrumMachine extends React.Component<{}, DrumMachineState> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       isPwrOn: true,
//       display: 'Bank 1',
//       isBank1: true,
//       volume: 0.4,
//     };

//     this.displaySoundName = this.displaySoundName.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   displaySoundName(name: string) {
//     this.setState(() => ({ display: name }));
//   }

//   handleChange(e: any) {
//     if (e.target.name === 'power') {
//       // setState is asynchronous! Must wait for it to finish before using new state, hence the callback.
//       this.setState(prevState => ({
//         isPwrOn: !prevState.isPwrOn,
//         display: prevState.isPwrOn ? '' : 'Power On',
//       }));
//     } else if (e.target.name === 'bank') {
//       if (this.state.isPwrOn) {
//         this.setState(prevState => ({
//           isBank1: !prevState.isBank1,
//           display: prevState.isBank1 ? 'Bank 2' : 'Bank 1',
//         }));
//       } else {
//         this.setState(prevState => ({
//           isBank1: !prevState.isBank1,
//         }));
//       }
//     } else {
//       let newVolume = e.target.value;
//       if (this.state.isPwrOn) {
//         this.setState(() => ({
//           volume: newVolume,
//           display: 'Volume: ' + Math.round(newVolume * 100) + '%',
//         }));
//       } else {
//         this.setState(() => ({
//           volume: newVolume,
//         }));
//       }
//     }
//   }

//   render() {
//     // console.log("DrumMachine render called");
//     return (
//       <div id="drum-machine">
//         <PadBank
//           isPwrOn={this.state.isPwrOn}
//           volume={this.state.volume}
//           isBank1={this.state.isBank1}
//           displaySoundName={this.displaySoundName}
//         />
//         <Controls
//           isPwrOn={this.state.isPwrOn}
//           display={this.state.display}
//           volume={this.state.volume}
//           isBank1={this.state.isBank1}
//           handleChange={this.handleChange}
//         />
//       </div>
//     );
//   }
// }

export default DrumMachine;
