import React, { Component } from 'react';
import styles from './Box.module.css';

import { Container } from 'react-bootstrap';

import Header from '../header/Header';
import InputBox from '../inputBox/InputBox';
import ResultsBox from '../resultsBox/ResultsBox';
import Footer from '../footer/Footer';

class Box extends Component {
  render(){
    return(
      <Container className={styles.container}>
        <Header />
        <InputBox />
        <ResultsBox />
        <Footer />
      </Container>
    )
  }
}

export default Box;