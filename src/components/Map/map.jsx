import * as React from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import 'mapbox-gl/dist/mapbox-gl.css';

import GoogleMapReact from 'google-map-react';
import { GoogleMap } from '@react-google-maps/api';
import useStyle from './styles';
import { useMediaQuery } from '@material-ui/core';


function MapContent({setCoordinates,setBounds,coordinates}) {
  const classes=useStyle();
  const isMobile = useMediaQuery('(min-width:600px)');
  
  return (
    // <Map
    //   mapboxAccessToken="pk.eyJ1IjoiYXJmYWtsIiwiYSI6ImNsYnQzd284eDA5OGUzcHBmc2VjOTJ4dzEifQ.RFRiN_WHNN8c4zO7nt2XLA"
      
    //   initialViewState={{
    //     longitude: -122.4,
    //     latitude: 37.8,
    //     zoom: 14,
    //     onchange: (viewport) => {
    //       setCoordinates({ lat: viewport.latitude, lng: viewport.longitude });
    //       setBounds([viewport.longitude, viewport.latitude]);
    //     },

    //   }}
    //   onchange={(e)
    //   => {
    //     setCoordinates({ lat: e.latitude, lng: e.longitude });
    //     setBounds([e.longitude, e.latitude]);

    //   }
    // }


      
    //   style={{width: 600, height: 400}}
    //   mapStyle="mapbox://styles/mapbox/streets-v9"
    // />
    <>
    <div className={classes.mapContainer}>
    <GoogleMapReact
    bootstrapURLKeys={{ key: "AIzaSyAHD9fCB1tlmFBQufvl_uTkd-WIICNXtwk"}}
    defaultCenter={coordinates}
    center={coordinates}
    defaultZoom={5}
    margin={[50, 50, 50, 50]}
    options={''}
    onChange={
      (e) => {
        console.log("consolee",e);
        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });

      
      }
    }
    // onChildClick={''}
    // onChildClick={''}
    >
    

    </GoogleMapReact>
    </div>
    </>
  );
}
export default MapContent;