import React from 'react';
import Switch from './Switch';
import Slider from './Slider';
import './Controls.css';

interface ControlsProps {
  display: string;
  volume: number;
  handleChange: (event: any) => void;
}

function Controls(props: ControlsProps) {
  const { display, volume, handleChange } = props;
  return (
    <div id="controls">
      <p>FCC DrumMachine</p>
      <div id="display">{display}</div>
      <Switch name="Power" handleChange={handleChange} />
      <Switch name="Bank" handleChange={handleChange} />
      <Slider
        id="volume"
        label="Volume"
        value={volume.toString()}
        handleChange={handleChange}
      />
    </div>
  );
}

export default Controls;
