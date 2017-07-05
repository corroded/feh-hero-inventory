import React from 'react'
import HeroPortrait from './portrait'
import HeroUtils from '../utils/hero'

class HeroCard extends React.Component {

  render() {
    const { hero } = this.props
    const currentHero = HeroUtils.getHero(hero)
    const heroName = (currentHero) ? currentHero.name : ''

    const portrait = HeroUtils.getPortraitFor(hero)

    return(
      <section className='hero-card'>
        <HeroPortrait imageUrl={portrait} />
        <div className='hero-details'>
          <h4 className='name'>{heroName}</h4>
        </div>
      </section>
    )
  }
}

export default HeroCard
