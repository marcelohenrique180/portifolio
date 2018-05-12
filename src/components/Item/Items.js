import React, { Component } from 'react'
import ItemWrapper from './ItemWrapper'
import UnisinosItem from '../Unisinos/UnisinosItem'
import './Items.css'

class Items extends Component {
  render () {
    return (
      <div>
        <ItemWrapper
          render={
            ({ showDetails }) => (
              <UnisinosItem showDetails={showDetails} />
            )
          }
        ></ItemWrapper>
      </div>
    )
  }
}

export default Items
