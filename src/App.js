import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import TEMP_USER from './temp-data.js';
import Header from './components/Header';
import Home from './pages/Home';
import Dishes from './pages/AddDish';

class App extends Component {
  render(){
    return (
      <>
        <Header user={ TEMP_USER } />
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/add">
                <Dishes />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    )
  }
}

export default App;
