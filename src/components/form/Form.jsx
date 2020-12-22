import React from 'react';
import styles from './Form.module.css';

import Button from '../button/Button';

function Form(props) {
  return (
    <div className={styles.form}>
      <input 
        id="input"
        type="text"
        placeholder="input vacio"
      />
      <Button title="calcular" />
    </div>
  )
}

export default Form;
