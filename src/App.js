import React from 'react';
import './assets/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Skills from './pages/skill/skills';
import Characters from './pages/characters/characters';
import Relics from './pages/relics/relics';
import Market from './pages/market/market';
function App() {
  const [Resources, setResources] = React.useState({
    crystal: 2000,
    gold: 300000,
    soul: 99999999
  });
  const oldResources = React.useRef(Resources);
  React.useEffect(() => {
    oldResources.current = Resources;
  })
  const addresource = (resourcenName, changeNumber) => {
    setResources(oldstate => {
      return {
        ...oldstate,
        [resourcenName]: oldstate[resourcenName] + changeNumber
      }
    });
  }
  return (
    <div className="Gamewrapper">
      <BrowserRouter>
        <div className='Gamecontainer'>
          <Routes>
            <Route path="/" element={<Home resource={Resources} oldResources={oldResources.current} handleResource={addresource} />} />
            <Route path="/characters" element={<Characters newResources={Resources} oldResources={oldResources.current} />} />
            <Route path="/relics" element={<Relics newResources={Resources} oldResources={oldResources.current} />} />
            <Route path="/skill" element={<Skills newResources={Resources} oldResources={oldResources.current} />} />
            <Route path="/market" element={<Market newResources={Resources} oldResources={oldResources.current} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
