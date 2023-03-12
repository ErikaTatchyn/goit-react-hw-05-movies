import Header from 'components/Header/Header';
import { useState, useEffect } from 'react';
import { getTrendingMovies, searchMovies } from '../../Api';
import MovieList from './MovieList/MovieList';
import styles from './MoviePage.module.css';

function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies()
      .then(movies => {
        setMovies(movies);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = query => {
    setIsLoading(true);
    searchMovies(query)
      .then(movies => {
        setMovies(movies);
        setIsLoading(false);
        setSearchQuery(query);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
        setSearchQuery(query);
      });
  };

  return (
    <>
      {' '}
      <Header />
      <div className={styles.container}>
        {!isLoading && !error && (
          <div>
            {searchQuery ? (
              <h2 className={styles.title}>
                Search Results for "{searchQuery}"
              </h2>
            ) : (
              <h2 className={styles.title}>Popular Movies</h2>
            )}
            <div className={styles.movieList}>
              <MovieList movies={movies} onSearch={handleSearch} />
            </div>
          </div>
        )}{' '}
      </div>
    </>
  );
}

export default MoviePage;
