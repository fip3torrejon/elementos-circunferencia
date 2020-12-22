import React, { Component } from 'react';
import styles from './Container.module.css';

import Header from '../header/Header';
import InputBox from '../inputBox/InputBox';
import ResultsBox from '../resultsBox/ResultsBox';
import Footer from '../footer/Footer';

class Container extends Component {
  render(){
    return(
      <div className={styles.container}>
        <Header />
        <InputBox />
        <ResultsBox />
        <Footer />
      </div>
    )
  }
}

export default Container;