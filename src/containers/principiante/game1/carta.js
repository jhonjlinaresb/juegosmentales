import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import './carta.css'

export default class Carta extends Component {
  render() {
    return (
      <div className="carta" onClick={this.props.seleccionarCarta}>
        <ReactCardFlip
          isFlipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
          flipDirection={this.props.estaSiendoComparada ? 'right' : 'left'}
          flipSpeed={this.props.estaSiendoComparada ? 'slow' : 'fast'}
          flipAnimation={this.props.estaSiendoComparada ? 'slide' : 'fade'}
          disabled={this.props.estaSiendoComparada}
          disabled={false}
        >
          <div className="portada"></div>
          <div className="contenido">
            <i className={`fa ${this.props.icono} fa-5x`}></i>
          </div>
        </ReactCardFlip>
      </div>
    )
  }  
};