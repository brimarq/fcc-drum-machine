import React from 'react';
import './Controls.css';

interface ControlsProps {
  isPwrOn: boolean;
  display: string;
  volume: number;
  isBank1: boolean;
  handleChange: (e: any) => void;
}

export default class Controls extends React.PureComponent<ControlsProps> {
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
