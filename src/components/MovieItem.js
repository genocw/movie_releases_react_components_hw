import React, { Component } from 'react';

class MovieItem extends Component {
  render() {
    return (
      <div className="movie-item">
        <p className="title-link"><a href={this.props.link}>{this.props.title}</a></p>
        <p className="release-date">{this.props.release}</p>
      </div>
    );
  }
}

export default MovieItem;
