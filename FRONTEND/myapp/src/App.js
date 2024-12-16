import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Login from './components/login';
import Register from './components/register';
import Home from './components/home';


function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;