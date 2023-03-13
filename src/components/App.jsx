import { Suspense } from 'react';
import { Router, Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Cast from './MovieDetailsPage/Cast/Cast';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import Reviews from './MovieDetailsPage/Reviews/Reviews';
import MoviePage from './MoviePage/MoviePage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route exact path="movies" element={<MoviePage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Outlet />} />
      </Route>
    </Routes>
  );
}
