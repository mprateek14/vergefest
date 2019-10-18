import React from 'react'
import "./coming.css"
import BoBar from './bar'

export default function coming() {
    return (

        <div className="bg">
            <BoBar/>
            <div className="container-fluid d-flex justify-content-center col-xs-12" style={{paddingBottom:"20rem", paddingTop:"4rem"}}>
            <div className="row col-xs-12">
                
                <div className="text-center col-xs-12">
                    <img src= {'https://i.ibb.co/KsnRLCM/vergesoon.gif'} alt="Coming Soon"/>
                </div>
                
            
            </div>
            </div>
        </div>
    )
}
