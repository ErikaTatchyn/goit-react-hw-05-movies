import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import { getTrendingMovies } from '../../Api';
import Header from 'components/Header/Header';
import { Link } from 'react-router-dom';

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
      <Header />
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <h2>{movie.title}</h2>
              </Link>
              <p>{movie.overview}</p>
            </li>
          ))}
      </ul>
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
