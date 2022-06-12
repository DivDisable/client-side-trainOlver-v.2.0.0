import { useState, useEffect } from 'react';
import BootstrapModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { buttonColorBasedOnBgColor } from '../../utilize';
import Tasks from '../Tasks/Tasks';
import Diagram from '../Diagram/Diagram';
import { ClipLoader } from 'react-spinners';

import './Modal.css';
function Modal({
  onHide,
  show,
  className,
  theme,
  tasks,
  isLoading,
  difficulty
}) {
  const [showDiagram, setShowDiagram] = useState(false);

  const toggleDiagram = () => {
    setShowDiagram(!showDiagram);
  };

  useEffect(() => {
    // если модальное окно закрыто, скрыть диаграмму
    if (!show) {
      setShowDiagram(false);
    }
  }, [setShowDiagram, show]);

  const btnColor = buttonColorBasedOnBgColor(theme.bgColor);

  const showTasksOrDiagram = (condition) => {
    return condition ? (
      <div className='modal__diagram'>
        <Diagram tasks={tasks} />
      </div>
    ) : (
      <Tasks tasks={tasks} />
    );
  };
  return (
    <BootstrapModal
      onHide={onHide}
      show={show}
      className={className}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      backdrop='static'
      keyboard={false}>
      <BootstrapModal.Header closeButton style={{ backgroundColor: 'white' }}>
        <BootstrapModal.Title
          id='contained-modal-title-vcenter'
          className='text-capitalize'>
          {difficulty}
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        {isLoading ? (
          <ClipLoader size={150} />
        ) : (
          showTasksOrDiagram(showDiagram)
        )}
      </BootstrapModal.Body>
      <BootstrapModal.Footer style={{ backgroundColor: 'white' }}>
        {showDiagram ? null : (
          <Button
            style={{ backgroundColor: btnColor }}
            onClick={onHide}
            className={`first-letter-cup btn_${theme.bgColor.slice(1)}`}>
            закрыть
          </Button>
        )}
        <Button
          onClick={toggleDiagram}
          className={`first-letter-cup btn_${theme.bgColor.slice(1)}`}
          style={{ backgroundColor: btnColor }}>
          {showDiagram ? 'вернуться к заданиям' : 'акценты'}
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default Modal;
