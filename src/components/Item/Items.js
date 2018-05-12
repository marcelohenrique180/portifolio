import React, { Component } from 'react'
import ItemWrapper from './ItemWrapper'
import UnisinosItem from '../UnisinosItem/UnisinosItem'
import UdacityItem from '../UdacityItem/UdacityItem'
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
        <ItemWrapper
          render={
            ({ showDetails }) => (
              <UdacityItem showDetails={showDetails} />
            )
          }
        ></ItemWrapper>

      </div>
    )
  }
}

export default Items
