import React from "react"

export default function Place(props){
   return( 
   <div className="place">
        <img src={props.items.coverImg} className="coverimg"/>
    <div className="place-info">
        <p> <span className="location">{props.items.location} </span> <a href= {props.items.map}>View on the maps</a><span></span></p>
        <h2 className="title">{props.items.title}</h2>
        <p className="date">{props.items.date}</p>
        <p>{props.items.description}</p>
        </div>
    </div>
    )
}