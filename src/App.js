import React from 'react';
import './assets/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Skills from './pages/skill/skills';
import Characters from './pages/characters/characters';
import Relics from './pages/relics/relics';
import Market from './pages/market/market';
import Jobs from 'pages/jobs/jobs';
function App() {
  const [Resources, setResources] = React.useState({
    crystal: 0,
    gold: 0,
    soul: 0,
  });
  const oldResources = React.useRef(Resources);
  const addresource = (resourcenName, changeNumber) => {
    setResources(oldstate => {
      return {
        ...oldstate,
        [resourcenName]: oldstate[resourcenName] + changeNumber
      };
    });
  };
  const adcount = React.useRef(0);
  const adaddresource = () => {
    if (adcount.current === 6) return;
    if (adcount.current & 1) {
      addresource('crystal', 3000);
    } else {
      addresource('gold', 3000);
    }
    adcount.current = adcount.current + 1;
  };
  const isShowAdbtn = adcount.current < 6;
  const [characterIndex, setCharacterInfex] = React.useState(0);
  return (
    <div className="Gamewrapper">
      <BrowserRouter>
        <div className='Gamecontainer'>
          <div className="flex-column-wrapper">
            <Routes>
              <Route path="/" element={
                <Home
                  resource={Resources}
                  oldResources={oldResources}
                  handleAdResource={adaddresource}
                  showadbtn={isShowAdbtn}
                  selecterIndex={characterIndex}
                />} />
              <Route path="/characters" element={
                <Characters
                  newResources={Resources}
                  oldResources={oldResources}
                  selecterIndex={characterIndex}
                  handleCharacters={setCharacterInfex}
                />} />
              <Route path="/relics" element={<Relics newResources={Resources} oldResources={oldResources} />} />
              <Route path="/skill" element={<Skills newResources={Resources} oldResources={oldResources} />} />
              <Route path="/jobs" element={<Jobs newResources={Resources} oldResources={oldResources} />} />
              <Route path="/market" element={<Market newResources={Resources} oldResources={oldResources} />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
