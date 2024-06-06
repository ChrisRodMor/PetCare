import './App.css';
import React from 'react';
import Register from './Register';
import Login from './Login';
import Inicio from './Inicio';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<Inicio/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/register' element={<Register/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;