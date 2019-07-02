import React from 'react';
import './App.css';
import ManagePage from './nextPage/ManagePage'

function App() {
  return (
    <div className="App">
      <div>
        <lebal>FoodCOZ</lebal>
      </div>

      <label>ID</label>

      <div>
        <input/>
      </div>

      <div>
        <lebal>Password</lebal>
      </div>

      <div>
        <input/>
      </div>

      <button><a href="/ManagePage">Submit</a></button>
    </div>
  );
}

export default App;
