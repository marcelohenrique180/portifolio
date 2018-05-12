import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './Details.css'

const DetailsContext = React.createContext()

export const DetailsConsumer = DetailsContext.Consumer

export class DetailsProvider extends Component {
  state = {
    displayDetails: true,
    innerDetails: <div />,
    toggleDetails: () => this.setState({ displayDetails: !this.state.displayDetails }),
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
          context.displayDetails ?
            <React.Fragment>
              <div className="details">
                <div className="details__box">
                  <button onClick={context.toggleDetails} className="details__close">Fechar</button>
                  <section className="details__inner_content">
                    {context.innerDetails}
                  </section>
                </div>
                <div onClick={context.toggleDetails} className="details__overlay"></div>
              </div>
            </React.Fragment>
            : <React.Fragment />
        )}
      </DetailsContext.Consumer>,
      document.getElementById('details')
    )
  }
}
