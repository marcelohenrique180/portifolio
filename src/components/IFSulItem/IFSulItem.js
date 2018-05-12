import React, { Component } from 'react'
import Item from '../Item/Item'
import Detail from '../Details/Detail'

import img from './ifsul.png'
import p1 from './p1.jpeg'

class IFSulDetails extends Component {
  render () {
    return (
      <div>
        <Detail
          img={p1}
          title="Sistema de Gestão de Requerimentos Aluno-Cordenação"
          text={<span>Esse projeto ainda não foi implementado no câmpus!<br />As tecnologias utilizadas foram React/Redux/Flow, Java com Spring Boot</span>}
          link="https://github.com/marcelohenrique180/ifsul-system/tree/develop"
        />
      </div>
    )
  }
}



export default ({ showDetails }) => (
  <div onClick={() => { showDetails(<IFSulDetails />) }}>
    <Item title="Técnico em Informática" img={img} date="Atual" />
  </div>
)
