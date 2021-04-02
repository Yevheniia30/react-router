import { Component } from 'react';
import axios from 'axios';
import { Route, NavLink, Link, Switch } from 'react-router-dom';
import movieApi from '../services/movies-api';
import CastView from '../components/CastView/CastView';
import ReviewsView from '../components/ReviewsView/ReviewsView';
import s from './MoviesView.module.css';
import defaultImage from '../images/default-poster.png';

// import CastView from './CastView';
// import ReviewsView from './ReviewsView';

class MovieDetailsView extends Component {
  state = {
    // movie: null,
    id: '',
    poster_path: '',
    original_title: '',
    overview: '',
    genres: [],
    vote_average: '',
    cast: [],
    reviews: [],
  };

  componentDidMount() {
    // инфо о фильме
    const { movieId } = this.props.match.params;

    movieApi.fetchMovieDetals({ movieId }).then(movie => {
      this.setState({
        // распіляем полученный объект в стейт и его значения заменяют значения стейта
        ...movie,
      });
      // console.log(movie);
    });

    // жанры
    movieApi.fetchGenres().then(genres => genres);

    // обзоры
    movieApi.fetchReviews({ movieId }).then(reviews => {
      this.setState({
        reviews: [...reviews],
      });
      // console.log(reviews);
    });

    // актеры
    movieApi.fetchCast({ movieId }).then(({ cast }) => {
      this.setState({
        cast: [...cast],
      });
      console.log(cast);
    });
  }

  render() {
    const {
      movieId,
      id,
      poster_path,
      original_title,
      overview,
      genres,
      vote_average,
      cast,
      reviews,
    } = this.state;
    // const { movieId } = this.props.match.params;

    const { url, path } = this.props.match;

    return (
      <div>
        <div>
          <img
            src={
              !poster_path
                ? defaultImage
                : `https://image.tmdb.org/t/p/w300/${poster_path}`
            }
            alt={original_title}
            width="300px"
          />
          <h2>{original_title}</h2>
          <p>User score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
              // <li>{name}</li>
            ))}
          </ul>
          {/* ------ */}
          {/* <ul>
            {cast.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul> */}
          {/*  */}
          {/* <ul>
            {reviews.map(({ id, content }) => (
              <li key={id}>{content}</li>
            ))}
          </ul> */}
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink
                to={`${url}/cast`}
                className={s.base}
                activeClassName={s.active}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/reviews`}
                className={s.base}
                activeClassName={s.active}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Route
          path={`${path}/cast`}
          render={props => {
            return <CastView {...props} cast={cast} />;
          }}
        />
        <Route
          path={`${path}/reviews`}
          render={props => {
            return <ReviewsView {...props} reviews={reviews} />;
          }}
        />
      </div>
    );
  }
}

export default MovieDetailsView;
