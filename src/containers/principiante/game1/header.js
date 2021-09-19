import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Importar componentes necesarios de css y material ui & iconos
import './header.css';
import { AppBar, Toolbar, Typography, Button, Box, Container} from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import HomeIcon from '@material-ui/icons/Home';

export default class Header extends Component {
  render() {
    return (
      <Container display="flex" flexWrap="wrap">
       <br />
        <Box className="headerGame1">
        <AppBar position="justify"  color="primary">
          <Toolbar variant="regular">
            <Typography align="center" variant="h4">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                size="small"
                variant="contained"
                color="transparent"
                startIcon={<HomeIcon />}
              >
                Volver
              </Button>
            </Link>
            {' '}
            Juego Uno - Memoria
            {' '}
            <span>
            {' '}
            Intentos: {this.props.numeroDeIntentos}
            {'   '}
            </span>
              <Button
                size="large"
                variant="contained"
                color="#6d1b7b"
                startIcon={<ReplayIcon />}  onClick={this.props.resetearPartida}>
              Reiniciar
            </Button>
        
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      </Container>
        
    );
  }
};