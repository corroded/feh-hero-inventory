import React from 'react'

class HeroCard extends React.Component {
  render() {
    return(
      <section className="hero-card">
        {this.props.children}
      </section>
    )
  }
}

export default HeroCard
