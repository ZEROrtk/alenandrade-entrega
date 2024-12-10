import "./Footer.css"
import React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from '../Logo/logoz.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer font-['Open_Sans']">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links"> 
          <div className="sb__footer-links-div">
           
            <img src={logo} alt="" />
          </div>
          <div className="sb__footer-links_div">
            <h4>Contacto</h4>
            <a>
            <p>+56999775781</p>
            </a>
            <a >
            <p>alennicolas.andrade@alumnos.ulagos.cl</p>
            </a>
            
          </div>
      
          
          <div className="sb__footer-links_div">
              <h4>Companañía</h4>
              <a > 
            <Link spy={true} smooth={true} to="About"><p>Acerca de nosotros</p></Link>
              </a>
              
              <a >
              <Link spy={true} smooth={true} to="Contact"><p>Contacto</p></Link>
              </a>
             
          </div>
          <div className="sb__footer-links_div">
            <h4>Proximamente</h4>
            <div className="socialmedia">
              <p><FaFacebook /></p>
              <p><FaInstagram /></p>
              <p><FaTwitter /></p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} ZeroStore. Todos los derechos reservados
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a ><div><p>Terminos y Condiciones</p></div></a>
            <a ><div><p>Privacidad</p></div></a>
            <a ><div><p>Seguridad</p></div></a>
            <a ><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer;