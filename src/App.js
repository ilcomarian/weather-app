import React, { Component } from "react";
import Titles from "./components/title";
import "./App.css";
import Form from "./components/form";
import Weather from "./components/weather";
import { Container, Row, Col } from "reactstrap";

const API_KEY = "6530558412203822b59382ff55156067";
class App extends Component {
  state = {
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
    // const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&APPID=fe70cb87356cb1fc32c8f039164103ea`;
    const data = await api_call.json();
    // const data2 = await api.json();
    console.log(data);
    if ((!city && !country) || !data.main) {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value."
      });
    } else {
      this.setState({
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
