import React, { Component } from 'react';
import './Dashboard.css';

export default class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            searchInput: '',
            unchecked: true,
            posts: []
        }
    }

    render(){
        let allPosts = this.state.posts.map((post,i) => {
            return (<div>
                {post.title}
            </div>)
        })

        return (
        <div className="dashboard">
            <div className="search">
                <input onChange={(e) => this.setState({searchInput: e.target.value})}/>
                <button className="searchButton">Search</button>
                <button className="resetButton">Reset</button>
                <div> My Posts<input type="checkbox"/></div>
            </div>
        </div>
        )}
}