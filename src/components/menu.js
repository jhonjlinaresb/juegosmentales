import React from "react";
import {Link} from "react-router-dom";

//Importar componentes de material-ui
import { makeStyles } from '@material-ui/core/styles';
import {Container, Card, CardActionArea, Button, CardContent} from '@material-ui/core';
import Typography from '@material-ui/core/Typography'; 
//import { MuiThemeProvider, createMuiTheme } from '@material-ui/styles';
//Importar Iconos a utilizar
import HomeIcon from '@material-ui/icons/Home';

import './menu.css';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0277bd',
    color: 'white',
  },
});

function Menu() {
  const classes = useStyles();
  return (
    <Container display="flex" flexWrap="wrap">
      <Link to="/" style={{ textDecoration: 'none' }}>
      <Button
        variant="contained"
        color="transparent"
        startIcon={<HomeIcon />}
      >
        Volver
      </Button>
      </Link>
      <br />
      <br />

    <Card className={classes.root}>
    <CardActionArea>
    <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Principiante
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
     </CardActionArea>
    </Card>
    <br />
     
    <Card className={classes.root}>
    <CardActionArea>
    <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Curioso
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </Typography>
        </CardContent>
     </CardActionArea>
    </Card>
    <br />
     
    <Card className={classes.root}>
    <CardActionArea>
    <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Experto
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
     </CardActionArea>
    </Card>
    <br />

    <Card className={classes.root}>
    <CardActionArea>
    <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Genio
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
     </CardActionArea>
    </Card>
    </Container>
  );
}

export default Menu;