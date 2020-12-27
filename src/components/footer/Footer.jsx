import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './Footer.module.css';

function Footer(props) {
  return (
    <div  className={styles.footer}>
      <Row noGutters="true" className="justify-content-end">
        <Col xs={6} className="text-right">
          <a
            href="http://github.com/fip3torrejon"
            target="_blank"
            rel="noreferrer"
          >
            703.cl
          </a>
        </Col>
      </Row>
    </div>
    
  )
}

export default Footer;
