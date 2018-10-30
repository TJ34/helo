import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        {routes}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
