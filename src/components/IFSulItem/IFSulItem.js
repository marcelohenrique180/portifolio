import React from 'react'
import Item from '../Item/Item'

import img from './ifsul.png'

export default ({ showDetails }) => (
  <div onClick={() => { showDetails("IFSul") }}>
    <Item title="Técnico em Informática" img={img} date="Atual" />
  </div>
)
