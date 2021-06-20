

import React, { Component } from 'react';
//eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';



mapboxgl.accessToken='pk.eyJ1Ijoic2llbWFua29oZSIsImEiOiJja3Ezc2FvcWMwOGdhMnBxenZ1bWJzazJmIn0.3_qXAhQ6MZGcKUz1mNbNmg';

class Mapp extends Component {

    constructor(props){
        super(props);
        this.state = {
            lng: 10,
            lat: 80,
            zoom: 4
        }
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [19.189587645337962, 47.820288049293275], 
            zoom: this.state.zoom
        })
        
    }

    render(){
        return(
            <div>
                <div ref={el => this.mapContainer = el} style={{width:'100%', height:'100vh'}}/>
            </div>
        )
    }
}

export default Mapp;