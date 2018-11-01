import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import routes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import {faHome, faPowerOff} from '@fortawesome/free-solid-svg-icons';
import store from './ducks/store';

library.add(far, faHome, faPowerOff);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            {routes}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
