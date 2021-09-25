import React from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";

import "./Star.css";

const Star = ({ selected = true, onSelect = (f) => f }) => {
  const gold = "#ffd700";
  const noColor = "grey";
  return (
    <IconContext.Provider value={{ className: "star-svg" }}>
      <div onClick={onSelect}>
        <FaStar color={selected ? gold : noColor} onClick={onSelect} />
      </div>
    </IconContext.Provider>
  );
};

export default Star;
