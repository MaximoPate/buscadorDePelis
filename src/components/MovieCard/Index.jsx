import "./MovieCard.css";
import {useNavigate} from 'react-router-dom';

function MovieCard({ poster, titulo, anio, type, id }) {
  const navigate = useNavigate();
  return (
    <div className="movie-card" onClick={() => navigate(`/pelicula/${id}`)}>
      <img src={poster} alt={titulo}/>
      <h2 className="movie-titulo">{titulo}</h2>
      <p className="movie-info">{anio} - {type}</p>
    </div>
  );
}
export default MovieCard;