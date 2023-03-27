import './acnh.otf'
import './App.css';
import Fish from './Components/Fish'
import Insects from './Components/Insects';
import SeaCreatures from './Components/SeaCreatures';
import Villagers from './Components/Villagers'
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Art from './Components/Art';
import AboutMe from './Components/AboutMe';
import Home from  './Components/Home'

function App() {

  return (
   <div>
    
     <NavBar/>
    <Routes>
      <Route path= '/' element={<Home/>}/>
      <Route path= '/Fish' element={<Fish/>}/>
      <Route path= '/Villagers' element={<Villagers/>}/>
      <Route path= '/Insects' element={<Insects/>}/>
      <Route path= 'SeaCreatures' element={<SeaCreatures/>}/>
      <Route path='/Art' element={<Art/>}/>
      <Route path='/AboutMe' element={<AboutMe/>}/>
    </Routes>
     
   </div>
);
}

export default App;
