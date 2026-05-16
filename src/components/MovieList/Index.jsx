import { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieList.css';
import MovieCard from '../MovieCard/Index.jsx';

function MovieList({ busqueda }) {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!busqueda) return

    const fetchPeliculas = async () => {
      try {
        const responseMovies = await axios.get('https://www.omdbapi.com/', {
          params: {
            apikey: 'c1ab0597',
            s: busqueda
          }
        })
        setPeliculas(responseMovies.data.Search || [])
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
    fetchPeliculas()
  }, [busqueda])

  
return (
  <>
    { loading ? <p>Cargando...</p> :
      error ? <p>Error: {error}</p> :
      peliculas.length === 0 ? <p>No hay resultados</p> :

      <section className="movie-list">
        {
          peliculas.map(pelicula => (
            <MovieCard 
              key={pelicula.imdbID}
              id={pelicula.imdbID}
              poster={pelicula.Poster}
              titulo={pelicula.Title}
              anio={pelicula.Year}
              type={pelicula.Type}
            />
          ))
        }
      </section>
      
    }
  </>
)
}

export default MovieList;