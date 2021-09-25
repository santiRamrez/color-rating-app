import React from "react";
import Color from "./Color";
import "./ColorList.css";

import colorData from "./color-data.json";

const ColorList = () => {
  const colors = [...colorData];
  return (
    <div className="board-colorList">
      {colors.map((color) => {
        return <Color key={color.id} {...color} />;
      })}
    </div>
  );
};

export default ColorList;
