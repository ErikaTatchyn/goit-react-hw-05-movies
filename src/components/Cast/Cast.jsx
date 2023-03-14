import PropTypes from 'prop-types';
import styles from './Cast.module.css';

const Cast = ({ cast }) => (
  <ul className={styles.cast}>
    {cast &&
      cast.map(actor => (
        <li key={actor.id} className={styles.castItem}>
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={cast.original_name}
            className={styles.castItemImage}
          />
          <p className={styles.castItemName}>{actor.name}</p>
          <p className={styles.castItemCharacter}>
            Character: {actor.character}
          </p>
        </li>
      ))}
  </ul>
);

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
      character: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cast;
