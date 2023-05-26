
import { useState, useCallback } from 'react';
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import {Header } from '../Header/Header'
import  GoogleMapReact from 'google-map-react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel/InputLabel';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment.js';
import TextField from '@mui/material/TextField/TextField';


const containerStyle = {
    width: '80vh',
    height: '80vh'
};

const center = {
    lat: 24.723456,
    lng: 46.70095
};


let shops = [
    {
        id: '1',
        name: 'LA SHOP',
        latitude: 24.676944035701325,
        longitude: 46.71918631636369
    },
    {
        id: '2',
        name: '5 Riyal Shop',
        latitude: 24.579993726546757,
        longitude: 46.77123534397916
    }
]

export const Map = () => {
    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, []);

    const onUnmount = useCallback((map) => {
        setMap(null)
    }, []);

    const [map, setMap] = useState(null);
    var state = false;

    return (
        <div>

            
            <div style={{ backgroundColor: "cyan", height:'800px', width:'500px' }}>
                <GoogleMapReact
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onClick={() => console.log('click')}
                >
                    <Marker
                        position={center}
                        icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}>
                    </Marker>
                </GoogleMapReact>
            </div>
        </div>

    );
}
