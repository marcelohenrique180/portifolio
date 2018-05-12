import React from 'react'
import Item from '../Item/Item'

import img from './udacity.png'

export default ({ showDetails }) => (
  <div onClick={() => { showDetails("Udacity") }}>
    <Item title="Engenheiro de Machine Learning" img={img} date="Atual" />
  </div>
)
