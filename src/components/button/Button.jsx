import React from 'react';
import styles from './Button.module.css';

function Button(props) {
  return(
    <button className={styles.send} type = "submit">
      {props.title}
    </button>
  )
}

export default Button;