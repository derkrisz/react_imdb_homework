import React, { Component } from 'react';
import MovieList from '../components/MovieList'

class MovieBox extends Component {

  constructor() {
    super();
    this.state = {
      movies: [
        {id:1, title: "Sausage Party", showtime: "2017/11/11 23:00"},
        {id:2, title: "Cafe Society", showtime: "2018/02/21 17:00"},
        {id:3, title: "Morgan", showtime: "2017/12/05 11:00"}
      ]
    }
  }

  clickShowtimebutton() {
    console.log("button clicked");
  }

  render() {
    return(
      <div className="movie-box">
        <h1 className="header">UK Opening This Week</h1>
        <MovieList movies={this.state.movies} />
        <button onClick={this.clickShowtimebutton}>Get Showtimes >></button>
      </div>
    )
  }
}

export default MovieBox;
