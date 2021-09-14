import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import brain from '../brain.svg';

import Menu from "./menu";

function Home() {
   const handleClick = (onClick) => {
       <Menu />
   }
    
    return (
        
        <div className="App">
        <h6>Juegos Mentales</h6>
        <img src={brain} className="brain" alt="brain" />
        <p>
          Prepárate para alimentar tu mente...
        </p>
        
        <BrowserRouter>
        <button onClick={handleClick}>Iniciar</button>
        </BrowserRouter>
        </div>
    );
    }

export default Home;