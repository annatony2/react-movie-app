import { useState } from 'react';

/**
 * MovieCard
 * Renders a single movie result: poster, title, year, and type.
 * Falls back to a placeholder block if no poster is available
 * or if the poster image fails to load.
 */
function MovieCard({ movie }) {
  const [imgError, setImgError] = useState(false);

  const hasPoster = movie.Poster && movie.Poster !== 'N/A' && !imgError;

  return (
    <article className="movie-card">
      <div className="poster-wrap">
        {hasPoster ? (
          <img
            src={movie.Poster}
            alt={`${movie.Title} poster`}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="poster-placeholder">No Image Available</div>
        )}
      </div>

      <div className="ticket-divider" />

      <div className="movie-info">
        <h3 className="movie-title" title={movie.Title}>
          {movie.Title}
        </h3>
        <div className="movie-meta">
          <span className="movie-year">{movie.Year}</span>
          <span className="movie-type">{movie.Type}</span>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;