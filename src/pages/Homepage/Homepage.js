import React from 'react';
import Heroblock from "./Heroblock/Heroblock"
import Features from "./Features/Features"
import Listings from "./Listings/Listings"

function Homepage(){
    return(
        <>
            <Heroblock/>
            <Features/>
            <Listings/>
        </>
    )
}

export default Homepage;