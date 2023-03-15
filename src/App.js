import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Admin from './Components/Admin';
import Contestant from './Components/Contestant';
import Trans from './Components/Trans';
import Transilvania from './Components/Transilvania';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/transilvania" element={<Transilvania/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path='/transadmin' element={<Trans/>} />
        <Route path='/:id' element={<Contestant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
