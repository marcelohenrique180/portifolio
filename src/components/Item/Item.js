import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
  render () {
    return (
      <div className="item">
        <img src={this.props.img} alt={this.props.title} className="item__img" />
        <span>{this.props.date}</span>
        <h4>{this.props.title}</h4>
      </div>
    )
  }
}
