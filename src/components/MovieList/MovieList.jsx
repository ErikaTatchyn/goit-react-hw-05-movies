import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieList.module.css';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieList = ({ movies, onItemClick }) => {
  return (
    <>
      <ul className={styles.list}>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => onItemClick(movie.id)}
          />
        ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string,
      releaseDate: PropTypes.string,
      voteAverage: PropTypes.number,
    })
  ).isRequired,
  onItemClick: PropTypes.func,
};

export default MovieList;
