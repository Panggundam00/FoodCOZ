import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import ManagePage from './ManagePage'
import Login from './Login'

const App = () => {
  return(
    <Router >
        <div>
        <Route path="/" exact component={Login}/>
        <Route path="/managePage" component={ManagePage}/>
        </div>
    </Router>
        
  )
}  

export default App;