import React from 'react'
import './about/About.css';


const iconStyle = {
  fontSize: '3rem',
   marginTop:'-1rem',
   marginRight:'2rem',
   opacity: 0.8,
  };


function Footer() {
    return (
        <div className="about__footer">
          <h5 className="footer__copyright">Copyright &copy; 2021 MarioDev</h5>
          <ul className="footer__list">
            <li className="tooltip"> <a className="footer__link" href="https://www.linkedin.com/in/cucereanum/" target="_blank" rel="noopener noreferrer">
              <span className="tooltiptext tooltip-ex-top">Linkedin</span>
              <i style={iconStyle} class="fab fa-linkedin"></i>
            </a>
              </li>
            <li className="tooltip"> <a className="footer__link" href="https://github.com/cucereanum/" target="_blank" rel="noopener noreferrer">
             <span className="tooltiptext tooltip-ex-top">Github</span>
              <i style={iconStyle} class="fab fa-github"></i>
            </a></li>
            <li className="tooltip"><a className="footer__link" href="https://www.instagram.com/cucereanum/?hl=ro" target="_blank" rel="noopener noreferrer">
                <span className="tooltiptext tooltip-ex-top">Instagram</span>
              <i style={iconStyle} class="fab fa-instagram"></i>
            </a></li>
          </ul>
        </div>
    )
}

export default Footer
