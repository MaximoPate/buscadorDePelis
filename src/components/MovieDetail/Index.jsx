import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function MovieDetail() {
  const { id } = useParams() 
  const [pelicula, setPelicula] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDetalle = async () => {
      const res = await axios.get('https://www.omdbapi.com/', {
        params: { apikey: 'TU_API_KEY', i: id }  // con "i" buscás por imdbID
      })
      setPelicula(res.data)
      setLoading(false)
    }
    fetchDetalle()
  }, [id])

  return (
    <>
      { loading ? <p>Cargando...</p> :
        <div>
          <h1>{pelicula.Title}</h1>
          <img src={pelicula.Poster} alt={pelicula.Title} />
          <p>{pelicula.Plot}</p>
          <p>Director: {pelicula.Director}</p>
          <p>Año: {pelicula.Year}</p>
          <p>Género: {pelicula.Genre}</p>
        </div>
      }
    </>
  )
}

export default MovieDetail