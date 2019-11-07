import React, { Component } from 'react';
import './App.css';

import TEMP_USER from './temp-data.js';
import Header from './components/Header';
import Button from './components/Button';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header user={TEMP_USER} />
        <Button
          text="Add new dish"
          color="blue"
          onClick={this.addDish}
        />
      </div>
    )
  }
}

export default App;
