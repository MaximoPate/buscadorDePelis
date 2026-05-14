import "./MovieCard.css";

function MovieCard({ poster, titulo, anio, type }) {
  return (
    <div className="movie-card">
      <img src={poster} alt={titulo} className="movie-poster" />
      <h2 className="movie-titulo">{titulo}</h2>
      <p className="movie-info">{anio} - {type}</p>
    </div>
  );
}
export default MovieCard;