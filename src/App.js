import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Question } from './question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Question />
      </div>
    );
  }
}

export default App;
