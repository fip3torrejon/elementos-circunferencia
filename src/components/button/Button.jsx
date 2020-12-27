import React from 'react';
import { Col } from 'react-bootstrap';
import styles from './Button.module.css';

function Button(props) {
  return(
    <Col xs={1}>
      <button 
        className={styles.send} 
        type="submit"
        onClick={clickHandler}>
        {props.title}
      </button>
    </Col>
  )
}

function clickHandler(e) {
  console.log("clicked!!")
}

export default Button;