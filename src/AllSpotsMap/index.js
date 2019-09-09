import React from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';






const style = {
    width: '50%',
    // height: '60%'
  }




const MapAllSpots = ({allSpots, google}) =>  {
    console.log(allSpots, 'should be all spots')
    return (
        <Map 
        google={google} 
        zoom={6} 
        style={style}
        initialCenter={{
            lat: 37.1661147,
            lng: -119.4495486
          }}
        >
            {allSpots.map((spot) =>  {
                    return (
                        <Marker 
                        key={spot.id}
                        position={{lat: spot.lat, lng: spot.long}}
                       
                        />
                    )
                })}
          
        </Map>
)
}







export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_MAP_KEY)
  })(MapAllSpots)