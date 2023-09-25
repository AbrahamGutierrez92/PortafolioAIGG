import React from "react";
import './MainHome.css';
import imgBox from "./img/logog.gif";
import { 
    FaLinkedin, 
    FaGithub,
    FaInstagram 
} from 'react-icons/fa';
import { Link } from "react-router-dom";
//#171820 color de body
export default function MainHome(){
    return(
        <>
        <main className="main">
          <div className="container"> 
              <div className="box">
                 <div className="sociales">
                  <a href="https://www.linkedin.com/in/abraham-gutierrez-168586a5/" target="_blank"> <FaLinkedin/></a>
                  <a href="https://github.com/AbrahamGutierrez92" target="_blank"> <FaGithub/></a>
                  
                 </div>
                 <h2>Ing.Abraham Gutierrez</h2>
                 <h3>Web Devloper</h3>

                 <p>"Helping people turn their ideas into sites and apps that work.
                 Professional and Cost-Effective.
                 Always."
                </p>

                <a href="#portafolio" className="btn1">Portafolio</a>
              </div>

              <div className="box">
                 <img src={imgBox}/>
              </div>
          </div>
        </main>
        </>
    )
}