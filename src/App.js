// import { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import s from './App.module.css';
import MoviesView from './views/MoviesView';

import NotFoundView from './views/NotFound';
import HomeMoviesView from './views/HomeMoviesView';
import MovieDetailView from './views/MovieDetailsView';

const App = () => {
  return (
    <div className={s.App}>
      <ul>
        <li>
          <NavLink exact to="/" className={s.base} activeClassName={s.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={s.base} activeClassName={s.active}>
            Movies
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomeMoviesView} />
        <Route exact path="/movies" component={MoviesView} />
        <Route path="/movies/:movieId" component={MovieDetailView} />
        {/* <Route path="/cast" component={CastView} />
        <Route path="/reviews" component={ReviewsView} /> */}
        <Route component={NotFoundView} />
      </Switch>
    </div>
  );
};

export default App;
