import React from 'react';
import { connect } from 'react-redux';
import { setRadio, setAngulo } from '../../actions';
import styles from './InputCard.module.css';

import { Row, Col } from 'react-bootstrap';

function InputCard(props){

  const handleChange = (e) => {
    if(props.name === "radio"){
      props.setRadio( parseInt(e.target.value) )
    } else if(props.name === "angulo"){
      props.setAngulo( parseInt(e.target.value) )
    }
    
  }
  
  return(
    <Col xs={10} sm={5} className={styles.inputCard}>
      <Row>
        <Col><label htmlFor={props.name}>{props.name}</label></Col>
      </Row>
      <Row>
        <Col>
          <input
            onChange={handleChange} 
            name={props.name}
            type="text"
            placeholder={props.placeholder}
            className={`${styles.input} text-center`}
            value={props.value}
          />
        </Col>
      </Row> 
    </Col>
  )
}

const mapDispatchToProps = {
  setRadio,
  setAngulo,
}  

export default connect(null, mapDispatchToProps)(InputCard);