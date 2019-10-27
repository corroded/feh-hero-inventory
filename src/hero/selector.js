import React from 'react'
import HeroUtils from '../utils/hero'
import SelectField from 'material-ui/SelectField'
import VirtualizedSelect from 'react-virtualized-select'

export default class HeroSelector extends React.Component {
  componentWillMount = () => {
    this.onChange = this.props.onChange
    this.onAddHero = this.props.onAddHero
  }

  selectName = (selectedName) => {
    this.onChange(selectedName)
  }

  addHeroToList = () => {
    // I think this is where we use redux:
    // get hero from VirtualizedSelect and pass it up to main app
    // since main app keeps state of the hero list
    // this.onAddHero()
  }

  render() {
    const { selectedHero } = this.props
    const selectedName = selectedHero ? selectedHero.name : null

    return(
      <div className='hero-selector'>
        <VirtualizedSelect
          autofocus
          clearable={true}
          labelKey='name'
          onChange={this.selectName}
          options={HeroUtils.nameList()}
          searchable={true}
          value={selectedName}
          valueKey='name'
        />
        <button
          className='add-hero'
          onClick={this.addHeroToList}
        >
          Add Hero
        </button>
      </div>
    )
  }
}
