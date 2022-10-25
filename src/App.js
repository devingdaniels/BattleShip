import './App.css';
import {Routes, Route} from 'react-router-dom'

// Pages
import WelcomePage from './pages/WelcomePage'
import PlaceShipsPage from './pages/PlaceShipsPage'
import GameBoardPage from './pages/GameBoardPage'

function App() {
  return (      
      <main>
        <Routes>
          <Route path='/' element={<WelcomePage/>}></Route>
          <Route path='place-ships' element={<PlaceShipsPage/>}></Route>
          <Route path='game-board' element={<GameBoardPage/>}></Route>          
        </Routes>
      </main>        
  );
}

export default App;
