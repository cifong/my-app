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
    crystal: 0,
    gold: 0,
    soul: 0,
  });
  const oldResources = React.useRef(Resources);
  const addresource = (resourcenName, changeNumber) => {
    setResources(oldstate => {
      oldResources.current = Resources;
      return {
        ...oldstate,
        [resourcenName]: oldstate[resourcenName] + changeNumber
      };
    });
  };
  const [adcount, setadcount] = React.useState(0);
  const adaddresource = () => {
    if(adcount === 6) return;
    if (adcount & 1) {
      addresource('crystal', 3000);
    } else {
      addresource('gold', 3000);
    }
    setadcount((prestate => prestate + 1));
  };
  const isShowAdbtn = adcount < 6;
  return (
    <div className="Gamewrapper">
      <BrowserRouter>
        <div className='Gamecontainer'>
          <Routes>
            <Route path="/" element={<Home resource={Resources} oldResources={oldResources} handleAdResource={adaddresource} showadbtn={isShowAdbtn}/>} />
            <Route path="/characters" element={<Characters newResources={Resources} oldResources={oldResources} />} />
            <Route path="/relics" element={<Relics newResources={Resources} oldResources={oldResources} />} />
            <Route path="/skill" element={<Skills newResources={Resources} oldResources={oldResources} />} />
            <Route path="/market" element={<Market newResources={Resources} oldResources={oldResources} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
