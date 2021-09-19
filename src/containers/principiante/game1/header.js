import React, { Component } from 'react';
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <header className="headerGame1"> 
        <div className="titulo">Juego Uno - Memoria</div>
          <div>
            <button className="boton-reiniciar" onClick={this.props.resetearPartida}>
              Reiniciar
            </button>
        </div>
        <div className="titulo">
          Intentos: {this.props.numeroDeIntentos}
        </div>
      </header>
    );
  }
};