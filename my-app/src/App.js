import React, { Component } from 'react';
import './MEditMenu.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          
          <p>
          This is managing menu.
          </p>
          <input></input>
          <button type="button">Add Menu</button>
          
          
          
        </header>
        <header>
          <button type="button">Proceed</button>
          <button type="button">Cancel</button>
        </header>
      </div>
    );
  }
}

export default App;