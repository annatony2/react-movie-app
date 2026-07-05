import { useState, useCallback } from 'react';
import SearchBar from './components/SearchBar.jsx';
import MovieList from './components/MovieList.jsx';
import Loader from './components/Loader.jsx';
import Message from './components/Message.jsx';
import './App.css';

// Replace with your own OMDb API key: https://www.omdbapi.com/apikey.aspx
const API_KEY = '1ff94976';
const API_BASE_URL = 'https://www.omdbapi.com/';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // Tracks whether a search has been performed yet, to distinguish
  // the initial "intro" screen from a genuine "no results" screen.
  const [hasSearched, setHasSearched] = useState(false);

  const fetchMovies = useCallback(async (title) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(title)}&type=movie`
      );

      if (!response.ok) {
        // Handles network-level / HTTP-level failures
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        // OMDb returns Response: "False" with an Error message
        // for both "not found" and invalid API key cases.
        setMovies([]);
        if (data.Error && data.Error.toLowerCase().includes('invalid api key')) {
          setError('Invalid API key. Please check your OMDb API key.');
        }
      }
    } catch (err) {
      setError('Something went wrong while fetching movies. Please try again.');
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return (
        <Message
          type="error"
          title="Something went wrong"
          description={error}
        />
      );
    }

    if (!hasSearched) {
      return (
        <Message
          type="intro"
          title="Find your next favorite film"
          description="Search by title to see posters, release years, and more."
        />
      );
    }

    if (movies.length === 0) {
      return (
        <Message
          type="empty"
          title="No movies found"
          description="Try a different title or check your spelling."
        />
      );
    }

    return <MovieList movies={movies} />;
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="marquee-title">Marquee</h1>
        <p className="tagline">Your search, in lights.</p>
      </header>

      <SearchBar onSearch={fetchMovies} isLoading={isLoading} />

      {renderContent()}
    </div>
  );
}

export default App;