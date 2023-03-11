import { getMovieDetails } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cast from './Cast/Cast';

import styles from './MovieDetailsPage.module.css';
import Reviews from './Reviews/Reviews';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await getMovieDetails(movieId);
      setMovie(movie);
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  const {
    title,
    poster,
    genres,
    overview,
    releaseDate,
    voteAverage,
    credits,
    reviews,
  } = movie;

  return (
    <div className={styles.movieDetailsPage}>
      <div className={styles.movieDetails}>
        <img src={poster} alt={title} className={styles.poster} />

        <div className={styles.info}>
          <h1>{title}</h1>
          <p>{genres.join(', ')}</p>
          <p>{releaseDate}</p>
          <p>Rating: {voteAverage}</p>
          <p>{overview}</p>
        </div>
      </div>

      <Cast credits={credits} />

      <Reviews reviews={reviews} />
    </div>
  );
};

export default MovieDetailsPage;
