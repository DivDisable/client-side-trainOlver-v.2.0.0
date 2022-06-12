import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default function ExplainText({ taskDescription, explain }) {
  const foo = (str) => {
    const indexOfRightTag = str.indexOf('<');
    const indexOfLeftTag = str.indexOf('>');
    const textToHighlight = str.slice(indexOfRightTag + 1, indexOfLeftTag);
    const restText = str.slice(indexOfLeftTag + 1);
    return (
      <p className='tasks__description first-letter-cup'>
        <span style={{ color: '#0d6efd' }}>{textToHighlight}</span> {restText}
      </p>
    );
  };

  const popover = (
    <Popover id='popover-basic'>
      {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
      <Popover.Body className='first-letter-cup fst-italic'>
        {explain}
      </Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger trigger='click' placement='bottom' overlay={popover}>
      {foo(taskDescription)}
    </OverlayTrigger>
  );
}
