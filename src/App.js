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
    heroes: []
  }

  onHeroSelection = (heroes) => {
    this.setState({ heroes })
  }

  updateCurrentHero = (event) => {
    this.setState({ currentHero: event.target.text })
  }

  render() {
    const { currentHero, heroes } = this.state

    return (
      <div className="main-app">
        <aside className="main-sidebar">
          <HeroSelector
            onChange={this.onHeroSelection}
            selectedNames={heroes}
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
