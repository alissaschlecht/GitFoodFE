import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';

import TEMP_USER from './temp-data.js';
import Header from './components/Header';
import Home from './pages/Home';
import AddDish from './pages/AddDish';
import ViewDish from './pages/ViewDish';

class App extends Component {
  render(){
    return (
      <>
        <Header user={ TEMP_USER } />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={AddDish} />
              <Route exact path="/dish/:id" component={ViewDish} />
            </Switch>
          </div>
        </Router>
      </>
    )
  }
}

export default App;
