import React, { Component } from 'react'
import { DetailsConsumer } from '../Details/Details'

export default class ItemWrapper extends Component {

  render () {
    const { render } = this.props

    return (
      <DetailsConsumer>
        {(context) =>
          render({
            showDetails: details => {
              context.setInnerDetails(details)
              context.toggleDetails()
            }
          })
        }
      </DetailsConsumer>
    )
  }
}
