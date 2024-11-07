import React from "react";
import MainHome from "../MainHome";
import About from "../About";
import Portafolio from "../Portafolio";
import DisenoUi from "../disenoUi"
import Held from "../Held.js";
import Skills from "../Skills";

function Home(){
    return(
        <>
        <MainHome/>
        <About/>
        <Portafolio/>
        <DisenoUi/>
        <Held/>
        <Skills/>
        </>
    )
}

export default Home;