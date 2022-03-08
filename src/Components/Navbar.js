import React from "react"
import cover from "../img/world.svg"

export default function Navbar(){
    return(
        <div className="logos">
            <p> <img src={cover} alt="world" className="logo" /> My Travel Journal</p>
        </div>
    )
}