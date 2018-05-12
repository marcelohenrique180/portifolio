import React, { Component } from 'react'
import Item from '../Item/Item'
import Detail from '../Details/Detail'

import img from './uni.png'
import p1 from './p1.jpg'
import mencao from './mencao.png'

class UnisinosDetails extends Component {
  render () {
    return (
      <div>
        <Detail
          img={mencao}
          title="Menção Honrosa"
          text="Recebi Menção Honrosa na XXIV Mostra UNISINOS de Iniciação Científica e Tecnológica"
          link="http://www.unisinos.br/certificados/3EF9A3AA75D8CC0C545E01BA33A9AD67632C99BF/1"
        />
        <Detail
          img={p1}
          title="Um Cliente Móvel Adaptável para Prontuários Eletrônicos Pessoais"
          text="Realizo Iniciação de Pesquisa Científica na Unisinos na Área da Computação Móvel Aplicada à Medicina."
          link="https://www.linkedin.com/in/marcelo-bairros/detail/treasury/position:1193444066/?entityUrn=urn%3Ali%3Afs_treasuryMedia%3A(ACoAACTHIF8BAEyPE3al0V7dQu8-nkEPXgD-S3M%2C1516144658697)"
        />
      </div>
    )
  }
}

export default ({ showDetails }) => (
  <div onClick={() => { showDetails(<UnisinosDetails />) }}>
    <Item title="Iniciação Científica" img={img} date="Atual" />
  </div>
)
