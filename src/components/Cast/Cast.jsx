import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'Api';
import styles from './Cast.module.css';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchCredits = async () => {
      const credits = await getMovieCredits(movieId);
      setCredits(credits);
    };
    fetchCredits();
  }, [movieId]);

  return (
    <ul className={styles.cast}>
      {credits &&
        credits.map(actor => (
          <li key={actor.id} className={styles.castItem}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : 'https://picsum.photos/id/22/200/300'
              }
              alt={credits.original_name}
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
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
