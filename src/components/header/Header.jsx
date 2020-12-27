import React from 'react';
import styles from './Header.module.css';

import { Row, Col } from 'react-bootstrap';

function Header(props) {
  return (
    <div className={styles.header}>
      <Row>
        <Col>
          ELEMENTOS DE LA CIRCUNFERENCIA
        </Col>
      </Row>
    </div>
  )
}

export default Header;
