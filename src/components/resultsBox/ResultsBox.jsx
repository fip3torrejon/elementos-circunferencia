import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ResultsBox.module.css';

import ResultCard from '.././resultCard/ResultCard'
import { Row, Col } from 'react-bootstrap';

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
            value={this.arco(radio, angulo)}
          />
          <ResultCard
            name="cuerda"
            value={this.cuerda(radio, angulo)}
          />
          <ResultCard
            name="altura"
            value={this.altura(radio,angulo)}
          />
          <ResultCard
            name="perimetro"
            value={this.perimetro(radio, angulo)}/>
          <ResultCard
            name="area"
            value={this.area(radio, angulo)}/>
        </Row>
      </div>
    )    
  }

  arco = (r,t) => ( Math.round(1000 * Math.PI * r * t / 180 ) / 1000 )

  cuerda = (r,t) => ( Math.round(1000 * 2 * r * Math.sin(t * Math.PI / 180 / 2) ) / 1000)

  altura = (r,t) => ( Math.round(1000 * r * (1 - Math.cos( t * Math.PI / 180 / 2)) ) / 1000)

  perimetro = (r,t) => ( Math.round( 1000 * ( Math.PI * t / 180 + 2 * Math.sin( t * Math.PI / 180 / 2 ) * r)) / 1000)

  area = (r,t) => ( Math.round( 1000 * (Math.pow(r, 2) * (Math.PI * t / 180 - Math.sin(t * Math.PI / 180)) / 2)) / 1000)
}

const mapStateToProps = state => {
  return {
    radio: state.radio,
    angulo: state.angulo
  }
}

export default connect(mapStateToProps, null)(ResultsBox);
