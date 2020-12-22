import React, { Component } from 'react';
import styles from './ResultsBox.module.css';

import ResultCard from '.././resultCard/ResultCard'

class ResultsBox extends Component {
  render(){
    return (
      <div className={styles.resultsBox}>
        <h2>ResultsBox</h2>
        <ResultCard />
      </div>
    )

    
  }
}

export default ResultsBox;
