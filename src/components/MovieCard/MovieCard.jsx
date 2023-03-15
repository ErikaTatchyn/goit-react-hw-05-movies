import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const { id, title, poster_path } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <Link to={`/movies/${id}`} className={styles.card}>
      <img
        src={
          posterUrl === 'https://image.tmdb.org/t/p/w500null'
            ? 'https://picsum.photos/id/26/200/300'
            : posterUrl
        }
        alt={title}
        className={styles.poster}
      />
      <div className={styles.title}>{title}</div>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
