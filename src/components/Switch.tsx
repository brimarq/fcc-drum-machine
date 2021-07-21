import React from 'react';
import './Switch.css';

interface SwitchProps {
  id: string;
  label: string;
  handleChange: (event: any) => void;
}

function Switch(props: SwitchProps) {
  const { id, label, handleChange } = props;

  return (
    <div className="switch-container">
      <span className="switch-title">{label}</span>
      <div className="switch">
        <input
          id={id}
          type="checkbox"
          name={label.toLowerCase()}
          className="switch-checkbox"
          defaultChecked
          onChange={handleChange}
        />
        <label className="switch-label" htmlFor={id}>
          <span className="switch-inner"></span>
          <span className="switch-switch"></span>
        </label>
      </div>
    </div>
  );
}

export default Switch;
