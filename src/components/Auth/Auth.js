import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Auth.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';

class Auth extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    createUser = (username, password) => {
        axios.post('/api/auth/register', {username, password}).then(response => {
            this.props.getUser(response.data[0].username, response.data[0].profile_pic)
        }).then(this.props.history.push("/dashboard"))
    }

    logIn = (username, password) => {
        axios.post('/api/auth/login', {username, password}).then(response => {
            this.props.getUser(response.data[0].username, response.data[0].profile_pic)
        }).then(this.props.history.push("/dashboard"))   
    }

    render(){
        const {username, password} = this.state;

        return <div className="background">
            <div className="authContainer">
                <FontAwesomeIcon icon={['far', 'smile-wink']} className="winkIcon"/>
                <h1 className="heloText">Helo</h1>
                <p className="inputBox">Username: <input onChange={(e) => this.setState({username: e.target.value})}/></p>
                <p className="inputBox">Password: <input onChange={(e) => this.setState({password: e.target.value})}/></p>
                <div>
                    <button className="buttons" onClick={() => this.logIn(username, password)}>Login</button>
                    <button className="buttons" onClick={() => this.createUser(username, password)}>Register</button>
                </div>
            </div>
        </div>
    }
}


export default connect (null, {getUser})(Auth);