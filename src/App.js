import React, { Component } from "react";
import Titles from "./components/title";
import "./App.css";
import Form from "./components/form";
import Weather from "./components/weather";
import { Container, Row, Col } from "reactstrap";
import Clock from "react-live-clock";
const API_KEY = "6530558412203822b59382ff55156067";

class App extends Component {
  state = {
    time: undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
    );
    const api_call2 = await fetch(
      `http://api.worldweatheronline.com/premium/v1/search.ashx?query=${city}&num_of_results=3&format=json&key=ef219a9c16e34b44a4b184959181211`
    );

    const data = await api_call.json();
    const data2 = await api_call2.json();
    const lat = data2.search_api.result[0].latitude;
    const lng = data2.search_api.result[0].longitude;
    const api_call3 = await fetch(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=RXXENGGRJ4UK&format=json&by=position&lat=${lat}&lng=${lng}`
    );
    const data3 = await api_call3.json();
    console.log(data3.zoneName);
    if ((!city && !country) || !data.main) {
      this.setState({
        time: undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value."
      });
    } else {
      this.setState({
        time: (
          <Clock format={"HH:mm:ss"} ticking={true} timezone={data3.zoneName} />
        ),
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
  };
  render() {
    return (
      <div className="App">
        <div>
          <div className="wrapper">
            <div className="main">
              <Container>
                <Row>
                  <Col xs="5" className="title-container">
                    <Titles />
                  </Col>
                  <Col xs="7" className="form-container">
                    <Form getWeather={this.getWeather} />

                    <Weather
                      time={this.state.time}
                      temperature={this.state.temperature}
                      humidity={this.state.humidity}
                      city={this.state.city}
                      country={this.state.country}
                      description={this.state.description}
                      error={this.state.error}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
