import React from 'react';
import Switch from './Switch';
import Slider from './Slider';
import Pad from './Pad';
import soundData from './soundData';
import './DrumMachine.css';

function DrumMachine() {
  const [isPwrOn, setIsPwrOn] = React.useState(true);
  const [display, setDisplay] = React.useState('Bank 1');
  const [isBank1, setIsBank1] = React.useState(true);
  const [volume, setVolume] = React.useState(0.4);

  const bank = isBank1 ? soundData.banks[0] : soundData.banks[1];

  function handleChange(event: any) {
    switch (event.target.id) {
      case 'switch-power':
        setDisplay(isPwrOn ? '' : 'Power On');
        setIsPwrOn(prevIsPwrOn => !prevIsPwrOn);
        break;
      case 'switch-bank':
        if (isPwrOn) {
          setDisplay(isBank1 ? 'Bank 2' : 'Bank 1');
          setIsBank1(prevIsBank1 => !prevIsBank1);
        } else {
          setIsBank1(prevIsBank1 => !prevIsBank1);
        }
        break;
      default:
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
      <div id="controls">
        <p>FCC DrumMachine</p>
        <div id="display">{display}</div>
        <Switch id="switch-power" label="Power" handleChange={handleChange} />
        <Switch id="switch-bank" label="Bank" handleChange={handleChange} />
        <Slider
          id="volume"
          label="Volume"
          value={volume.toString()}
          handleChange={handleChange}
        />
      </div>
      <div id="pad-bank">
        {bank.map(pad => {
          const id = pad.name.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
          return (
            <Pad
              key={id}
              id={id}
              name={pad.name}
              kbdKey={pad.kbdKey}
              keyCode={pad.keyCode}
              source={soundData.baseUrl + pad.audioFile}
              volume={volume}
              setDisplay={setDisplay}
              isPwrOn={isPwrOn}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DrumMachine;
