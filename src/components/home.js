import React from "react";
import {Link} from "react-router-dom";
import brain from '../brain.svg';

function Home() {
    return (
        <div className="App">
        <h6>Juegos Mentales</h6>
        <img src={brain} className="brain" alt="brain" />
        <p>
          Prepárate para alimentar tu mente...
        </p>
        <Link to="/menu">
        <button>Iniciar</button>
        </Link>
        </div>
    );
    }

export default Home;