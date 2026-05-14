import { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieList.css';
import MovieCard from '../MovieCard/Index.jsx';

function MovieList({ titulo }) {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const responseMovies = await axios.get('https://www.omdbapi.com/', {
          params: {
            apikey: 'c1ab0597',
            s: titulo
          }
        })
        setPeliculas(responseMovies.data.Search)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
    fetchPeliculas()
  }, [])

  
return (
  <>
    { loading ? <p>Cargando...</p> :
      error ? <p>Error: {error}</p> :
      peliculas.length === 0 ? <p>No hay resultados</p> :
      <div>
        {peliculas.map(pelicula => (
  <div key={pelicula.imdbID}>
    { pelicula.Poster !== "N/A" 
      ? <img src={pelicula.Poster} alt={pelicula.Title} />
      : <p>Sin imagen</p>
    }
    <h3>{pelicula.Title}</h3>
    <p>{pelicula.Year}</p>
  </div>
))}
      </div>
    }
  </>
)
}

export default MovieList;