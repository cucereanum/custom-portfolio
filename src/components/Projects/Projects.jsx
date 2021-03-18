import React from 'react';
import {Card,CardActionArea,CardActions,CardContent,CardMedia,Typography  } from '@material-ui/core/';

import amazon from '../../files/amazon.jpg';
import social from '../../files/social.jpg';
import covid from '../../files/covid.jpg';
import './Projects.css';
import '../about/About.css';

import Video from '../Video';

import useStyles from './styles';


const iconStyle = {
  fontSize: '2.5rem',
   marginTop:'-1rem',
   marginRight:'2rem',
   opacity: 0.8,
  };


function Projects() {
    const classes = useStyles();

    return (
      <>
        <Video />
        <div className="projects-container">
 <Card data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"  className={["project-card", classes.root]}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={amazon}
          title="amazon"
        />
        <CardContent className=" card-palette">
          <Typography gutterBottom variant="h5" component="h2">
            E-commerce App
          </Typography>
          <Typography variant="body2"  component="p">
            Full stack e-commerce App with React.js, Node.js and Stripe.
            
            
          </Typography>
          <br/>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-actions">
       <div className="tooltip"> <a className="footer__link" href="https://github.com/cucereanum/anonim_socialmedia" target="_blank" rel="noopener noreferrer">
             <span className="tooltiptext tooltip-ex-top">Repository</span>
              <i style={iconStyle} class="fab fa-github"></i>
            </a></div>
            <div className="tooltip"> <a className="footer__link" href="https://clone-5fd29.web.app/" target="_blank" rel="noopener noreferrer">
             <span className="tooltiptext tooltip-ex-top">Link To Project</span>
              <i style={iconStyle} class="fas fa-external-link-alt"></i>
            </a></div>
      </CardActions>
    </Card>

 <Card  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="0" className={["project-card", classes.root]}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image={covid}
          title="covid"
        />
        <CardContent className=" card-palette">
          <Typography gutterBottom variant="h5" component="h2">
            Covid19-Tracker
          </Typography>
          <Typography variant="body2"  component="p">
           The main subject that is discussing basically every day is Covid-19. Here you can have a look about Covid-19 situation worldwide.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-actions">
         <div className="tooltip"> <a className="footer__link" href="https://github.com/cucereanum/covid" target="_blank" rel="noopener noreferrer">
             <span className="tooltiptext tooltip-ex-top">Repository</span>
              <i style={iconStyle} class="fab fa-github"></i>
            </a></div>
            <div className="tooltip"> <a className="footer__link" href="https://covid-19tracker-2f024f.netlify.app/" target="_blank" rel="noopener noreferrer">
             <span className="tooltiptext tooltip-ex-top">Link To Project</span>
              <i style={iconStyle} class="fas fa-external-link-alt"></i>
            </a></div>
      </CardActions>
    </Card>
 <Card  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="500"
     data-aos-offset="0" className={["project-card", classes.root]}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={social}
          title="social"
        />
        <CardContent className=" card-palette">
          <Typography gutterBottom variant="h5" component="h2">
            Pixel
          </Typography>
          <Typography variant="body2"  component="p">
            Pixel is a full-stack socialmedia application built with Node,js, Firebase and React,js with Redux.
          </Typography>
        </CardContent>
      </CardActionArea>
        <CardActions className="card-actions">
         <div className="tooltip"> <a className="footer__link" href="https://github.com/cucereanum/pixel-frontend" target="_blank" rel="noopener noreferrer">
             <span className="tooltiptext tooltip-ex-top">Repository</span>
              <i style={iconStyle} class="fab fa-github"></i>
            </a></div>
            <div className="tooltip"> <a className="footer__link" href="https://pixel-68b4f.web.app/" target="_blank" rel="noopener noreferrer">
             <span className="tooltiptext tooltip-ex-top">Link To Project</span>
              <i style={iconStyle} class="fas fa-external-link-alt"></i>
            </a></div>
      </CardActions>
    </Card>
      </div>
      </>
    )
}

export default Projects
