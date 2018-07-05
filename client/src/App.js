import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/header';
import PagePanel from './components/pagePanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <PagePanel />
        <PagePanel />
      </div>
    );
  }
}

export default App;
