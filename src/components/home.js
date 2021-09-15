import React from "react";
import {Link} from "react-router-dom";
import brain from '../brain.svg';
//Importamos componentes, iconos de Material UI
import Typography from '@material-ui/core/Typography';
import {Button, Container, Box, AppBar, Toolbar, BottomNavigation, BottomNavigationAction} from '@material-ui/core';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

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
        <Button startIcon={<PlayCircleFilledIcon />} variant="contained" color="primary">Iniciar</Button>
        </Link>
        </Box>
        
        
        <footer>
            <BottomNavigation showLabels>
            
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
            <BottomNavigationAction label="Github" icon={<GitHubIcon />} />
            </BottomNavigation>
        </footer>
        </Container>
    );
    }

export default Home;