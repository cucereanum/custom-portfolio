import React from 'react';
import './About.css';

import mario from '../../files/mario.png';
import Video from '../Video';


function About() {

const starFunc = (number) =>   {
  return   Array(number)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                &#11088;
              </span>
            ))};

    return (
        <div className="container">
            <Video />
      <div className="about grid ">
        <div   className="about__description">
            <h2 data-aos="fade-up" 
    data-aos-duration="1000" className="about__title">About me</h2>
             <h4 data-aos="fade-up" 
    data-aos-duration="1500" className="about__intro">Hello there! <br /> My name is Marius Cucereanu. <br /> I'm passionate about web development, learning something new every day and being a better version of myself.</h4>
        <br />
            <h3 data-aos="fade-up" data-aos-duration="1000"
     className="about__skills">My skills  <i>(5 star ratings)</i>:</h3>
            <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" 
     className="about_skills--list">
          <ul className="list--front">
              <li className="list--header">Front-end</li>
              <br/>
            <li>HTML/CSS
              {starFunc(4)}
            </li>
            <li> React.js
              {starFunc(4)}
            </li>
            <li> Redux
        {starFunc(3)}
            </li>
            <li> React Native
              {starFunc(4)}
            </li>
          </ul>
          <ul className="list--back">
            <li className="list--header">Back-end</li>
            <br/>
            <li> Node.js with Express {starFunc(3)}</li>
            <li> MongoDB
              {starFunc(3)}
            </li>
          </ul>
            </div>
               <ul data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" 
    
     className="list--other">
              <li className="list--header">Other Skills:</li>
              <br/>
            <li>Java
              {starFunc(3)}
            </li>
            <li> Object-oriented programming
        {starFunc(4)}
            </li>
            <li> Data Structures and Algorithms
              {starFunc(4)}
            </li>
          </ul>
        </div>
        <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="about__image" src={mario} alt="Mario"/>
        </div>
       
        </div>
    )
}

export default About
