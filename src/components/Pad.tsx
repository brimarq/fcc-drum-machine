import React from 'react';
import './Pad.css';

interface PadProps {
  key: string; // {pad.name.replace(/[^A-Za-z0-9]/g, '').toLowerCase()}
  padId: string; // {pad.name.replace(/[^A-Za-z0-9]/g, '').toLowerCase()}
  name: string; // {pad.name}
  kbdKey: string; // {pad.kbdKey}
  keyCode: number; // {pad.keyCode}
  audioId: string; // {pad.kbdKey}
  source: string; // {baseUrl + pad.sound}
  volume: number; // {this.props.volume}
  displaySoundName: (name: string) => void; // {this.props.displaySoundName}
  isPwrOn: boolean; // {this.props.isPwrOn}
}
const defaultPadClassName = 'drum-pad';
const clickedPadClassName = 'drum-pad drum-pad-clicked';

export default class Pad extends React.PureComponent<
  PadProps,
  { padClassName: string }
> {
  private audioElement = React.createRef<HTMLAudioElement>();

  constructor(props: PadProps) {
    super(props);
    this.state = {
      padClassName: defaultPadClassName,
    };
    // this.audioElement = React.createRef<HTMLAudioElement>();
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setPadClassName = this.setPadClassName.bind(this);
  }

  componentDidMount() {
    this.audioElement.current!.volume = this.props.volume;
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    this.audioElement.current!.volume = this.props.volume;
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  setPadClassName(str: string) {
    this.setState(() => ({ padClassName: str }));
  }

  handleClick() {
    if (this.props.isPwrOn) {
      this.audioElement.current!.play();
      this.props.displaySoundName(this.props.name);
      this.setPadClassName(clickedPadClassName);
      setTimeout(this.setPadClassName, 80, defaultPadClassName);
    }
  }

  handleKeyDown(e: any) {
    if (e.keyCode === this.props.keyCode) {
      this.audioElement.current!.click();
    }
  }

  render() {
    // console.log("Pad " + this.props.kbdKey + " render called");
    return (
      <div
        id={this.props.padId}
        className={this.state.padClassName}
        data-name={this.props.name}
        onClick={this.handleClick}
        // onKeyDown={this.handleKeyDown}
      >
        {this.props.kbdKey}
        <audio
          id={this.props.audioId}
          className="clip"
          src={this.props.source}
          data-type="audio/mpeg"
          ref={this.audioElement}
        ></audio>
      </div>
    );
  }
}
