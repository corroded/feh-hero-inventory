import React from 'react'

import {List, ListItem, makeSelectable} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

import { HeroListItem } from './'

export default class HeroList extends React.Component  {
  componentWillMount = () => {
    this.onSelect = this.props.onSelect
  }

  render() {
    const { heroes } = this.props

    return(
      <table className='hero-list'>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map((hero, id) => {
            return(
              <HeroListItem
                hero={hero}
                key={id}
                onClick={this.onSelect}
              />
            )
          })}
        </tbody>
      </table>
    )
  }
}
