import React from "react";
import Star from "./Star";

import "./StarRating.css";
let createArr = (length) => [...Array(length)];

const StarRating = ({ totalStars = 5, rating }) => {
  return (
    <div className="StarRating">
      {createArr(totalStars).map((n, i) => (
        <Star key={i} />
      ))}
    </div>
  );
};

export default StarRating;
