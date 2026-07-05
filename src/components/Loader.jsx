/**
 * Loader
 * Simple animated spinner shown while an API request is in flight.
 */
function Loader() {
  return (
    <div className="loader-wrap" role="status" aria-live="polite">
      <div className="film-spinner" />
      <p>Rolling the film reel...</p>
    </div>
  );
}

export default Loader;