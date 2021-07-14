import React from 'react';
import DrumMachine from './components/DrumMachine';
import './App.css';

class App extends React.Component {
  render() {
    // console.log("App render called");
    return (
      <div className="App">
        <header className="App-header"></header>
        <main className="App-main">
          <DrumMachine />
        </main>
        <footer className="App-footer"></footer>
      </div>
    );
  }
}

export default App;
