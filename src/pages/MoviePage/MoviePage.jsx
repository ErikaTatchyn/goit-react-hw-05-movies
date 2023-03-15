import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../Api';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviePage.module.css';

function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  const onSubmit = searchQuery => {
    setSearchParams({ searchQuery });
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setIsLoading(true);
    searchMovies(searchQuery)
      .then(movies => {
        setMovies(movies);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [searchQuery]);

  return (
    <>
      <div className={styles.container}>
        {!isLoading && !error && (
          <div>
            <SearchBar onSubmit={onSubmit} />
            {searchQuery && (
              <h2 className={styles.title}>
                Search Results for "{searchQuery}"
              </h2>
            )}
            <div className={styles.movieList}>
              {movies.length !== 0 && (
                <MovieList movies={movies}>
                  {movies.map(movie => (
                    <Link key={movie.id} to={`/movies/${movie.id}`}>
                      <MovieCard movie={movie} />
                    </Link>
                  ))}
                </MovieList>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MoviePage;
