import { Component } from 'react';
import defaultImage from '../../images/default.jpg';

class CastView extends Component {
  state = {};

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { cast } = this.props;
    return (
      <div>
        <h1>Cast</h1>
        <ul>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  !profile_path
                    ? defaultImage
                    : `https://image.tmdb.org/t/p/w200/${profile_path}`
                }
                alt={name}
              ></img>
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CastView;
