import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import { initialFormData } from '../../initial.data';
import { excludeValueFromArray } from '../../utilize';

function Checkbox ({ label,
  id,
  disabled,
  dataFieldsetName, 
  setFormData, 
  isRandom }) {

  const [checked, setChecked] = useState(false);
  const handleClick = (event) => {
    const fieldsetName = event.target.dataset.fieldsetName;
    const inputName = event.target.dataset.inputName;

    setFormData((prevFormData) => {
      const workingFieldset = prevFormData[fieldsetName];

      if (workingFieldset.includes(inputName)) {
        return {
          ...prevFormData,
          [fieldsetName]: excludeValueFromArray(workingFieldset, inputName),
        };
      } else {
        return {
          ...prevFormData,
          [fieldsetName]: prevFormData[fieldsetName].concat(inputName),
        };
      }
    });
    setChecked(!checked);
  };

  useEffect(() => {
    setChecked(false);
    setFormData(initialFormData);
  }, [isRandom, setChecked, setFormData]);
  return (
    <Form.Check
      className='text-capitalize g-col-6'
      type='checkbox'
      id={id}
      label={label}
      disabled={disabled}
      checked={checked}
      onClick={handleClick}
      data-fieldset-name={dataFieldsetName}
      data-input-name={label}
    />
  )
}

export default Checkbox;
