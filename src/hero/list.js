import React from 'react'
import HeroCard from './card'

const HeroList = (props) => {
  const { heroes } = props

  return(
    <ul className='hero-list'>
      {heroes.map((hero, id) => {
        return(
          <li className='hero' key={id}>
            <HeroCard>
              {hero}
            </HeroCard>
          </li>
        )
      })}
    </ul>
  )
}

export default HeroList
