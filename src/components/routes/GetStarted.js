import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
import './GetStarted.css';

function GetStarted() {
  return (
    <div className='d-flex flex-column justify-content-center vh-100'>
      <header className='title d-flex flex-column align-items-center justify-content-center '>
        <h1 className='display-1'>Trainolver</h1>
        <small className='text-muted text-center'>
          Непредсказуемая тренировка <br /> Предсказуемый интерес
        </small>
      </header>
      <div className='d-flex flex-column align-items-center px-3'>
        <img
          src={logo}
          alt='logo'
          height='80'
          width='80'
          className='img_rotate mb-3 mb-md-4'
        />
        <Link
          to='trainolver'
          className='btn btn-primary btn-lg text-capitalize btn_custom'>
          начать
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;
