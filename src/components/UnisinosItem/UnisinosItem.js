import React from 'react'
import Item from '../Item/Item'

import img from './uni.png'

export default ({ showDetails }) => (
  <div onClick={() => { showDetails("Unisinos") }}>
    <Item title="Iniciação Científica" img={img} date="Atual" />
  </div>
)
