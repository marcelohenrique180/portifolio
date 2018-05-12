import React, { Component } from 'react'
import ItemWrapper from './ItemWrapper'
import UnisinosItem from '../UnisinosItem/UnisinosItem'
import UdacityItem from '../UdacityItem/UdacityItem'
import AsavItem from '../AsavItem/AsavItem'
import IFSulItem from '../IFSulItem/IFSulItem'
import './Items.css'

class Items extends Component {
  render () {
    return (
      <div className="items">
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
        <ItemWrapper
          render={
            ({ showDetails }) => (
              <IFSulItem showDetails={showDetails} />
            )
          }
        ></ItemWrapper>
        <ItemWrapper
          render={
            ({ showDetails }) => (
              <AsavItem showDetails={showDetails} />
            )
          }
        ></ItemWrapper>
      </div>
    )
  }
}

export default Items
