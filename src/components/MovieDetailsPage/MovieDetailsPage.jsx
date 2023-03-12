import { getMovieDetails, getMovieCredits, getMovieReviews } from 'Api';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movie = await getMovieDetails(movieId);
      setMovie(movie);
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleCastLinkClick = async () => {
    const credits = await getMovieCredits(movieId);
    setCredits(credits);
  };

  const handleReviewsLinkClick = async () => {
    const reviews = await getMovieReviews(movieId);
    setReviews(reviews);
  };

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  const { title, poster_path, overview, releaseDate, vote_average } = movie;

  return (
    <div className={styles.movieDetailsPage}>
      <div className={styles.movieDetails}>
        <img src={poster_path} alt={title} className={styles.poster} />

        <div className={styles.info}>
          <h1>{title}</h1>
          <p>{releaseDate}</p>
          <p>Rating: {vote_average}</p>
          <p>{overview}</p>
          <div className={styles.navigation}>
            <NavLink
              to={`/movies/${movieId}/cast`}
              activeClassName={styles.activeLink}
            >
              Cast
            </NavLink>
            <NavLink
              to={`/movies/${movieId}/reviews`}
              activeClassName={styles.activeLink}
            >
              Reviews
            </NavLink>
          </div>
        </div>
      </div>

      {credits && <Cast credits={credits} />}

      {reviews && <Reviews reviews={reviews} />}
    </div>
  );
};

export default MovieDetailsPage;
