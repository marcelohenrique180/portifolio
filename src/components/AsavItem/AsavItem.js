import React, { Component } from 'react'
import Item from '../Item/Item'
import Detail from '../Details/Detail'

import img from './asav.png'

class AsavDetails extends Component {
  render () {
    return (
      <div>
        <Detail
          img={img}
          title="Estágio Desenvolvedor Web"
          text="Ajudei minha equipe a desenvolver e manter os sistemas da ASAV que cobrem a Unisinos, IHU e muitas outras instituições que atendemos. As principais tecnologias com as quais trabalhei foram PHP, MySQL, CSS, Javascript, JQuery e Lodash. Estive na equipe da Operação principalmente."
          date="Fev 2018"
        />
      </div>
    )
  }
}

export default ({ showDetails }) => (
  <div onClick={() => { showDetails(<AsavDetails />) }}>
    <Item title="Estágio Desenvolvedor Web" img={img} date="Fev 2018" />
  </div>
)
