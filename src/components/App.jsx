import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import Home from '../pages/Home/Home';
import Cast from './Cast/Cast';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import Reviews from './Reviews/Reviews';
import MoviePage from '../pages/MoviePage/MoviePage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route exact path="movies" element={<MoviePage />} />
        <Route path="movies/:movieId/" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
