import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
 
const style = {
    width: '20%',
    height: '40%'
  }

export class MapContainer extends Component {

  render() {
    return (
      <Map 
      google={this.props.google} 
      zoom={9} 
      style={style}
      initialCenter={{
        lat: 34.048368,
        lng: -118.239816
      }}
      >
 
        
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_MAP_KEY)
})(MapContainer)