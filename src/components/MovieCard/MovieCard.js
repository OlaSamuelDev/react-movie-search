import React from "react";
import "./MovieCard.css";

const MovieCard = ({ props }) => {
  const { Poster, Title, Year } = props;
  return (
    <div className="movieCard">
      <img src={Poster} alt="" />
      <div>
        <div className="title">{Title}</div>
        <div className="year">{Year}</div>
      </div>
    </div>
  );
};

export default MovieCard;
