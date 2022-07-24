import './assets/App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/home';
import Skills from './pages/skill/skills';
import Characters from './pages/characters/characters';
import Relics from './pages/relics/relics';
import Market from './pages/market/market';
function App() {
  return (
    <div className="Gamewrapper">
      <BrowserRouter>
        <div className='Gamecontainer'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/relics" element={<Relics />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/market" element={<Market />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
