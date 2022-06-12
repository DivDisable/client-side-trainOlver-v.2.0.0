import React from 'react';
import { useContext } from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import Checkbox from '../Checkbox/Checkbox';

import { ThemeContext } from '../../theme-context';
import './Fieldset.css';

function Fieldset ({ fieldsetData, setFormData, isInputsEnable, isRandom }) {
  const themeControl = useContext(ThemeContext);
  const [theme] = themeControl;

  return (
    <fieldset className='mb-3 mb-sm-3 fieldset'>
      <Form.Group>
        <Form.Label className='fw-light first-letter-cup h5'>
          {fieldsetData.label}
        </Form.Label>
        <div
          className='d-grid gap-3 p-3 rounded'
          style={{ backgroundColor: theme.bgColor, transition: '0.5s' }}>
          {fieldsetData.inputs.map((input, index) => (
            <Checkbox
              key={index}
              label={input}
              id={input + fieldsetData.label}
              disabled={!isInputsEnable ? true : false}
              dataFieldsetName={fieldsetData.label}
              setFormData={setFormData}
              isRandom={isRandom}
            /> 
          ))}
        </div>
      </Form.Group>
    </fieldset>
  )
}


export default Fieldset;
