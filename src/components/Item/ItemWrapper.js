import React, { Component } from 'react'

export default class ItemWrapper extends Component {
  
  showDetails = dt => {
    console.log('showing details for:', dt)
  }

  render() {
    const { render } = this.props

    return (
      <div>
        {
          render({
            showDetails: this.showDetails
          })
        }
      </div>
    )
  }
}
