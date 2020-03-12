import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
 
const style = {
    width: '100%',
    height: '100%'
  }

export class MapContainer extends Component {
    
  render() {
    return (
      <Map 
      google={this.props.google} 
      zoom={9} 
      style={style}
      initialCenter={{
        lat: this.props.lat,
        lng: this.props.long
      }}
      >
          <Marker 
                        position={{lat: this.props.lat, lng: this.props.long}}
                       
                        />
        
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_MAP_KEY)
})(MapContainer)