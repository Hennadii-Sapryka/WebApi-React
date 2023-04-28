
import { useState, useCallback } from 'react';
import { GoogleMap, Marker} from "@react-google-maps/api";

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

export const Map = () => {
    const onLoad = useCallback((map)=> {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, []);

    const onUnmount = useCallback((map)=> {
        setMap(null)
    }, []);

    const [map, setMap] = useState(null);
    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}

        >
            <Marker position={center}></Marker>
            <></>
        </GoogleMap>
    );
}
