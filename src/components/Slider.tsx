import React from 'react';
import './Slider.css';

interface SliderProps {
  id: string;
  label: string;
  value: string;
  handleChange: (event: any) => void;
  min?: string;
  max?: string;
  step?: string;
}

function Slider(props: SliderProps) {
  const {
    id,
    label,
    value,
    handleChange,
    min = '0',
    max = '1',
    step = '0.01',
  } = props;
  return (
    <div className="slider-container">
      {/* <span className="slider-title">{label}</span> */}
      <label htmlFor={id} className="slider-title">
        {label}
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        className="slider"
        onChange={handleChange}
      />
    </div>
  );
}

export default Slider;
