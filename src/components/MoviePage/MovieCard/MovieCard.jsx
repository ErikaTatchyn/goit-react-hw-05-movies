import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const { title, poster_path } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className={styles.card}>
      <img src={posterUrl} alt={title} className={styles.poster} />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
