import React, { Component } from 'react';
import styles from './InputBox.module.css';

import { Row, Col } from 'react-bootstrap';

import Form from '../form/Form';

class InputBox extends Component {

  render(){
    return(
      <div className={styles.inputBox}>
        <Row>
          <Col>
            Parámetros
          </Col>
        </Row>
        <Form />
      </div>
    )
  }
}

export default InputBox;