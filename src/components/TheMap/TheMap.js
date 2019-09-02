import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Routes from "./Routes.json";

const mapStyles = {
  width: "100%",
  heght: "100%"
};
class TheMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    //remember to bind functions
    this.displayStartMarkers = this.displayStartMarkers.bind(this);
    this.displayEndMarkers = this.displayEndMarkers.bind(this);
  }
  displayStartMarkers = () => {
    return Routes.map((elem, index) => {
      console.log(elem);
      return (
          <Marker
            key={index}
            id={index}
            position={{
              lat: elem.startLat,
              lng: elem.startLong
            }}
            onClick={() => console.log("You clicked me!")}
          />
      );
    });
  };
  displayEndMarkers = () => {
    return Routes.map((elem, index) => {
      console.log(elem);
      return (
          <Marker
            key={index}
            id={index}
            position={{
              lat: elem.endLat,
              lng: elem.endLong
            }}
            onClick={() => console.log("You clicked me!")}
          />
      );
    });
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: Routes[0].startLat, lng: Routes[0].startLong }}
      >
        {this.displayStartMarkers()}
        {this.displayEndMarkers()}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBe55L9n7OhAF53KcEzDkxL1cM9vCGRdgg"
})(TheMap);
