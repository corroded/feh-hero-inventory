import React from 'react'

class HeroListItem extends React.Component {
  componentWillMount = () => {
    this.onClick = this.props.onClick.bind(this)
  }

  render() {
    const { hero } = this.props

    return(
      <li className='hero'>
        <a onClick={this.onClick}>{hero.name}</a>
      </li>
    )
  }
}

export default HeroListItem
