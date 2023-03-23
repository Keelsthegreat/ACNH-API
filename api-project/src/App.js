import logo from './logo.svg';
import './App.css';
import Fish from './Components/Fish'
import Insects from './Components/Insects';
import SeaCreatures from './Components/SeaCreatures';
import Villagers from './Components/Villagers'
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div>
    <NavBar/>
    <Routes>
      {/* <Route path= '/' element={<Home/>}/> */}
      <Route path= '/Fish' element={<Fish/>}/>
      <Route path= '/Villagers' element={<Villagers/>}/>
    </Routes>

   </div>
);
}

export default App;
