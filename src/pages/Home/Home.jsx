import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import { getTrendingMovies } from '../../Api';
import { Link } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import MovieCard from 'components/MovieCard/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTrendingMovies();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Popular Movies</h1>
      <MovieList movies={movies}>
        {movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </MovieList>
    </div>
  );
}

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    })
  ),
};
export default Home;
