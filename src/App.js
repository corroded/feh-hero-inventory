import React, { Component } from 'react';

import './App.css';
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

import {
  HeroCard,
  HeroList,
  HeroSelector
} from './hero'
import HeroUtils from './utils/hero'

class App extends Component {
  state = {
    currentHero: null,
    selectedHero: null,
    heroes: []
  }

  addHero = (hero) => {
  }

  onHeroSelection = (hero) => {
    this.setState({ selectedHero: hero })
  }

  updateCurrentHero = (event) => {
    this.setState({ currentHero: event.target.text })
  }

  render() {
    const { currentHero, heroes, selectedHero } = this.state

    return (
      <div className="main-app">
        <aside className="main-sidebar">
          <HeroSelector
            onAddHero={this.addHero}
            onChange={this.onHeroSelection}
            selectedHero={selectedHero}
          />
          <HeroList
            heroes={heroes}
            onSelect={this.updateCurrentHero}
          />
        </aside>

        <HeroCard hero={currentHero} />
      </div>
    )
  }
}

export default App
