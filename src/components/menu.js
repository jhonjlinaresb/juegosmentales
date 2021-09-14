import React from "react";
import {Link} from "react-router-dom";

function Menu() {
  return (
    
    <div className="menu">
      <div className="menu__item">
        <a href="#">Principiante</a>
        <ul>
          <li> <Link to ="/game1"> Juego 1</Link> </li>
          <li>Juego 2</li>
        </ul>
      </div>
      <div className="menu__item">
        <a href="#">Curioso</a>
      </div>
      <div className="menu__item">
        <a href="#">Experto</a>
      </div>
    </div>
  );
}

export default Menu;