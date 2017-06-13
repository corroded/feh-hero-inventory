import React from 'react'

const HeroPortrait = (props) => {
  const { imageUrl } = props

  return(
    <img
      className="hero-portrait"
      src={imageUrl} />
  )
}

export default HeroPortrait
