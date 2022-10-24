import './App.css';

import {Routes, Route} from 'react-router-dom'

// Components 
import Header from './components/Header'
import Footer from './components/Footer'


// Pages
import WelcomePage from './pages/WelcomePage'
import PlaceShipsPage from './pages/PlaceShipsPage'
import GameBoardPage from './pages/GameBoardPage'

function App() {
  return (
    <div >
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<WelcomePage/>}></Route>
          <Route path='place-ships' element={<PlaceShipsPage/>}></Route>
          <Route path='game-board' element={<GameBoardPage/>}></Route>          
        </Routes>
      </main>


      <footer><Footer/></footer>
    </div>
  );
}

export default App;
