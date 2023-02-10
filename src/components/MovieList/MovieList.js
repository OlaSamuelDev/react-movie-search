import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = props => {
  return props.hasResults ? (
    <div className="movieList">
      {props.movies.map((movie, index) => (
        <MovieCard key={index} props={movie} />
      ))}
    </div>
  ) : (
    <div className="noResults">Sorry there are no search results</div>
  );
};

export default MovieList;
