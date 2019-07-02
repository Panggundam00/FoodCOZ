import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import ManagePage from './ManagePage'
import Login from './Login'
import EditTable from './EditTable'

const App = () => {
  return(
    <Router >
        <div>
        <Route path="/" exact component={Login}/>
        <Route path="/managePage" component={ManagePage}/>
        <Route path="/editTable" component={EditTable}/>
        </div>
    </Router>
        
  )
}  

export default App;