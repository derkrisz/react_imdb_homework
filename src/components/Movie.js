import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div className="movie">
        <h5>{this.props.title} {this.props.showtime}</h5>
      </div>
    )
  }
}

export default Movie;
