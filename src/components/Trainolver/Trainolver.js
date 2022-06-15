import { useState } from 'react';

import { ThemeContext, themes } from '../../theme-context';
import Form from '../Form/Form';
import Modal from '../Modal/Modal';
import Navigation from '../Navigation/Navigation';

import { useThemeController } from '../../customHooks';
import { saveToLocalStorage } from '../../utilize';

function Trainolver() {
  const [tasks, setTasks] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [theme, setTheme] = useThemeController(themes['лазание']);
  const [isLoading, setIsLoading] = useState(true);
  const [difficulty, setDifficulty] = useState('');

  const toggleTheme = (themeName) => {
    saveToLocalStorage('theme', themes[themeName]);
    setTheme(themes[themeName]);
  };

  const showModal = () => {
    setModalShow(true);
  };


  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <Navigation />
      <Form
        showModal={showModal}
        setDifficulty={setDifficulty}
        setTasks={setTasks}
        setIsLoading={setIsLoading}
      />
      <Modal
        onHide={closeModal}
        show={modalShow}
        className={`modal_custom modal_${theme.bgColor.slice(1)}`}
        theme={theme}
        tasks={tasks}
        isLoading={isLoading}
        difficulty={difficulty}
      />
    </ThemeContext.Provider>
  );
}

export default Trainolver;
