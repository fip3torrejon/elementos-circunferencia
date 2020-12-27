import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Form.module.css';

import Button from '../button/Button.jsx';
import InputCard from '../inputCard/InputCard.jsx';

import { Row, Col } from 'react-bootstrap';

class Form extends Component {

  handleSubmit(e) {
    e.preventDefault();
  }

  render(){
    return (
      <Row noGutters="true" className={styles.form}>
        <Col>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <Row className="justify-content-around">
              <InputCard
                name="radio"
                value={this.props.radio}
                placeholder="0" />
              <InputCard
                name="angulo"
                value={this.props.angulo}
                placeholder="0" />
            </Row>
            <Row noGutters="true" className="justify-content-center">
              <Button title="calcular" />
            </Row>
          </form>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return{
    radio: state.radio,
    angulo: state.angulo
  }
}


export default connect(mapStateToProps, null)(Form);
