import logo from './logo.svg';
import './App.css';
import Fish from './Components/Fish'
import Insects from './Components/Insects';
import SeaCreatures from './Components/SeaCreatures';
import Villagers from './Components/Villagers'
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Art from './Components/Art';
import { useState } from 'react';

function App() {
  const [showNav,setShowNav] = useState(true)
  const handleNavClick = () => {
    setShowNav(false)
  }
  return (
   <div>
    {showNav && <NavBar handleNavClick = {handleNavClick}/>}
    <Routes>
      {/* <Route path= '/' element={<Home/>}/> */}
      <Route path= '/Fish' element={<Fish/>}/>
      <Route path= '/Villagers' element={<Villagers/>}/>
      <Route path= '/Insects' element={<Insects/>}/>
      <Route path= 'SeaCreatures' element={<SeaCreatures/>}/>
      <Route path='/Art' element={<Art/>}/>
    </Routes>

   </div>
);
}

export default App;
