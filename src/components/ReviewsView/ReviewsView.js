// import axios from 'axios';
import { Component } from 'react';

class ReviewsView extends Component {
  state = {};

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { reviews } = this.props;
    return (
      <div>
        <h1>Revievs</h1>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </div>
    );
  }
}

export default ReviewsView;
