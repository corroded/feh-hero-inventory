import React from 'react'
import HeroUtils from '../utils/hero'
import SelectField from 'material-ui/SelectField'
import VirtualizedSelect from 'react-virtualized-select'

export default class HeroSelector extends React.Component {
  state = {
    selectedNames: null
  }

  render() {
    const { selectedNames } = this.state

    return(
      <div className='hero-selector'>
        <VirtualizedSelect
          autofocus
          clearable={true}
          labelKey='name'
          multi={true}
          onChange={(selectedNames) => this.setState({ selectedNames })}
          options={HeroUtils.nameList()}
          searchable={true}
          value={selectedNames}
          valueKey='name'
        />
      </div>
    )
  }
}
