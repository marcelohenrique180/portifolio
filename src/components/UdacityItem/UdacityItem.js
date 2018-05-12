import React, { Component } from 'react'
import Item from '../Item/Item'
import Detail from '../Details/Detail'

import img from './udacity.png'
import p1 from './p1.png'
import p2 from './p2.png'
import p3 from './p3.png'

class UdacityDetails extends Component {
  render () {
    return (
      <div>
        <Detail
          img={p1}
          title="Model Evaluation & Validation"
          text="O objetivo desse projeto foi de avaliar o desempenho e o poder de estimativa de um modelo que foi treinado e testado em dados coletados dos imóveis dos subúrbios de Boston, Massachusetts."
          link="https://github.com/marcelohenrique180/machine-learning-nanodegree/blob/master/boston_housing/boston_housing_PT.ipynb"
        />
        <Detail
          img={p2}
          title="Sistema de Intervenção para Estudantes"
          text="O objetivo desse projeto é identificar estudantes que possam precisar de intervenção antecipada antes de serem reprovados."
          link="https://github.com/marcelohenrique180/machine-learning-nanodegree/blob/master/student_intervention/student_intervention_PT.ipynb"
        />
        <Detail
          img={p3}
          title="Segmentos de Clientela"
          text="O objetivo desse projeto foi de avaliar o desempenho e o poder de estimativa de um modelo que foi treinado e testado em dados coletados dos imóveis dos subúrbios de Boston, Massachusetts."
          link="https://github.com/marcelohenrique180/machine-learning-nanodegree/blob/master/customer_segments/customer_segments_PT.ipynb"
        />
      </div>
    )
  }
}


export default ({ showDetails }) => (
  <div onClick={() => { showDetails(<UdacityDetails />) }}>
    <Item title="Engenheiro de Machine Learning" img={img} date="Atual" />
  </div>
)
