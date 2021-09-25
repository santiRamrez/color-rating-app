import React from "react";
import StarRating from "./StarRating";

import "./Color.css";

const Color = ({ id, title, hex, rating }) => {
  return (
    <div className="color-card" style={{ borderColor: hex }}>
      <div className="color-description">
        <h2>{title}</h2>
        <p>{hex}</p>
        <StarRating {...rating} />
        <button className="delete-btn">Delete</button>
        <button className="edit-btn">Edit</button>
      </div>
      <div className="color-sqr" style={{ backgroundColor: hex }} />
    </div>
  );
};

export default Color;
