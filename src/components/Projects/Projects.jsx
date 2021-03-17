import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography, Link  } from '@material-ui/core/';

import covid from '../../files/covid.jpg';
import Video from '../Video';

import useStyles from './styles';



function Projects() {
    const classes = useStyles();

    return (
      <>
      <Video />
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={covid}
          title="Covid"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2"  component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </>
   
    )
}

export default Projects
