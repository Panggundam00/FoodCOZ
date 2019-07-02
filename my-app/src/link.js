import React from 'react' ;
import ReactDOM from 'react-dom' ;
import App from './App' ;
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ManagePage from './ManagePage';

const MyLink = (props) => {
    return(
        <Router >
            <div>
            <Route path="/" exact component={App}/>
            <Route path="/managePage" component={ManagePage}/>
            </div>
        </Router>
        
    )
}

export default MyLink