import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Options.css';

export default function Options({ task }) {
  const { options } = task;
  const optionNames = Object.keys(options);

  return (
    <Container className='h-100'>
      <Row className='justify-content-center'>
        {optionNames.map((optionName, index) => {
          const isCentering = index === optionNames.length - 1;
          const isOptionsOdd = optionNames.length % 2 === 0;
          return (
            <Col
              xs={6}
              sm={4}
              lg={3}
              className='d-flex flex-column align-items-center mb-2'
              key={index}>
              <div className='option__value rounded'>
                <span>{options[optionName]}</span>
              </div>
              <div className='option__name'>{optionName}</div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
