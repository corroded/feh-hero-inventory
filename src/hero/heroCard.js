import React from 'react'
import HeroPortrait from './heroPortrait'

const IMAGE_HOST = "https://proving-grounds-static.ajhyndman.com/"

const HeroCard = (props) => {
  const { children } = props
  console.log(children)

  return(
    <section className="hero-card">
      <HeroPortrait imageUrl={`${IMAGE_HOST}75px-Icon_Portrait_${children.name}.png`} />
      {children.name}
    </section>
  )
}

export default HeroCard
