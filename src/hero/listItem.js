import React from 'react'
import NumericInput from 'react-numeric-input'

class HeroListItem extends React.Component {
  componentWillMount = () => {
    this.onClick = this.props.onClick.bind(this)
  }

  render() {
    const { hero } = this.props

    return(
      <tr className='hero-details'>
        <td className='name'>
          <a onClick={this.onClick}>{hero.name}</a>
        </td>
      </tr>
    )
  }
}

export default HeroListItem
