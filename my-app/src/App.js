import React, {Component} from 'react';
import './App.css';

class App extends Component{
  render(){
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

}

export default App;
