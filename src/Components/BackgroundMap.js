import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: window.innerWidth,
    height: window.innerHeight 
}

const center = {
    lat: 29.64808581127794, 
    lng: -82.34378140944524
};

class BackgroundMap extends Component {

    state = { userLocation: center, loading: true };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
    
            this.setState({
              userLocation: { lat: latitude, lng: longitude },
              loading: false
            });
          },
          () => {
            this.setState({ loading: false });
          }
        );
      }


  render() {
    const { loading, userLocation } = this.state;

    if(loading){
        return null;
    }
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAA5cykiSBpf6JgrAqkv8jzHUrayz_Dhi4"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation}
          zoom={15}
        >
          { /* Child components, such as markers, info windows, etc. */
          <Marker position={userLocation}/>
          }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default BackgroundMap