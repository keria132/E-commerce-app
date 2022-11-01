import React from 'react';
import Heroblock from "./Heroblock/Heroblock"
import Features from "./Features/Features"
import Listings from "./Listings/Listings"
import About from "./About/About"

function Homepage(){
    return(
        <>
            <Heroblock/>
            <Features/>
            <Listings/>
            <About/>
        </>
    )
}

export default Homepage;