import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.css';
import {getUser} from '../../ducks/reducer';
import axios from 'axios';

class Nav extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    componentDidMount(){
        axios.post('/api/auth/me').then(response => {
            this.props.getUser(response.data[0].username, response.data[0].profile_pic)
        }) 
    }
    

    render(){
        console.log(this.props);
        if(this.props.location.pathname !== "/"){ 
            return (
            <div className="navBar">
                <div className="topNav">
                    <div>
                        <img src={this.props.profile_pic} alt="Not Available" className="profilePic"/>
                        <p className="username">{this.props.username}</p>
                    </div>
                    <Link to="/dashboard"><FontAwesomeIcon icon="home" className="homeIcon"/></Link>
                    <Link to="/post/:postid"><FontAwesomeIcon icon={['far', 'plus-square']} className="plusIcon"/></Link>
                </div>
                <Link to="/"><FontAwesomeIcon icon="power-off" className="logoutIcon"/></Link>
            </div>
            )} else {return null}
        }
}

function mapStateToProps(state){
    const {username, profile_pic} = state;

    return {
        username,
        profile_pic
    }
}

export default connect (mapStateToProps, {getUser})(Nav);