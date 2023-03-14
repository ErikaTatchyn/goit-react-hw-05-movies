import { getMovieDetails } from 'Api';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movie = await getMovieDetails(movieId);
      setMovie(movie);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  const { title, poster_path, overview, genres, runtime, budget, revenue } =
    movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const genresList = genres.map(genre => (
    <span key={genre.id} className={styles.genre}>
      {genre.name}
    </span>
  ));

  return (
    <>
      <div className={styles.container}>
        <div className={styles.movie}>
          <img src={posterUrl} alt={title} className={styles.poster} />

          <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.tagline}>{movie.tagline}</p>
            <div className={styles.genres}>{genresList}</div>
            <p className={styles.overview}>{overview}</p>
            <div className={styles.details}>
              <div className={styles.detailsItem}>
                <span className={styles.detailsLabel}>Runtime:</span>
                <span className={styles.detailsValue}>{runtime} min</span>
              </div>
              <div className={styles.detailsItem}>
                <span className={styles.detailsLabel}>Budget:</span>
                <span className={styles.detailsValue}>
                  ${budget.toLocaleString()}
                </span>
              </div>
              <div className={styles.detailsItem}>
                <span className={styles.detailsLabel}>Revenue:</span>
                <span className={styles.detailsValue}>
                  ${revenue.toLocaleString()}
                </span>
              </div>
            </div>
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
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
