import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.css';

function Nav(props){
    console.log(props);
        if(props.location.pathname !== "/"){ 
            return (
            <div className="navBar">
                <div className="topNav">
                    <div>
                        <img src={props.profile_pic} alt="Not Available" className="profilePic"/>
                        <p className="username">{props.username}</p>
                    </div>
                    <Link to="/dashboard"><FontAwesomeIcon icon="home" className="homeIcon"/></Link>
                    <Link to="/post/:postid"><FontAwesomeIcon icon={['far', 'plus-square']} className="plusIcon"/></Link>
                </div>
                <Link to="/"><FontAwesomeIcon icon="power-off" className="logoutIcon"/></Link>
            </div>
            )} else {return null}
}

function mapStateToProps(state){
    const {username, profile_pic} = state;

    return {
        username,
        profile_pic
    }
}

export default connect (mapStateToProps)(Nav);