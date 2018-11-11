import React, { Component } from "react";

class Loction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let showPosition = position => {
      console.log(position.coords.latitude + " " + position.coords.longitude);
    };

    let getLocation = () => {
      if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        return "Geolocation is not supported by this browser.";
      }
    };

    return (
      <div>
        <i className="fa fa-search-location" onClick={getLocation} />
      </div>
    );
  }
}

export default Loction;
// var x = document.getElementById("demo");

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude;
// }
