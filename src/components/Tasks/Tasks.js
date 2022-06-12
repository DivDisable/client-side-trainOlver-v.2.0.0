import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import Options from '../Options/Options';
import ExplainText from '../ExplainText/ExplainText';

import './Tasks.css';

export default function Tasks({ tasks }) {
  return (
    <Carousel
      variant='dark'
      className='tasks d-flex flex-column-reverse justify-content-between'
      interval={null}>
      {tasks.map((task, index) => {
        const hasTaskExplain = task['описание'].explain ? true : false;
        return (
          <Carousel.Item key={index}>
            <Carousel.Caption className='carousel_caption'>
              <h3 className='tasks__title'>Задание {index + 1}</h3>
              {hasTaskExplain ? (
                <ExplainText
                  taskDescription={task['описание'].text}
                  explain={task['описание'].explain}
                />
              ) : (
                <p className='tasks__description first-letter-cup'>
                  {task['описание'].text}
                </p>
              )}
              <Options task={task} />
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
