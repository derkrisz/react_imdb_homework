import React, { Component } from 'react';
import MovieList from '../components/MovieList'

class MovieBox extends Component {
  render() {
    return(
      <div className="movie-box">
        <MovieList />
      </div>
    )
  }
}

export default MovieBox;
