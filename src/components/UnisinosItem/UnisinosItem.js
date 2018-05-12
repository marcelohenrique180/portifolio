import React from 'react'
import Item from '../Item/Item'

import uniimg from './uni.gif'

export default ({ showDetails }) => (
  <div onClick={() => { showDetails("Unisinos") }}>
    <Item title="Iniciação Científica" img={uniimg} date="hoje" />
  </div>
)
