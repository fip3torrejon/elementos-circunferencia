import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ResultsBox.module.css';

import ResultCard from '.././resultCard/ResultCard'
import { Row, Col } from 'react-bootstrap';

import * as ops from '../../modules/operaciones'

class ResultsBox extends Component {
  render(){
    const { radio, angulo } = this.props;
    return (
      <div className={`${styles.resultsBox}`}>
        <Row>
          <Col>Resultados</Col>
        </Row>
        <Row className={`${styles.resultsArea} justify-content-between`}>
          <ResultCard
            name="arco"
            value={ops.getArco(radio, angulo)}
          />
          <ResultCard
            name="cuerda"
            value={ops.getCuerda(radio, angulo)}
          />
          <ResultCard
            name="altura"
            value={ops.getAltura(radio,angulo)}
          />
          <ResultCard
            name="perimetro"
            value={ops.getPerimetro(radio, angulo)}/>
          <ResultCard
            name="area"
            value={ops.getArea(radio, angulo)}/>
        </Row>
      </div>
    )    
  }
}

const mapStateToProps = state => {
  return {
    radio: state.radio,
    angulo: state.angulo
  }
}

export default connect(mapStateToProps, null)(ResultsBox);
