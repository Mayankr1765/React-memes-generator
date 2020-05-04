import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import MemeGenerator from "./MemeGenerator"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header
      name="Meme generator"
      />
      <MemeGenerator
      />
       
      </div>
    );
  }
}

export default App;
