import React from "react";
import AddColor from "./AddColor";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h1>Selected colors to my app</h1>
      <AddColor />
    </div>
  );
}

export default Header;
