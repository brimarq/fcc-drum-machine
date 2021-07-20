import React from 'react';
import './Switch.css';

interface SwitchProps {
  name: string;
  handleChange: (event: any) => void;
}

function Switch(props: SwitchProps) {
  const { name, handleChange } = props;

  return (
    <div className="switch-container">
      <span className="switch-title">{name}</span>
      <div className="switch">
        <input
          type="checkbox"
          name={name.toLowerCase()}
          id={`switch-${name.toLowerCase()}`}
          className="switch-checkbox"
          defaultChecked
          onChange={handleChange}
        />
        <label
          className="switch-label"
          htmlFor={`switch-${name.toLowerCase()}`}
        >
          <span className="switch-inner"></span>
          <span className="switch-switch"></span>
        </label>
      </div>
    </div>
  );
}

export default Switch;
