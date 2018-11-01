import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import Nav from './components/Nav/Nav';
import './App.css';

export default (
    <div className="routes">
        <Route component={Nav}/>
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/post/:postid" component={Post}/>
            <Route path="/new" component={Form} />
        </Switch>
    </div>
)