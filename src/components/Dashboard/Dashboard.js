import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            searchInput: '',
            userposts: false,
            posts: []
        }
    }

    componentDidMount(){
        axios.get(`/api/posts?userposts=${this.state.userposts}&&string=${this.state.searchInput}`).then(response => {
            this.setState({posts: response.data})
        });
    }

    getPosts = () => {
        axios.get(`/api/posts?userposts=${this.state.userposts}&&string=${this.state.searchInput}`).then(response => {
            this.setState({posts: response.data, searchInput: ''})
        })
    }

     


    render(){
        let allPosts = this.state.posts.map((post,i) => {
            return (<Link to="" key={i} className="post">
                <h1 className="postTitle">{post.title}</h1>
                <div>
                    {post.username}
                    <img src={post.profile_pic} className="postPic" alt="not available"/>
                </div>
            </Link>)
        })

        return (
        <div className="dashboard">
            <div className="search">
                <input onChange={(e) => this.setState({searchInput: e.target.value})}/>
                <button className="searchButton" onClick={this.getPosts}>Search</button>
                <button className="resetButton">Reset</button>
                <div> My Posts<input type="checkbox" onClick={() => this.setState({userposts: !this.state.userposts})}/></div>
            </div>
            <div className="allPosts">
                {allPosts}
            </div>
        </div>
        )}
}

export default (Dashboard);