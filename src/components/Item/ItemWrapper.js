import React, { Component } from 'react'
import { DetailsConsumer } from '../Details/Details'

export default class ItemWrapper extends Component {

  showDetails = dt => {
  }

  render () {
    const { render } = this.props

    return (
      <DetailsConsumer>
        {(context) =>
          render({
            showDetails: context.setInnerDetails
          })
        }
      </DetailsConsumer>
    )
  }
}
