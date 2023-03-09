import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Admin from './Components/Admin';
import Contestant from './Components/Contestant';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path='/:id' element={<Contestant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
