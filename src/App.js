
import { useEffect, useState } from 'react';
import './App.css';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import { useMemo } from "react";
import {Map} from './Map/Map.jsx';
import { ApiConfig } from './api/serviceApi';
import  {Electrician} from './pages/Electrician.jsx';

function App() {

  const  [elec, setElec]=useState([]);
  const {isLoaded} = useLoadScript({
    googleMapsApiKey:"AIzaSyC_xxE0PCh6jr1dn4M1RFcRA5hLs6urffg"});

  useEffect(()=>{
    fetch(ApiConfig.API_URL2)
    .then(response=> response.json())
    .then(responseJson=>{
      setElec(responseJson)
    })
  },[])

  return (
    <div className="App">  
      <header className="App-header">
        {isLoaded ? <Map /> : <h3>Loading...</h3>}
      </header>
      <Electrician></Electrician>
    </div>
    
  );
}

export default App;
