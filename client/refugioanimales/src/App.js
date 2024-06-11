import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Register from './Register';
import Login from './Login';
import Inicio from './Inicio';
import Adoptar from './Adoptar';
import Reportes from './Reportes';
import Contactanos from './Contactanos';
import Donaciones from './Donaciones';
import Configuracion from './Configuracion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<Login/>}/> 
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/register' element={<Register/>}/>
        <Route path = '/inicio' element={<Inicio/>}/>
        <Route path = '/adoptar' element={<Adoptar/>}/>
        <Route path = '/reportes' element={<Reportes/>}/>
        <Route path = '/contactanos' element={<Contactanos/>}/>
        <Route path = '/donaciones' element={<Donaciones/>}/>
        <Route path = '/configuracion' element={<Configuracion/>}/>
      </Routes>
    </Router>
  );
}

export default App;