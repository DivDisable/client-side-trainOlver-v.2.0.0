import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { heighlighKeyWord } from '../../utilize.js';

export default function ExplainText({ taskDescription, explain }) {
  const popover = (
    <Popover id='popover-basic'>
      <Popover.Body className='first-letter-cup fst-italic'>
        {explain}
      </Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger trigger='click' rootClose placement='bottom' overlay={popover}>
      {heighlighKeyWord(taskDescription)}
    </OverlayTrigger>
  );
}
