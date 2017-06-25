import React from 'react'
import * as stats  from 'fire-emblem-heroes-stats'

import {List, ListItem, makeSelectable} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

const HeroList = (props) => {
  // const { heroes } = props
  const heroes = stats.getAllHeroes()

  return(
    <ul className='hero-list'>
      {heroes.map((hero, id) => {
        return(
          <li className='hero' key={id}>
            {hero.name}
          </li>
        )
      })}
    </ul>
  )
}

export default HeroList
