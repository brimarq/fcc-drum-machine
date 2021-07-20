import React from 'react';
import './Pad.css';

// React.Dispatch<React.SetStateAction<string>>

interface PadProps {
  id: string;
  name: string;
  kbdKey: string;
  keyCode: number;
  source: string;
  volume: number;
  // displaySoundName: (name: string) => void;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  isPwrOn: boolean;
}

function Pad(props: PadProps) {
  const { id, name, kbdKey, keyCode, source, volume, setDisplay, isPwrOn } =
    props;

  const audioRef = React.useRef<HTMLAudioElement>(null);
  const padBtnRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      // keydown adds class simulate buton click; but, keyup actually trigggers click
      // then removes active class
      function handleKeyup(_: KeyboardEvent) {
        padBtnRef.current!.classList.remove('active');
        padBtnRef.current!.click();
        window.removeEventListener('keyup', handleKeyup, true);
      }

      // KeyboardEvent.keyCode is depreciated
      // ref: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
      if (event.defaultPrevented) {
        return; // Should do nothing if the default action has been cancelled
      }

      let handled = false;
      if (event.key !== undefined && isPwrOn) {
        // Handle the event with KeyboardEvent.key and set handled true.
        if (event.key.toUpperCase() === kbdKey) {
          padBtnRef.current!.classList.add('active');
          window.addEventListener('keyup', handleKeyup, true);
          handled = true;
        }
      } else if (event.keyCode !== undefined && isPwrOn) {
        // Handle the event with KeyboardEvent.keyCode and set handled true.
        if (event.keyCode === keyCode) {
          padBtnRef.current!.classList.add('active');
          window.addEventListener('keyup', handleKeyup, true);
          handled = true;
        }
      }

      if (handled) {
        // Suppress "double action" if event handled
        event.preventDefault();
      }
    }

    window.addEventListener('keydown', handleKeydown, true);
    return () => {
      // cleanup event listener on unmount
      window.removeEventListener('keydown', handleKeydown, true);
    };
  }, [kbdKey, keyCode, isPwrOn]);

  React.useEffect(() => {
    audioRef.current!.volume = volume;
  }, [volume]);

  function handleClick() {
    if (isPwrOn) {
      audioRef.current!.play();
      setDisplay(name);
    }
  }

  return (
    <button id={id} className="drum-pad" onClick={handleClick} ref={padBtnRef}>
      {kbdKey}
      <audio id={kbdKey} className="clip" src={source} ref={audioRef}></audio>
    </button>
  );
}

export default Pad;
