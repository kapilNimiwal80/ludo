
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Dashboard from './page/Dashboard'
import GameList from './page/GameList'
import GameDetails from './page/GameDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './responsive.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/game-list" element={<GameList />} />
      <Route path="/game-detail" element={<GameDetails />} />
    </Routes>
  )
}
export default App;