import React from 'react';
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

      <div className="switch-container">
        <span className="switch-title">Power</span>
        <div className="switch">
          <input
            type="checkbox"
            name="power"
            id="switch-power"
            className="switch-checkbox"
            defaultChecked
            onChange={handleChange}
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
            onChange={handleChange}
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
          defaultValue={volume}
          className="slider"
          id="myRange"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Controls;
