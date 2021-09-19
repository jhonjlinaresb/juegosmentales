import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import './carta.css'
import {Box } from '@material-ui/core'

export default class Carta extends Component {
  render() {
    return (
      
      <Box className="carta" onClick={this.props.seleccionarCarta}>
        <ReactCardFlip
          isFlipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
          flipDirection={this.props.estaSiendoComparada ? 'right' : 'left'}
          flipSpeed={this.props.estaSiendoComparada ? 'slow' : 'fast'}
          flipAnimation={this.props.estaSiendoComparada ? 'slide' : 'fade'}        
          disabled={false}
        >
          <Box className="portada"></Box>
          <Box className="contenido">
            <i className={`fa ${this.props.icono} fa-4x`}></i>
          </Box>
        </ReactCardFlip>
      </Box>
    )
  }  
};