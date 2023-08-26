import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/List/sidebar";
import Navbar from "./components/Navbar/navbar";
import Map from "./components/Map/map";
import MapContect from "./components/Map/map";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api";

function App() {
  const [count, setCount] = useState(0);
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    // console.log(coordinates, bounds )
    getPlacesData( )
    .then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [ coordinates, bounds]);


  return (
    <>
      <CssBaseline />
      <Navbar />
      <Grid
        container
        spacing={3}
        style={{
          // height:'100vh',
          width: "100vw",
        }}
      >
        <Grid item xs={12} md={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={4}>
          <MapContect 
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}

           />
        </Grid>
      </Grid>
      {/* <div className='flex flex-col'>
       <div>
         <Navbar/>
       </div>
       <div className='flex flex-row '>
       <div className='flex-2'><Sidebar/></div>
       <div className='flex-1'><MapContect/></div>
       </div>
        
      </div> */}
    </>
  );
}

export default App;
