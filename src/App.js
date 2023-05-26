
import { useEffect, useState } from 'react';
import './App.css';
import { Marker, useLoadScript } from "@react-google-maps/api";
import { Map } from './Map/Map.jsx';
import { ApiConfig } from './api/serviceApi';
import { Electrician } from './pages/Electrician.jsx';
import { MyHeader } from './Header/MyHeader.tsx';
import { MyMap } from './Map/MyMap.tsx';
import { List } from './List/List.tsx';
import { CssBaseLine, Grid } from '@material-ui/core/';
import  {getPlacesData}  from './api/index.js';



function App() {

  const [elec, setElec] = useState([]);

  const [places, setPlaces] = useState([]); 
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC_xxE0PCh6jr1dn4M1RFcRA5hLs6urffg"
  });

/*   useEffect(() => {
    fetch(ApiConfig.API_URL2)
      .then(response => response.json())
      .then(responseJson => {
        setElec(responseJson)
      })
  }, []) */

  useEffect(() => {
    console.log(coordinates, bounds);
    getPlacesData(bounds.sw, bounds.ne) //recive restourants
    .then((data) => {
      console.log(data); 
      setPlaces(data); 
    })
  }, [coordinates, bounds]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <MyHeader></MyHeader>
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List 
            places={places}
             />
          </Grid>
          <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            {isLoaded ? 
            <MyMap 
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            bounds={bounds}
            places={places}
            
            /> : <h3>Loading...</h3>}
          </Grid>
        </Grid>
      </header>
      {/* <Electrician></Electrician> */}
    </div>

  );
}

export default App;
