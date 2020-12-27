import React, { Component } from 'react';
import styles from './Form.module.css';

import Button from '../button/Button.jsx';
import InputCard from '../inputCard/InputCard.jsx';

import { Row, Col } from 'react-bootstrap';

class Form extends Component {

  submitHandler(e) {
    e.preventDefault();
  }

  render(){
    return (
      <Row noGutters="true" className={styles.form}>
        <Col>
          <form onSubmit={this.submitHandler} className={styles.form}>
            <Row className="justify-content-around">
              <InputCard name="radio" placeholder="0" />
              <InputCard name="angulo" placeholder="0" />
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

export default Form;
