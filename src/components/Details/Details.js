import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './Details.css'

const DetailsContext = React.createContext()

export const DetailsConsumer = DetailsContext.Consumer

export class DetailsProvider extends Component {
  state = {
    innerDetails: (<h1>Default</h1>),
    setInnerDetails: innerDetails => this.setState({ innerDetails: innerDetails })
  }

  render () {
    return (
      <DetailsContext.Provider value={this.state}>
        {this.props.children}
      </DetailsContext.Provider>
    )
  }
}


export default class Details extends Component {
  render () {
    return ReactDOM.createPortal(
      <DetailsContext.Consumer>
        {(context) => (
          <div className="details">
            <div className="details__box">
              <button className="details__close">Fechar</button>
              <section className="details__inner_content">
                {context.innerDetails}
              </section>
            </div>
          </div>
        )}
      </DetailsContext.Consumer>,
      document.getElementById('details')
    )
  }
}
