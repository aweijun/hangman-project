import logo from './logo.svg';
import './App.css';
import GameScreen from './pages/GameScreen';
import { Route, Routes } from 'react-router-dom';
import StartGameScreen from './pages/StartGameScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<StartGameScreen/>}/>
        <Route path = "/game" element = {<GameScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
