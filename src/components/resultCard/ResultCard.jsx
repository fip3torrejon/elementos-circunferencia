import React from 'react';
import styles from './ResultCard.module.css';

function ResultCard(props) {
  return(
    <div className={styles.resultCard}>
      <h3>{props.title}</h3>
      <p className={styles.result}>{props.value}</p>
    </div>
  )
}

export default ResultCard;