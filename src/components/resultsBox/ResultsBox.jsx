import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ResultsBox.module.css';

import ResultCard from '.././resultCard/ResultCard'
import { Row, Col } from 'react-bootstrap';

class ResultsBox extends Component {
  render(){
    return (
      <div className={`${styles.resultsBox}`}>
        <Row>
          <Col>Resultados</Col>
        </Row>
        <Row className={`${styles.resultsArea} justify-content-between`}>
          <ResultCard name="arco" value="0" />
          <ResultCard name="cuerda" value="0"/>
          <ResultCard name="altura" value="0"/>
          <ResultCard name="perimetro" value="0"/>
          <ResultCard name="area" value="0"/>
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
