import MovieCard from './MovieCard.jsx';

/**
 * MovieList
 * Renders the responsive grid of MovieCard components.
 */
function MovieList({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        // imdbID is unique per OMDb result, making it a safe React key
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;