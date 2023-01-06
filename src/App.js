import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './Mainpage';
import Messpage from './Messpage';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Mainpage></Mainpage>}></Route>
        <Route path='/mess' element={<Messpage></Messpage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
