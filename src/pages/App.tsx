import React from 'react';
import logo from './logo.svg';
import Formularios from '../components/Formularios';
import Listas from '../components/Listas';
import style from './App.module.scss';


function App() {
  return (
    <div className={style.AppStyle}>
      
    <Formularios/>  
    <Listas/>    
    </div>
  );
}

export default App;
