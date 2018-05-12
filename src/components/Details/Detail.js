import React, { Component } from 'react'
import './Detail.css'

export default class Detail extends Component {
  render () {
    return (
      <a className="detail" href={this.props.link} target="_blank">
        <img src={this.props.img} alt="detail" className="detail__img" />
        <h3 className="detail__title">{this.props.title}</h3>
        <p className="detail__text">{this.props.text}</p>
        <span className="detail__date" >{this.props.date}</span>
      </a>
    )
  }
}
