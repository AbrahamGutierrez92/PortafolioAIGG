import React from "react";
import "./Portafolio.css";
import Covid from "./img/Covid1.png"
import PortaAle from "./img/PortafolioAlejandraDuque1.png";
import StoreOnline from "./img/StoreOnline.png";
import Generacionempreden from "./img/GeProyect.png";
import natureImg from "./img/nature.png";
import BonikStore from "./img/ui-bonik1.png";
import FurniShop from "./img/FurniShop1.png";

function Portafolio(){
    return(
        <div id="portafolio" className="portafolio">
           <h2>Portafolio</h2>
           <h3>Front-End / Back-End</h3>
           <div className="cajaportafolio">

           <div className="boxPorta">
               <div className="cajaImg">
                    <img src={natureImg} />
                  </div>
                  <h4>Nature</h4>
                  <p>Dashboard - Api Rest</p>
                  <p>Node.js / Express.js / MySql</p>
                  <div className="componentes">
                    <div>
                        React
                    </div>
                    <div>
                      Tailwind.css
                    </div>
                    
                    <a href="https://github.com/AbrahamGutierrez92/front-nature" target="_blank">
                    Preview Code
                    </a>
                  </div>
            </div>

           <div className="boxPorta">
               <div className="cajaImg">
                    <img src={FurniShop} />
                  </div>
                  <h4>FurniShop</h4>
                  <p>Landing Pages FurniShop"</p>
                  <div className="componentes">
                    <div>
                        Html
                    </div>
                    <div>
                        CSS
                    </div>
                    <div>
                        JS
                    </div>
                    <a href="https://abrahamgutierrez92.github.io/muebles/" target="_blank">
                    Preview
                    </a>
                  </div>
            </div>

           <div className="boxPorta">
               <div className="cajaImg">
                    <img src={BonikStore} />
                  </div>
                  <h4>Bonik Store</h4>
                  <p>UI Ecommerce</p>
                  <div className="componentes">
                    <div>
                        HTML
                    </div>
                    <div>
                        CSS
                    </div>
                    <div>
                        JS
                    </div>
                    <a href="https://abrahamgutierrez92.github.io/Bonik-Store/" target="_blank">
                    Preview
                    </a>
                  </div>
               </div>

               <div className="boxPorta">
               <div className="cajaImg">
                    <img src={PortaAle} />
                  </div>
                  <h4>Portafolio</h4>
                  <p>UI website</p>
                  <div className="componentes">
                    <div>
                        HTML
                    </div>
                    <div>
                        CSS
                    </div>
                    <div>
                        JS
                    </div>
                    <a href="https://abrahamgutierrez92.github.io/PortafolioAlendraDuque/" target="_blank">
                    Preview
                    </a>
                  </div>
               </div>

               <div className="boxPorta">
                  <div className="cajaImg">
                    <img src={Covid} />
                  </div>
                  <h4>Covid tracking website</h4>
                  <p>COVID 19 measurement (App)</p>
                  <div className="componentes">
                    <div>
                        React.js
                    </div>
                    <div>
                        APIs
                    </div>
                    <a href="https://abrahamgutierrez92.github.io/Covid-19-Rest-Apis/" target="_blank">
                    Preview
                    </a>
                  </div>
               </div>

               
           </div>
           
        </div>
    )
}

export default Portafolio;
