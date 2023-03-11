import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Cast from './MovieDetailsPage/Cast/Cast';
import MovieDetails from './MovieDetailsPage/MovieDetails/MovieDetails';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import Reviews from './MovieDetailsPage/Reviews/Reviews';
import MovieCard from './MoviePage/MovieCard/MovieCard';
import MoviePage from './MoviePage/MoviePage';

export function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviePage />}>
            <Route path="/movies/:movieId" element={<MovieCard />} />
            <Route path=":movieId/cast" element={<Cast />} />
            <Route path=":movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies/:id" component={MovieDetails} />
        </Routes>
      </Suspense>
    </Router>
  );
}
