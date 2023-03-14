import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMovieDetails } from '../../Api';

function MovieDetails({ match }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const { id } = match.params;
      const data = await getMovieDetails(id);
      setMovie(data);
    };

    fetchMovieDetails();
  }, [match.params]);

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.poster_path} alt={movie.title} />
          <p>{movie.overview}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
