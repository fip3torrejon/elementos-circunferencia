import React from 'react';
import styles from './InputCard.module.css';

import { Row, Col } from 'react-bootstrap';

function InputCard(props){
  return(
    <Col xs={10} sm={5} className={styles.inputCard}>
      <Row>
        <Col><label htmlFor={props.name}>{props.name}</label></Col>
      </Row>
      <Row>
        <Col>
          <input 
            name={props.name}
            type="text"
            placeholder={props.placeholder}
            className={`${styles.input} text-center`}
          />
        </Col>
      </Row> 
    </Col>
  )
}

export default InputCard;