// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import './App.css';
import Navigation from './components/Navigation.js';

// Import Pages
import HomePage from './pages/HomePage';
import AddGamePage from './pages/AddGamePage';
import EditGamePage from './pages/EditGamePage';

// Define the function that renders the content in routes using State.
function App() {

  const [game, setGameToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Game Inventory</h1>
          </header>
          <Navigation />
          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage setGame={setGameToEdit}/>} />
                    <Route path="/create" element={<AddGamePage />} /> 
                    <Route path="/update" element={<EditGamePage gameToEdit={game} />} />
                </Routes>
              </section>
          </main>

      </BrowserRouter>
    </>
  );
}

export default App;