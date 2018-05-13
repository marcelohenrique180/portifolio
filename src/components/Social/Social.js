import React, { Component } from 'react'
import ItemWrapper from '../Item/ItemWrapper'

import './Social.css'

class SocialDetails extends Component {
  render () {
    return (
      <React.Fragment>
        <ul className="sociald">
          <li className="sociald__item">
            <a href="https://www.linkedin.com/in/marcelo-bairros/" rel="noopener noreferrer" target="_blank" className="fa fa-linkedin"> </a>
            <span>Linkedin</span>
          </li>
          <li className="sociald__item">
            <a href="https://github.com/marcelohenrique180" rel="noopener noreferrer" target="_blank" className="fa fa-github"> </a>
            <span>Github</span>
          </li>
          <li className="sociald__item">
            <a href="mailto:marcelohs180@gmail.com" rel="noopener noreferrer" target="_blank" className="fa fa-google"> </a>
            <span>marcelohs180@gmail.com</span>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}


export default class Social extends Component {
  render () {
    return (
      <ItemWrapper
        render={
          ({ showDetails }) => (
            <div className="social">
              <button className="social__text" onClick={() => showDetails(<SocialDetails />)}>
                Onde estou?
              </button>
            </div>
          )
        }
      ></ItemWrapper>
    )
  }
}
