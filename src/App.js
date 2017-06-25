import React, { Component } from 'react';
import './App.css';
import { HeroList } from './hero'
import HeroUtils from './utils/hero'

class App extends Component {
  render() {
    const kek = HeroUtils.heroesForSkill('Fury 3')

    console.log(kek)

    return (
      <div className="App">
        {/* <HeroList heroes={heroes} /> */}
      </div>
    )
  }
}

export default App
