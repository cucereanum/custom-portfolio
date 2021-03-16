import React from 'react';
import './About.css';
import backgroundVideo from "../../files/video.mp4";
import mario from '../../files/mario.png';



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
             <video className="background__video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="about grid ">
        <div className="about__description">
            <h2 className="about__title">About me</h2>
             <h4 className="about__intro">Hello there! <br /> My name is Marius Cucereanu. <br /> I'm passionate about web development, learning something new every day and being a better version of myself.</h4>
        <br />
            <h3 className="about__skills">My skills  <i>(5 star ratings)</i>:</h3>
            <div className="about_skills--list">
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
            <li> Node.js with Express {starFunc(4)}</li>
            <li> MongoDB
              {starFunc(3)}
            </li>
          </ul>
            </div>
               <ul className="list--other">
              <li className="list--header">Other Skills:</li>
              <br/>
            <li>Java
              {starFunc(3)}
            </li>
            <li> GIT
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
        <img className="about__image" src={mario} alt="Mario"/>
        </div>
        <div className="about__footer">
          <h5 className="footer__copyright">Copyright 2021 MarioDev</h5>
          <ul className="footer__list">
            <li>icon</li>
            <li>icon</li>
            <li>icon</li>
          </ul>
        </div>
        </div>
    )
}

export default About
