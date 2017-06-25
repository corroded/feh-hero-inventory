import React, { Component } from 'react';

import './App.css';
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

import { HeroList, HeroSelector } from './hero'
import HeroUtils from './utils/hero'

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <aside className="main-sidebar">
          <HeroSelector />
        </aside>
      </div>
    )
  }
}

export default App
