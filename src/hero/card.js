import React from 'react'
import HeroPortrait from './portrait'

const HeroCard = (props) => {
  const { children } = props
  console.log(children)

  return(
    <section className="hero-card">
      <HeroPortrait />
      {children.name}
    </section>
  )
}

export default HeroCard
