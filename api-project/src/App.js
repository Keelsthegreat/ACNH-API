import logo from './logo.svg';
import './App.css';
import Fish from './Components/Fish'
import Insects from './Components/Insects';
import SeaCreatures from './Components/SeaCreatures';
import Villagers from './Components/Villagers'
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Art from './Components/Art';
import AboutMe from './Components/AboutMe';
import { useState } from 'react';

function App() {

  return (
   <div>
    <h1 className='homeHeader'>Animal Crossing New Horizons Guide</h1>
     <NavBar/>
    <Routes>
      {/* <Route path= '/' element={<Home/>}/> */}
      <Route path= '/Fish' element={<Fish/>}/>
      <Route path= '/Villagers' element={<Villagers/>}/>
      <Route path= '/Insects' element={<Insects/>}/>
      <Route path= 'SeaCreatures' element={<SeaCreatures/>}/>
      <Route path='/Art' element={<Art/>}/>
    </Routes>
     <h4>Welcome to my ACNH guide! Here you will find information on the critterpedia, villagers and more!</h4>
   </div>
);
}

export default App;
