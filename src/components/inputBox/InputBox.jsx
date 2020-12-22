import React, { Component } from 'react';
import styles from './InputBox.module.css';

import Form from '../form/Form'

class InputBox extends Component {
  render(){
    return(
      <div className={styles.inputBox}>
        <h2>InputBox</h2>
        <Form />
      </div>
    )
  }
}

export default InputBox;