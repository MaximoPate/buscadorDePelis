import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SearchBar from './components/SearchBar/Index.jsx'
import MovieList from './components/MovieList/Index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <MovieList titulo="pixels" />
    </>
  )
}

export default App
