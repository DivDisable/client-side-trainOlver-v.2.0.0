import { useState, useEffect } from 'react';

import Switch from 'react-switch';
import BootstrapForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Fieldset from '../Fieldset/Fieldset';

import { initialFormData } from '../../initial.data';
import {
  objHasKey,
  buttonColorBasedOnBgColor,
  excludeValue,
  fieldsetsBasedOnSport
} from '../../utilize';
import { ThemeContext } from '../../theme-context';
import { useThemeContext } from '../../customHooks';

import './Form.css';

function Form({ showModal, setIsLoading, setTasks, setDifficulty }) {
  const [isRandom, setIsRandom] = useState(true);
  const [formData, setFormData] = useState(initialFormData);
  const [isInputsEnable, setIsInputsEnable] = useState(false);
  const [theme] = useThemeContext(ThemeContext);
  const [fieldsets, setFieldsets] = useState(
    fieldsetsBasedOnSport(theme.sport)
  );

  const buttonColor = buttonColorBasedOnBgColor(theme.bgColor);

  const getTasks = async (event) => {
    showModal();
    await fetch('http://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.tasks);
        setDifficulty(data.difficultyLvl);
      });

    setIsLoading(false);
  };

  const handleSwitchClick = () => {
    setIsRandom(!isRandom);
    setIsInputsEnable(!isInputsEnable);
    if (!isRandom) setFormData(initialFormData);
  };

  useEffect(() => {
    setFormData((prevFormData) => ({ ...prevFormData, sport: theme.sport }));
    setFieldsets(fieldsetsBasedOnSport(theme.sport));
  }, [theme, setFormData, setFieldsets]);

  return (
    <BootstrapForm className='py-3 py-sm-4'>
      <Container>
        <div className='d-flex flex-column form__btn-switch-wrapper mb-3 mb-sm-4 mx-auto'>
          <label className='d-flex align-items-center align-self-end mb-1'>
            <BootstrapForm.Check
              type='switch'
              className='me-1'
              defaultChecked={isRandom}
              onChange={handleSwitchClick}
            />
            <span className='text_thin'>случайный поиск</span>
          </label>
          <Button
            className={`text-capitalize border-0 w-100 btn_${theme.bgColor.slice(
              1
            )}`}
            size='lg'
            variant='primary'
            style={{ backgroundColor: buttonColor, transition: '0.5s' }}
            onClick={getTasks}>
            go!
          </Button>
        </div>
        <Row>
          {fieldsets.map((fieldset, index) => {
            return (
              <Col xs={12} lg={6} key={index}>
                <Fieldset
                  fieldsetData={fieldset}
                  setFormData={setFormData}
                  isInputsEnable={isInputsEnable}
                  isRandom={isRandom}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </BootstrapForm>
  );
}
export default Form;
