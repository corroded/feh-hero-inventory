import React, { Component } from 'react';
import './App.css';
import * as stats  from 'fire-emblem-heroes-stats'
import { HeroList } from './hero'

class App extends Component {
  render() {
    const heroes = stats.getAllHeroes()

    // function to get heroes with a certain skill + rarity
    const kek = heroes.filter((hero) => {
      return hero.skills.filter((skill) => {
        return skill.name === "Fury 3" && skill.rarity === 4
      }).length > 0
    })

    console.log(kek)

    return (
      <div className="App">
        {/* <HeroList heroes={heroes} /> */}
      </div>
    )
  }
}

export default App
