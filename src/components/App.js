import React, { Component } from 'react';
import logo from 'logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{'TresTres'}</h1>
        </header>
        <p className="App-intro">
          {'Hi, my name is Ez.'}
        </p>
      </div>
    );
  }
}

export default App;
