import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MovieList.module.css';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieList = ({ movies, onItemClick, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
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
  onItemClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default MovieList;
