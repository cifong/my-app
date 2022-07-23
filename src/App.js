import './assets/App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/home/home';
import Skills from './components/skill/skills';
function App() {
  return (
    <div className="Gamewrapper">
      <BrowserRouter>
        <div className='Gamecontainer'>
          <Routes>
            <Route path="/skill" element={<Skills />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
