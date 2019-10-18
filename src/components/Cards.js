import React, { Component } from 'react'
import Card from './CardUi'
import {eventList} from "./eventList";


export default class Cards extends Component {
    
    render() {
        return (
        <div>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4" data-aos="slide-right" data-aos-duration="1100" data-aos-once="true"><Card name={eventList[0].name} description={eventList[0].description} imageUrl={eventList[0].imageUrl} /></div>
                    <div className="col-md-4"><Card name={eventList[1].name} description={eventList[1].description} imageUrl={eventList[1].imageUrl}/></div>
                    <div className="col-md-4 " data-aos="slide-left" data-aos-duration="1100" data-aos-once="true"><Card name={eventList[2].name} description={eventList[2].description} imageUrl={eventList[2].imageUrl}/></div>
                    
                </div>
               
            </div>

            <div className="container-fluid d-flex justify-content-center" style={{paddingBottom:"4rem"}}>
                <div className="row">
                    <div className="col-md-4" data-aos="slide-right" data-aos-duration="1100" data-aos-once="true"><Card name={eventList[3].name} description={eventList[3].description} imageUrl={eventList[3].imageUrl}/></div>
                    <div className="col-md-4"><Card name={eventList[4].name} description={eventList[4].description} imageUrl={eventList[4].imageUrl}/></div>
                    <div className="col-md-4" data-aos="slide-left" data-aos-duration="1100" data-aos-once="true"><Card name={eventList[5].name} description={eventList[5].description} imageUrl={eventList[5].imageUrl}/></div>
                    
                    
                </div>
               
            </div>
        </div>


        )
    }
}
