import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import About from './Components/About';

function App() {
  return (
    <div className='flex justify-center'>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/profile' element={<About/>}/>
     </Routes>
    </div>
  );
}

export default App;
