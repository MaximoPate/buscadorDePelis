import React from 'react'
import './SearchBar.css'

function SearchBar({busqueda, setBusqueda}) {
  return (
      <input 
        type="text" 
        placeholder="Insertar nombre..." 
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
  )
}

export default SearchBar