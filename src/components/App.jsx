import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Home from './Home/Home';
import Cast from './MovieDetailsPage/Cast/Cast';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import Reviews from './MovieDetailsPage/Reviews/Reviews';
import MoviePage from './MoviePage/MoviePage';

export function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path=":movieId/cast" element={<Cast />} />
            <Route path=":movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="/" element={<Outlet />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
