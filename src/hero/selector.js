import React from 'react'
import HeroUtils from '../utils/hero'
import SelectField from 'material-ui/SelectField'
import VirtualizedSelect from 'react-virtualized-select'

export default class HeroSelector extends React.Component {
  componentWillMount = () => {
    this.onChange = this.props.onChange
  }

  selectNames = (selectedNames) => {
    this.onChange(selectedNames)
  }

  render() {
    const { selectedNames } = this.props

    return(
      <div className='hero-selector'>
        <VirtualizedSelect
          autofocus
          clearable={true}
          labelKey='name'
          multi={true}
          onChange={this.selectNames}
          options={HeroUtils.nameList()}
          searchable={true}
          value={selectedNames}
          valueKey='name'
        />
      </div>
    )
  }
}
