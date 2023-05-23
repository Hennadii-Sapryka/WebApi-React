
import { useState, useCallback } from 'react';
import { GoogleMap, Marker } from "@react-google-maps/api";
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import  InputLabel  from '@mui/material/InputLabel/InputLabel';
import  InputAdornment  from '@mui/material/InputAdornment/InputAdornment.js';
import  TextField  from '@mui/material/TextField/TextField';

const containerStyle = {
    width: '80vh',
    height: '80vh'
};

const center = {
    lat: 24.723456,
    lng: 46.70095
};

export  const Map = () => {
    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, []);

    const onUnmount = useCallback((map) => {
        setMap(null)
    }, []);

    const [map, setMap] = useState(null);

    const header = () => (
        <div style={{ backgroundColor: "pink" }}>
            <Typography variant='h4'>
                U S E R S
            </Typography>
            <TextField label='Search for...' variant='outlined'/>
            <div
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent:'center', padding: '5px 40px 5px 5px' }}>
                <Typography >Dictance</Typography>
                <Slider style={{ width: '75%' }}></Slider>
            </div>
            <div>
                <Button variant='outlined'>Resset</Button>
                <Button variant='contained'>Search</Button>
            </div>
        </div>);


    return (
        <div>
            {header()}
            <div style={{ backgroundColor: "cyan" }}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    <Marker
                        position={center}
                        icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />
                    <></>
                </GoogleMap>
            </div>
        </div>

    );
}
