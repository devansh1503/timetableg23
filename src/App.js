import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Mainpage from './Mainpage';
import Messpage from './Messpage';
import Navbar from './Navbar';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

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
