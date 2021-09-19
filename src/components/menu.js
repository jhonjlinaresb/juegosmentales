import React from "react";
import {Link} from "react-router-dom";

//Importar componentes de material-ui
import { makeStyles } from '@material-ui/core/styles';
import {Container, Card, CardActionArea, Button, CardContent, AppBar, Toolbar, Box} from '@material-ui/core';
import Typography from '@material-ui/core/Typography'; 

//Importar Iconos a utilizar
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import './menu.css';

const useStyles = makeStyles({
    root: ({
    width: '100%',
    height: '100%',
    backgroundColor: '#0277bd',
    color: 'white',
  }),
  rootAux: ({
    width: '100%',
    height: '100%',
    backgroundColor: 'orange',
    color: 'white',
  }),
  text: ({
    textDecoration: 'none',
  }),
});

function Menu() {
  const classes = useStyles();
  return (
    <Container display="flex" flexWrap="wrap">
      <Box className="box">
        <AppBar position="center"  color="primary">
          <Toolbar variant="regular">
            <Typography align="justify" variant="h4">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                size="small"
                variant="contained"
                color="transparent"
                startIcon={<HomeIcon />}
              >
                Inicio
              </Button>
            </Link>
            {" "} Menú {" "}
            
            </Typography>
            <Typography align="justify" variant="h5">
            {" "} <SubdirectoryArrowRightIcon color="action" />  {" "} Elije la dificultad {" "}<TouchAppIcon color="action"  />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <br />

    <Link to="/game1" className={classes.text}>
    <Card className={classes.root}>
    <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Principiante <AccessibilityNewIcon />
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h6">
            Juego de Cartas, Agiliza tu mente recordando los íconos de las cartas.
          </Typography>
        </CardContent>
     </CardActionArea>
    </Card>
    </Link>
    <br />
     
    <Card className={classes.rootAux}>
    <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Curioso <NaturePeopleIcon />
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h6">
            Inactivo... <VisibilityOffIcon />
          </Typography>
        </CardContent>
     </CardActionArea>
    </Card>
    <br />
     
    <Card className={classes.rootAux}>
    <CardActionArea>
    <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Experto <FlashOnIcon />
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h6">
            Inactivo... <VisibilityOffIcon />
          </Typography>
        </CardContent>
     </CardActionArea>
    </Card>
    <br />

    <Card className={classes.rootAux}>
    <CardActionArea>
    <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Genio <EmojiObjectsIcon />
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h6">
            Inactivo... <VisibilityOffIcon />
          </Typography>
        </CardContent>
     </CardActionArea>
    </Card>
    </Container>
  );
}

export default Menu;