import React from 'react'
import "react-bootstrap"
import img1 from '../assets/72397.jpg'
import "./cardstyle.css"
import {eventList} from "./eventList";


const Card=props=>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imageUrl} alt="image" className="card-img-top" height="175px"/>
            </div>
            <div className="card-body header" text-dark>
                <h4>{props.name}</h4>
            </div>

            <div className="card-body text-dark cbody">
                
                <p className="card-text text-dark">
                   <b>{props.description}</b>
                </p>
                
                <a href="/comingsoon" className="btn btn-outline-primary">View Events</a>
            </div>

        </div>
    );
}

export default Card;