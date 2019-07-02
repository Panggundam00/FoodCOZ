import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import ManagePage from './ManagePage'
import Login from './Login'

<<<<<<< HEAD
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

=======
const App = () => {
  return(
    <Router >
        <div>
        <Route path="/" exact component={Login}/>
        <Route path="/managePage" component={ManagePage}/>
        </div>
    </Router>
        
  )
>>>>>>> pang
}

export default App;
