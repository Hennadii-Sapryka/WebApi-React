
import { useEffect, useState } from 'react';
import './App.css';
import { Marker, useLoadScript } from "@react-google-maps/api";
import { Map } from './Map/Map.jsx';
import { ApiConfig } from './api/serviceApi';
import { Electrician } from './pages/Electrician.jsx';
import { MyHeader } from './Header/MyHeader.jsx';
import { MyMap } from './Map/MyMap.jsx';
import { List } from './List/List.jsx';
import { CssBaseLine, Grid } from '@material-ui/core/';
import { getPlacesData } from './api/index.js';
import { dataOfRestaurants } from './List/dataOfRest.js';

const App = () => {

  const [users, setUsers] = useState([]);
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [type, setType] = useState('restaurant');
  const [rating, setRating] = useState('');
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [autocomplete, setAutocomplete] = useState(null);

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

  let testPlace = dataOfRestaurants.map((place) => String(place.name));

  const [value, setValue] = useState(null);
  console.log(value);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  const onPlaceSearch = () => {
    let filtersearch = dataOfRestaurants.filter((place) => place.name === value);
    setFilteredPlaces(filtersearch);
  };

  useEffect(() => {
    setIsLoading(true);

    getPlacesData(type, bounds.sw, bounds.ne) //recive restourants
      .then((data) => {
        setPlaces(dataOfRestaurants.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setIsLoading(false);
      })
  }, [type, coordinates, bounds]);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
  }, [rating, value]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <MyHeader
          id={testPlace.id}
          options={testPlace}
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
            onPlaceSearch();
          }}
        >
        </MyHeader>
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List
              places={filteredPlaces.length ? filteredPlaces : places}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
              childClicked={childClicked}
              isLoading={isLoading}
            />
          </Grid>
          <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            {isLoaded ?
              <MyMap
                setBounds={setBounds}
                setCoordinates={setCoordinates}
                coordinates={coordinates}
                bounds={bounds}
                places={filteredPlaces.length ? filteredPlaces : places}
                setChildClicked={setChildClicked}

              /> : <h3>Loading...</h3>}
          </Grid>
        </Grid>
      </header>
      {/* <Electrician></Electrician> */}
    </div>

  );
}

export default App;
