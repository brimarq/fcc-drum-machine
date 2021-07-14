import React from 'react';
import Pad from './Pad';
import './PadBank.css';

interface PadBankProps {
  isPwrOn: boolean;
  volume: number;
  isBank1: boolean;
  displaySoundName: (name: string) => void;
}

const data = {
  baseUrl: 'https://s3.amazonaws.com/freecodecamp/drums/',
  bank1: [
    { kbdKey: 'Q', keyCode: 81, name: 'Heater 1', sound: 'Heater-1.mp3' },
    { kbdKey: 'W', keyCode: 87, name: 'Heater 2', sound: 'Heater-2.mp3' },
    { kbdKey: 'E', keyCode: 69, name: 'Heater 3', sound: 'Heater-3.mp3' },
    { kbdKey: 'A', keyCode: 65, name: 'Heater 4', sound: 'Heater-4_1.mp3' },
    { kbdKey: 'S', keyCode: 83, name: 'Clap', sound: 'Heater-6.mp3' },
    { kbdKey: 'D', keyCode: 68, name: 'Open HH', sound: 'Dsc_Oh.mp3' },
    { kbdKey: 'Z', keyCode: 90, name: "Kick n' Hat", sound: 'Kick_n_Hat.mp3' },
    { kbdKey: 'X', keyCode: 88, name: 'Kick', sound: 'RP4_KICK_1.mp3' },
    { kbdKey: 'C', keyCode: 67, name: 'Closed HH', sound: 'Cev_H2.mp3' },
  ],
  bank2: [
    { kbdKey: 'Q', keyCode: 81, name: 'Chord 1', sound: 'Chord_1.mp3' },
    { kbdKey: 'W', keyCode: 87, name: 'Chord 2', sound: 'Chord_2.mp3' },
    { kbdKey: 'E', keyCode: 69, name: 'Chord 3', sound: 'Chord_3.mp3' },
    { kbdKey: 'A', keyCode: 65, name: 'Shaker', sound: 'Give_us_a_light.mp3' },
    { kbdKey: 'S', keyCode: 83, name: 'Open HH Dry', sound: 'Dry_Ohh.mp3' },
    { kbdKey: 'D', keyCode: 68, name: 'Closed HH', sound: 'Bld_H1.mp3' },
    {
      kbdKey: 'Z',
      keyCode: 90,
      name: 'Punchy Kick',
      sound: 'punchy_kick_1.mp3',
    },
    { kbdKey: 'X', keyCode: 88, name: 'Side Stick', sound: 'side_stick_1.mp3' },
    { kbdKey: 'C', keyCode: 67, name: 'Snare', sound: 'Brk_Snr.mp3' },
  ],
};

export default class PadBank extends React.PureComponent<PadBankProps> {
  render() {
    // console.log("PadBank render called");
    let bank = this.props.isBank1 ? data.bank1 : data.bank2;
    const baseUrl = 'https://s3.amazonaws.com/freecodecamp/drums/';
    return (
      <div id="pad-bank">
        {bank.map(pad => (
          <Pad
            key={pad.name.replace(/[^A-Za-z0-9]/g, '').toLowerCase()}
            padId={pad.name.replace(/[^A-Za-z0-9]/g, '').toLowerCase()}
            name={pad.name}
            kbdKey={pad.kbdKey}
            keyCode={pad.keyCode}
            audioId={pad.kbdKey}
            source={baseUrl + pad.sound}
            volume={this.props.volume}
            displaySoundName={this.props.displaySoundName}
            isPwrOn={this.props.isPwrOn}
          />
        ))}
      </div>
    );
  }
}
