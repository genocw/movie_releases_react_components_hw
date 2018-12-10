import React, { Component, Fragment } from 'react';
import MovieList from '../components/MovieList.js'

class MovieBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 1,
          title: "Aquaman",
          release: "12 December 2018",
          link: "https://www.imdb.com/title/tt1477834"
        },
        {
          id: 2,
          title: "Spider-Man: Into the Spider-Verse",
          release: "12 December 2018",
          link: "https://www.imdb.com/title/tt4633694"
        },
        {
          id: 3,
          title: "The House That Jack Built",
          release: "14 December 2018",
          link: "https://www.imdb.com/title/tt4003440"
        },
        {
          id: 4,
          title: "Lizzie",
          release: "14 December 2018",
          link: "https://www.imdb.com/title/tt5160938"
        },
        {
          id: 5,
          title: "Free Solo",
          release: "14 December 2018",
          link: "https://www.imdb.com/title/tt7775622"
        }
      ]
    }
  }

  render() {
    return (
      <div className="movie-box">
        <div id="title">
        <h1>Upcoming Movie Releases UK</h1>
        </div>
        <MovieList data={this.state.movies}/>
        <div id="button"><a href="https://www.imdb.com/calendar/?region=gb">View More Upcoming Releases</a></div>
      </div>
    )
  }
}

export default MovieBox;
