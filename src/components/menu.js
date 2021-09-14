import React from "react";
import {Link} from "react-router-dom";
import brain from '../brain.svg';

function Menu() {
  return (
    <div className="App">
    <div className="menu">
        <h6>Juegos Mentales</h6>
        <img src={brain} className="brain" alt="brain" />
        <p>
          Prepárate para alimentar tu mente...
        </p>
        <Link to="/menu">
        <button>Iniciar</button>
        </Link>
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
    </div>
  );
}

export default Menu;