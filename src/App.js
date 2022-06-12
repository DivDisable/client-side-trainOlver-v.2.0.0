import GetStarted from './components/routes/GetStarted';
import Trainolver from './components/Trainolver/Trainolver';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetStarted />} />
          <Route path='trainolver' element={<Trainolver />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
