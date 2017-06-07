import React, { Component } from 'react';
import './App.css';
import heroes from 'fire-emblem-heroes-stats'
import { HeroCard } from './hero'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroCard />
      </div>
    )
  }
}

export default App
