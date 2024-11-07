import React from "react";
import "./Portafolio.css";
import uiNature from "./img/uiNature.png"
import tecno from "./img/tecno.png"


function Portafolio(){
    return(
        <div id="portafolio" className="portafolio">
           <h2>Design (Figma)</h2>
           <h3>UI/UX</h3>
           <div className="cajaportafolio">

               <div className="boxPorta">
               <div className="cajaImg">
                    <img src={uiNature} />
                  </div>
                  <h4>Dashboard Nature UI</h4>
                  <p>Design</p>
                  <div className="componentes">
                    <div>
                        Figma
                    </div>
                    
                    <a href="https://www.figma.com/proto/pswdG9fjyH323LHpowPMkW/Nature?t=dxQc2Jdc5Dsp097u-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2" target="_blank">
                    Preview
                    </a>
                  </div>
               </div>

               <div className="boxPorta">
                  <div className="cajaImg">
                    <img src={tecno} />
                  </div>
                  <h4>TecnoApp - App</h4>
                  <p>Design Ecommerce</p>
                  <div className="componentes">
                    <div>
                        Figma
                    </div>
                    
                    <a href="https://www.figma.com/proto/7F9l7FVPZQEt9AK5rBnD2m/Store%2Fapp?t=EIjaSseM1fWxKenf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2" target="_blank">
                    Preview
                    </a>
                  </div>
               </div>

               
           </div>
           
        </div>
    )
}

export default Portafolio;
