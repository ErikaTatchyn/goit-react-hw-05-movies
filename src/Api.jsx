const apiKey = '2a9025d4ade10ae62b7db59578c20986';
const apiUrl = 'https://api.themoviedb.org/3';

// Get trending movies
export const getTrendingMovies = async () => {
  const response = await fetch(
    `${apiUrl}/trending/movie/day?api_key=${apiKey}`
  );
  const data = await response.json();
  return data.results;
};

// Search for movies
export const searchMovies = async query => {
  const response = await fetch(
    `${apiUrl}/search/movie?api_key=${apiKey}&query=${query}`
  );
  const data = await response.json();
  return data.results;
};

// Get movie details
export const getMovieDetails = async movieId => {
  const response = await fetch(`${apiUrl}/movie/${movieId}?api_key=${apiKey}`);
  const data = await response.json();
  return data;
};

// Get movie credits
export const getMovieCredits = async movieId => {
  const response = await fetch(
    `${apiUrl}/movie/${movieId}/credits?api_key=${apiKey}`
  );
  const data = await response.json();
  return data.cast;
};

// Get movie reviews
export const getMovieReviews = async movieId => {
  const response = await fetch(
    `${apiUrl}/movie/${movieId}/reviews?api_key=${apiKey}`
  );
  const data = await response.json();
  return data.results;
};
