import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './ResultCard.module.css';

function ResultCard(props) {
  return(
    <Col xs={10} sm={2} className={styles.resultCard}>
      <Row>
        <Col>{props.name}</Col>
      </Row>
      <Row>
        <Col className="text-center">
          <div className={styles.result}>
            {props.value}
          </div>
        </Col>
      </Row> 
    </Col>
  )
}

export default ResultCard;