import React from 'react' ;
import ReactDOM from 'react-dom' ;
import App from '.App' ;
import {Router, Route, Link, browserHistory} from 'react-router'
import ManagePage from './ManagePage';

ReactDOM.render{
    <Router history="{browserHistory}">
        <Route path="/" component={App}/>
        <Route path="/ManagePage" component={ManagePage}/>
    </Router>,document.getElementById('root') 
}