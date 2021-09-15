import React from "react";
import {Link} from "react-router-dom";
import brain from '../brain.svg';
//Importamos componentes de Material UI
import Typography from '@material-ui/core/Typography';
import {Button, Container, Box, AppBar, Toolbar} from '@material-ui/core';

import './home.css';

function Home() {
    

    return (
        <Container display="flex" flexWrap="wrap">
        
        <br />
        <Box className="box">
            <AppBar position="center"  color="primary">
            <Toolbar variant="regular">
            <Typography align="justify" variant="h4">
            Juegos Mentales</Typography>
            </Toolbar>
            </AppBar>
        </Box>
        <br />
        <Box className="box">
        <img src={brain} className="brain" alt="brain" />
        </Box>

        <Box className="box">
            <Typography variant="h3" gutterBottom>
            Prepárate para alimentar tu mente...
            </Typography>
        </Box>

        <Box className="box">
        <Link to="/menu" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">Iniciar</Button>
        </Link>
        </Box>
        
        
        
        </Container>
    );
    }

export default Home;