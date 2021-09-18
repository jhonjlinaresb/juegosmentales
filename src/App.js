
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Importamos los componentes a utilizar en en el App.js

import Menu from './components/menu';
import Home from './components/home';

//Importamos los containers que generan los juegos.
import Game1 from './containers/principiante/game1/game1';



function App() {
  return (
    <BrowserRouter>
    
    <Switch>
    
    <Route exact path="/" component={Home} />
    <Route path="/menu" component={Menu} exact/>
    
    <Route path="/game1" component={Game1} exact />
    
    </Switch>
    </BrowserRouter>
  );
}

export default App;
