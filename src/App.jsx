import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SearchBar from './components/SearchBar/Index.jsx'
import MovieList from './components/MovieList/Index.jsx'
import { Routes, Route } from 'react-router-dom'
import MovieDetail from './components/MovieDetail/Index.jsx'

function App() {
  const [busqueda, setBusqueda] = useState('')


  return (
    <>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
      <Routes>
        <Route path="/" element={<MovieList busqueda={busqueda} />} />
        <Route path="/pelicula/:id" element={<MovieDetail />} />
      </Routes>
    </>
  )
}

export default App
