import React from 'react';
import PadBank from './PadBank';
import Controls from './Controls';
import './DrumMachine.css';

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
      <Controls display={display} volume={volume} handleChange={handleChange} />
    </div>
  );
}

export default DrumMachine;
