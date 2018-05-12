import React from 'react'
import Item from '../Item/Item'

import img from './asav.png'

export default ({ showDetails }) => (
  <div onClick={() => { showDetails("Asav") }}>
    <Item title="Estágio Desenvolvedor Web" img={img} date="Fev 2018" />
  </div>
)
